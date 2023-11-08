import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isDropdownVisible: boolean = false;

  onMouseEnter() {
    this.isDropdownVisible = true;
  }

  onMouseLeave() {
    this.isDropdownVisible = false;
  }

}
