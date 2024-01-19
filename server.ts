import { renderApplication } from '@angular/platform-server';
import bootstrap from './src/main.server';

export function render(req: any) {
  return renderApplication(bootstrap, {
    document: `<!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>I18nNitroTest</title>
    <base href="/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>
  <body>
    <app-root></app-root>
  </body>
  </html>
  `,
  });
}
