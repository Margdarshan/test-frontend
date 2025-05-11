# Welocome to Margdarshan Frontend team


### Before the contrinbution you have to clear with come terms

- Here is two branch  **main** and **dev**

### Purpose Of Both

- Main only for the Production.
- dev for the developement

### Remark

- Before the commit your code ensure that code is clear there is now error as well as it will be work.
- Commit on only dev branch and if possible please check you code with running build command.

# Steps to contribute

## Clone the repo

```bash
 git clone 'https://github.com/Margdarshan/frontend.git'

 ```

## Install the dependency

 ``` bash
 npm install -r package.json 
 ```

## Run command

 ```bash
  npm start

  ```

## Build Command

  ```bash

  npm run build
  ```

# Here is some Git command

## For checking the others commit

  ```bash
  git log

  ```

## For pull the code

  ```bash
  git pull
  ```

## Commit Your code

### Firs add your files

```bash
git add file1.jsx file2.jsx  // like this for only need files
git add . // for adding all files
```

### For push your commit

```git bash
git commit -m 'message of commit'
```

# Thank you  for any reference contact with you teammates

# Backend SRS Documentation

## 1. Welcome

### API: '/' ('GET' Method)

#### This API just returns the string 'Welcome to Margdarshan Backend System'

## 2. About

### API: '/about' ('POST' Method)

#### This API will take in the following parameters as Json

- 'first_name': 'string'
- 'last_name': 'string'
- 'email': 'string'
- 'phone': 'string'
- 'message': 'string' upto 255 Characters

#### The API will return the following parameters as Json

- Confirmation Message from Database as json.

## 3. College Predictor

### API: '/predictor' ('POST' Method)

#### This API will take in the following parameters as Json

- 'mains_rank': 'int'
- 'mains_percentile': 'float'
- 'advanced_rank': 'int'
- 'inputState': 'string'
- 'category': 'string'
- 'gender': 'string'
- 'pwd': 'string'
- 'limit': 'int'

#### The API will return the following parameters as Json

- 'year': 'year'
- 'ranks': 'int'
- 'category': 'string'
- 'college_list_result': 'html - table'

"lint": "eslint \"src/**/*.{js,jsx}\"",
    "lint:fix": "eslint \"src/**/*.{js,jsx}\" --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\""
