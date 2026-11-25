import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details2',
  standalone: false,
  styleUrl: './product-details2.css',
  templateUrl: './product-details2.html',
})
export class ProductDetails2 {
  @Input() ProductName: string = ' ';
  @Input() Description: string = ' ';
  @Input() Price: number = 0;
  @Input() isAvailable: boolean = false;
  Quantity = signal(0);

  @Output() sendProductName = new EventEmitter<string>();
  @Output() SendQuantity = new EventEmitter<number>();

  addToCart() {
    this.SendQuantity.emit(this.Quantity());
    this.sendProductName.emit(this.ProductName);
  }

  increase() {
    this.Quantity.update((value) => value + 1);
  }
  decrease() {
    if (this.Quantity() > 0) {
      this.Quantity.update((value) => value - 1);
    }
  }
  reset() {
    this.Quantity.set(0);
  }
}
