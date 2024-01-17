import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { InsightComponent } from './components/insight/insight.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';


@NgModule({
  declarations: [
    InsightComponent,
    FooterComponent,
    IntroComponent,
    ContactFormComponent,
    BlogHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: []
})
export class AppModule { }
