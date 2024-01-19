import { renderApplication } from '@angular/platform-server';
import bootstrap from './src/main.server';

export function render(req: any, document: string) {
  return renderApplication(bootstrap, {
    document,
  });
}
