export const handleFileUpload = (editor, resp) => {
  const fileUrl = resp.files?.[0];
  const fileType = fileUrl?.split('.').pop().toLowerCase();

  let htmlToInsert = '';

  if (fileType === 'pdf') {
    htmlToInsert = `<embed src="${fileUrl}" width="100%" height="400px" type="application/pdf"/>`;
  } else if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileType)) {
    htmlToInsert = `<img src="${fileUrl}" alt="Uploaded Image" style="max-width:100%;" />`;
  } else if (['mp4', 'webm', 'ogg'].includes(fileType)) {
    htmlToInsert = `
      <video width="100%" height="auto" controls>
        <source src="${fileUrl}" type="video/${fileType}">
        Your browser does not support the video tag.
      </video>
    `;
  } else {
    htmlToInsert = `<a href="${fileUrl}" target="_blank" download>Download file</a>`;
  }

  editor?.selection.insertHTML(htmlToInsert);
  return fileUrl;
};
