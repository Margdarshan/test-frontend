const DB_NAME = 'margdarshanDB';
const STORE_NAME = 'tokens';
const DB_VERSION = 1;

// Open or create the IndexedDB database
function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = (event) => {
      reject(`IndexedDB error: ${event.target.errorCode}`);
    };
  });
}

async function getKeyMaterial(password) {
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    'PBKDF2',
    false,
    ['deriveKey']
  );
}

async function getKey(password, salt) {
  const keyMaterial = await getKeyMaterial(password);
  return window.crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: 100000,
      hash: 'SHA-256',
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

async function encryptData(data, password) {
  const enc = new TextEncoder();
  const salt = window.crypto.getRandomValues(new Uint8Array(16));
  const key = await getKey(password, salt);
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    enc.encode(data)
  );

  return {
    salt: Array.from(salt),
    iv: Array.from(iv),
    encrypted: Array.from(new Uint8Array(encrypted)),
  };
}

async function decryptData(encryptedData, password) {
  // const enc = new TextEncoder();
  const salt = new Uint8Array(encryptedData.salt);
  const iv = new Uint8Array(encryptedData.iv);
  const data = new Uint8Array(encryptedData.encrypted);
  const key = await getKey(password, salt);
  const decrypted = await window.crypto.subtle.decrypt(
    {
      name: 'AES-GCM',
      iv,
    },
    key,
    data
  );

  const dec = new TextDecoder();
  return dec.decode(decrypted);
}

export async function storeToken(key, value, expiryMinutes = 2880) {
  const email = localStorage.getItem('email');
  if (!email) {
    throw new Error('Email not found in local storage');
  }

  const expiryTime = Date.now() + expiryMinutes * 60 * 1000; // Calculate expiry time in milliseconds
  const encryptedData = await encryptData(value, email);
  const tokenData = { key, value: encryptedData, expiry: expiryTime };

  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(tokenData);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = (event) => {
        reject(`IndexedDB error: ${event.target.errorCode}`);
      };
    });
  } catch (error) {
    console.error('Error opening IndexedDB:', error);
  }
}

export async function getToken(key) {
  let email = localStorage.getItem('email');
  if (!email) {
    email = 'random@email.com';
  }

  try {
    const db = await openDatabase();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);

      request.onsuccess = async () => {
        const { result } = request;
        if (result) {
          // Check if token has expired
          if (result.expiry && result.expiry > Date.now()) {
            const decryptedData = await decryptData(result.value, email);
            resolve(decryptedData); // Return the decrypted value
          } else {
            deleteToken(key); // Delete expired token
            resolve(null);
          }
        } else {
          resolve(null); // No token found
        }
      };

      request.onerror = (event) => {
        console.error(
          `IndexedDB error during token retrieval for key ${key}:`,
          event.target.errorCode
        );
        reject(`IndexedDB error: ${event.target.errorCode}`);
      };
    });
  } catch (error) {
    console.error('Error opening IndexedDB:', error);
  }
}

export async function deleteToken(key) {
  const db = await openDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], 'readwrite');
    const store = transaction.objectStore(STORE_NAME);
    const request = store.delete(key);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject(`IndexedDB error: ${event.target.errorCode}`);
    };
  });
}
