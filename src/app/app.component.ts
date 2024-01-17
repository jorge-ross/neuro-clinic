import { Component } from '@angular/core';
import { ServicesComponent } from './components/psic-services/services.component';
import { RouterModule } from '@angular/router';
// import { HeaderComponent } from './components/header/header.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ServicesComponent, RouterModule],
})
export class AppComponent {
  title = 'Neuro-dev';
}
