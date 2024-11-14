import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    {id: 1, name: "Iced Coffee", price: 35.0, description: "Um café maravilhoso", image:'./coffeeIce.png'},
    {id: 2, name: "Coffee Mocha", price: 11.90, description: "Um café maravilhoso", image:'./coffeeMocca.png'},
    {id: 3, name: "Lattes Coffee", price: 12.90, description: "Um café maravilhoso", image:'./copoCafe.png'},
    {id: 4, name: "Cappuccino", price: 9.0, description: "Um café maravilhoso", image:'./cafepacote.png'},
    
  ];

  getProducts(): Iproducts[] {
    return this.products;
  }
}