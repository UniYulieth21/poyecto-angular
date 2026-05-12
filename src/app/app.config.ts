import { ApplicationConfig, provideBrowserGlobalErrorListeners } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { routes } from "./app.routes";
import { librosReducer } from "./store/libros.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideStore({ libros: librosReducer })
  ]
};
