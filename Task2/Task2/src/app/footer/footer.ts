import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  storeName = 'Topasy Shop';
  storeAddress = ' Irbid/Jordan';
  contactEmail = 'moazzam9444@gmail.com';
  copyrightMessage = '© 2026 All Rights Reserved.';
}
