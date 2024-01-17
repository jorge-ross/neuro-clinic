import { Routes } from "@angular/router";
import { ServicesComponent } from "./components/psic-services/services.component";


const routeConfig: Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services'
  }
];

export default routeConfig; 