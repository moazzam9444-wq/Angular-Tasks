import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Task2');

  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Irbid,Jordan';
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = 'USD';

  productNames: string[] = ['Laptop', 'Smartphone', 'Headphones', 'Smart Watch'];
  productPrice: number[] = [750, 450, 80, 120];
  featuredProduct = {
    description: 'Cofortable Keyboard',
    productName: 'Keyboard',
    price: 45,
  };
  storeStatus: string = '';
  discountPercentage: number = 10;
  finalPrice: number = 0;

  MostExpensive: number = this.productPrice[0];
  TotalNumberOfProducts: number = 0;
  Cheapest: number = this.productPrice[0];
  totalValue: number = 0;
  constructor() {
    if (this.isStoreOpen == true) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }

    if (this.discountPercentage > 0) {
      this.finalPrice =
        this.featuredProduct.price - (this.featuredProduct.price * this.discountPercentage) / 100;
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    this.productNames.forEach((element) => {
      this.TotalNumberOfProducts++;
    });

    for (let num of this.productPrice) {
      if (num > this.MostExpensive) {
        this.MostExpensive = num;
      }
    }

    for (let num of this.productPrice) {
      if (num < this.Cheapest) {
        this.Cheapest = num;
      }
    }

    for (let num of this.productPrice) {
      this.totalValue += num;
    }
  }
}
