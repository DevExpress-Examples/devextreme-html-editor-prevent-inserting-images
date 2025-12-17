import { Injectable } from '@angular/core';

const markup = '<h2>Formatted Text Editor (HTML Editor)</h2><p><br></p><p>DevExtreme JavaScript HTML Editor is a client-side WYSIWYG text editor that allows its users to format textual and visual content and store it as HTML or Markdown.</p>';

@Injectable()
export class Service {
  getMarkup(): string {
    return markup;
  }
}
