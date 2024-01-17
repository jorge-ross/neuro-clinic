import { Component } from '@angular/core';
import { Router } from '@angular/router'
 
@Component({
  standalone: true,
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


  // navigateToContact() {
  //   this.router.navigate(['/Contact']);
  // }

  // navigateToServices() {
  //   this.router.navigate(['/servicios']);
  // }


  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    if(hamburgerIcon) {
      hamburgerIcon.classList.toggle('rotate-icon', this.isMenuVisible);
    }
  }

}
