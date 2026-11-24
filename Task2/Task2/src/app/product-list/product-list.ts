import { Component } from '@angular/core';
interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
  isAvailable: boolean;
}
@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  ArrayOfProducts: Product[] = [
    {
      name: 'Laptop',
      description: 'Core i5, 8GB RAM',
      price: 750,
      image: 'https://i.ebayimg.com/images/g/IzAAAeSwRohqFrbf/s-l1600.webp',
      isAvailable: true,
    },
    {
      name: 'Smartphone',
      description: 'Latest smartphone',
      price: 450,
      image: 'https://i.ebayimg.com/images/g/mdwAAeSwzKppXRZ0/s-l1600.webp',
      isAvailable: true,
    },
    {
      name: 'Headphones',
      description: 'Wireless Bluetooth headphones',
      price: 80,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlWqRF_Qq04ADv_LQCPl12j3kvoiUe-yZta7aGz1_FWxzo9_eoIK9-cjbv&s=10',
      isAvailable: true,
    },
    {
      name: 'Smart Watch',
      description: 'Smart watch with fitness tracking',
      price: 120,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbVGq6izU2DTMCRdco4mCt8yrMnSCjG7NH3WENraZopLsBH-nL5uEqURBJ&s=10',
      isAvailable: true,
    },
    {
      name: 'Keyboard',
      description: 'Mechanical gaming keyboard',
      price: 45,
      image:
        'https://urx.co.in/cdn/shop/files/black-1_02a5590f-56df-435a-b4f0-f793f5785e88.png?v=1790938152',
      isAvailable: false,
    },
  ];
  msg(): void {
    alert('You Buy This Item');
  }
}
