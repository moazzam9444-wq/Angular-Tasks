import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  @Input() cartProductName = '';
  @Input() cartQuantity = 0;
  @Input() ProductPrice = 0;
}
