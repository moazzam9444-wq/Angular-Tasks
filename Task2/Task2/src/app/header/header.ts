import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  storeName: string = 'Topasy Shop';
  wMessage: string = 'Welcome To Our Shop';
  storeSlogan: string = 'Everything You Need in One Place';
}
