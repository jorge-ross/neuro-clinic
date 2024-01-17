import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import routeConfig from "./app/routes";

// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from "./app/app.module";

// platformBrowserDynamic().bootstrapModule(AppModule)
// .catch(err => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig)
  ]
}).catch(err => console.error(err));

 
