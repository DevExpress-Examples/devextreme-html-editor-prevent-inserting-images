<script setup lang="ts">
import { markup } from '@/data';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import {
  DxHtmlEditor,
  DxToolbar,
  DxItem,
} from 'devextreme-vue/html-editor';
import type { DxHtmlEditorTypes } from 'devextreme-vue/html-editor';

function onInitialized(e: DxHtmlEditorTypes.InitializedEvent): void {
  const Uploader = e.component?.get('modules/uploader');
  class DisabledUploader extends Uploader {
    constructor(quill: unknown, options: Record<string, unknown>) {
      super(quill, { ...options, mimetypes: [] });
      // empty array to prevent any image type from being pasted
    }
  }
  e.component?.register({ 'modules/uploader': DisabledUploader });
}
</script>

<template>
  <div>
    <DxHtmlEditor
      :height="500"
      :value="markup"
      @initialized="onInitialized"
    >
      <DxToolbar>
        <DxItem name="undo"/>
        <DxItem name="redo"/>
        <DxItem name="separator"/>
        <DxItem name="clear"/>
      </DxToolbar>
    </DxHtmlEditor>
  </div>
</template>
