import React from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import HtmlEditor, { HtmlEditorTypes, Item, Toolbar } from 'devextreme-react/html-editor';
import { markup } from './Markup';

function onInitialized(e: HtmlEditorTypes.InitializedEvent): void {
  const Uploader = e.component?.get('modules/uploader');
  class DisabledUploader extends Uploader {
    constructor(quill: any, options: any) {
      // eslint-disable-next-line spellcheck/spell-checker
      super(quill, { ...options, mimetypes: [] });
      // empty array to prevent any image type from being pasted
    }
  }
  e.component?.register({ 'modules/uploader': DisabledUploader });
}

function App(): JSX.Element {
  return (
    <div className="main">
      <p>Try dropping or pasting an image to the editor.</p>
      <HtmlEditor onInitialized={onInitialized} height={500} defaultValue={markup}>
        <Toolbar>
          <Item name="undo" />
          <Item name="redo" />
          <Item name="separator" />
          <Item name="clear" />
        </Toolbar>
      </HtmlEditor>
    </div>
  );
}

export default App;
