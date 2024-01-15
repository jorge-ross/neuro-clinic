import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsightComponent } from './components/insight/insight.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { ServicesComponent } from './components/psic-services/services.component';

const routes: Routes = [
  { path: 'Contact', component: ContactFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InsightComponent,
    HeaderComponent,
    FooterComponent,
    IntroComponent,
    ContactFormComponent,
    BlogHomeComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
