import { Routes, RouterModule } from "@angular/router";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {ContactUsComponent} from "./pages/contact-us/contact-us.component";
import {HomeComponent} from "./pages/home/home.component";


const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'about-us', component: AboutUsComponent  },
  { path: 'contact-us', component: ContactUsComponent  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
