import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { LoginModule } from './app/Core/Login/module/login.module';


platformBrowserDynamic().bootstrapModule(LoginModule)
  .catch(err => console.error(err));
