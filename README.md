<!-- default badges list -->
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1231105)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->
# HtmlEditor for DevExtreme - How to prevent images from being dropped or pasted

If you want to prevent images from being dropped or pasted into the HtmlEditor component, configure allowed MIME image types.

```
onInitialized(e) {
    const Uploader = e.component.get('modules/uploader');
    class DisabledUploader extends Uploader {
        constructor(quill, options) {
            // Define empty array to prevent any image type from being pasted or dropped
            super(quill, { ...options, mimetypes: [] });
        }
    }
    e.component.register({ 'modules/uploader': DisabledUploader });
    },
```

Note: in this case, you cannot use drag-and-drop, the paste command, and the `base64` image uploader to upload local files. You can add images only in the `server` [upload mode](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/imageUpload/#fileUploadMode).

## Files to Review

- **jQuery**
    - [index.js](jQuery/src/index.js)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.ts](Angular/src/app/app.component.ts)
- **Vue**
    - [Home.vue](Vue/src/components/HomeContent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
- **NetCore**    
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Documentation

- [HtmlEditor - imageUpload](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxHtmlEditor/Configuration/imageUpload/)

## More Examples

- [HtmlEditor Overview Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/)
