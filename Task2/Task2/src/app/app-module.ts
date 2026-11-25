import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Footer } from './footer/footer';
import { FormsModule } from '@angular/forms';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { ProductDetails2 } from './product-details2/product-details2';

@NgModule({
  declarations: [
    App,
    Header,
    Navbar,
    ProductList,
    ProductDetails,
    Footer,
    ShoppingCart,
    ProductDetails2,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
