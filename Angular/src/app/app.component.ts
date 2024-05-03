import { Component } from '@angular/core';
import { DxHtmlEditorTypes } from 'devextreme-angular/ui/html-editor';
import { Service } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service],
})
export class AppComponent {
  valueContent: string;

  constructor(service: Service) {
    this.valueContent = service.getMarkup();
  }

  onInitialized(e: DxHtmlEditorTypes.InitializedEvent): void {
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
}
