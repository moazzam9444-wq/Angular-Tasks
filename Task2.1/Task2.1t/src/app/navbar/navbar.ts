import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  selectedPage: string = '';

  showPage(SelectedPage: string): void {
    this.selectedPage = SelectedPage;
  }
}
