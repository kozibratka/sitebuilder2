/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfigPublic } from './app/app.config';
import {PublicComponent} from "./app/public/pages/public/public.component";

bootstrapApplication(PublicComponent, appConfigPublic)
  .catch((err) => console.error(err));
