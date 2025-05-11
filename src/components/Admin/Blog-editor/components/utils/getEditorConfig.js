import { handleFileUpload } from './uploadHandler';

export const getEditorConfig = (editorRef) => ({
  readonly: false,
  height: 400,
  toolbarSticky: true,
  toolbarStickyOffset: 0,

  uploader: {
    url: 'http://localhost:5000/upload', // after getting the api from subham i have to change
    insertImageAsBase64URI: false,
    filesVariableName: () => 'files',
    withCredentials: false,
    isSuccess: (resp) => resp.success,
    getMessage: (resp) => resp.message || 'Upload failed',
    process: (resp) => handleFileUpload(editorRef.current?.editor, resp),
  },

  events: {
    afterPaste: () => console.log('Pasted'),
    afterDrop: () => console.log('Dropped'),
  },

  // buttons: [
  //   'bold',
  //   'italic',
  //   'underline',
  //   '|',
  //   'ul',
  //   'ol',
  //   '|',
  //   'file',
  //   'image',
  //   'video',
  //   '|',
  //   'link',
  //   'unlink',
  //   '|',
  //   'source',
  //   'fullsize',
  // ],
});
