import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideToastr} from "ngx-toastr";
import { SortablejsModule } from 'nxt-sortablejs';
import {provideAnimations} from "@angular/platform-browser/animations";
import {PluginsProvider} from "./plugins/modules/PluginProvider";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {DragToSelectModule} from "ngx-drag-to-select";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideToastr(),
    provideAnimations(),
    importProvidersFrom(SortablejsModule.forRoot({ animation: 150 })),
    importProvidersFrom(DragToSelectModule.forRoot()),
    PluginsProvider, provideAnimationsAsync(), provideAnimationsAsync()
  ]
};

export const appConfigPublic: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideToastr(),
    provideAnimations(),
    PluginsProvider, provideAnimationsAsync(), provideAnimationsAsync()
  ]
};

