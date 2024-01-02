import { Component } from '@angular/core';
import { Router } from '@angular/router'
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  template: `<button (click)="navigateToContact()">Contacto</button>`
})
export class HeaderComponent {

  isDropdownVisible: boolean = false;

  onMouseEnter() {
    this.isDropdownVisible = true;
  }

  onMouseLeave() {
    this.isDropdownVisible = false;
  }

  constructor(private router: Router) {
    router.events.subscribe(event => {
      console.log(event);
    })
  }

  navigateToContact() {
    this.router.navigate(['/Contact']);
  }

  isMenuVisible = false;

  toggleMenu() {
    console.log("I'm here!")
    this.isMenuVisible = !this.isMenuVisible;
  }

}
