import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  productName: string = 'Laptop';
  productDescription: string = '16g ram , i7 cpu , 512ssd';
  productPrice: number = 750;
  productImage =
    'https://www.compume.jo/cdn/shop/files/h732-_2_-Photoroom-1200x630_3a0832e6-dc64-41ec-bb0c-b083a9ad8938.jpg?v=1788117791';
  quantity: number = 1;
  isAvailable = true;
  discountPercentage = 10;

  buyNow() {
    alert('Thank you for your purchase!');
  }
}
