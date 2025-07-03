import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

import { defineCustomElements } from '@swisscom/sdx/dist/js/webcomponents/loader';
defineCustomElements();

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
