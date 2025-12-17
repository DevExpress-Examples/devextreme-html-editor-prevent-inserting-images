$(() => {
  const editor = $('#editor').dxHtmlEditor({
    height: 500,
    value: markup,
    onInitialized(e) {
      const Uploader = e.component.get('modules/uploader');
      class DisabledUploader extends Uploader {
        constructor(quill, options) {
          // eslint-disable-next-line spellcheck/spell-checker
          super(quill, { ...options, mimetypes: [] });
          // empty array to prevent any image type from being pasted
        }
      }
      e.component.register({ 'modules/uploader': DisabledUploader });
    },
    imageUpload: {
      tabs: ['file', 'url'],
      fileUploadMode: 'base64',
    },
    toolbar: {
      items: [
        'undo', 'redo',
        'separator',
        'clear',
      ],
    },
    mediaResizing: {
      enabled: true,
    },
  }).dxHtmlEditor('instance');
});
