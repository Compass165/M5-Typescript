import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


let width: number;
let height: number;

width = 10.5;
height = 20;

let area: number = width * height;
console.log(`Diện tích hình chữ nhật: ${area}`);
