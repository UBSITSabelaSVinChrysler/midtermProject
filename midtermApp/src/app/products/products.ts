import { Component } from '@angular/core';
import { Product } from '../models/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule], 
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})

export class ProductsComponent {

  products: Product[] = [
    {id:1, name:'Laptop', category:'Electronics', price:50000, stock:5, status:'Available', description:'Gaming laptop'},
    {id:2, name:'Mouse', category:'Electronics', price:800, stock:20, status:'Available', description:'Wireless mouse'},
    {id:3, name:'Keyboard', category:'Electronics', price:1500, stock:10, status:'Limited', description:'Mechanical keyboard'},
    {id:4, name:'Monitor', category:'Electronics', price:9000, stock:3, status:'Limited', description:'24 inch monitor'},
    {id:5, name:'Headphones', category:'Electronics', price:2500, stock:0, status:'Out of Stock', description:'Noise cancelling'},
    {id:6, name:'Phone', category:'Mobile', price:20000, stock:7, status:'Available', description:'Android phone'},
    {id:7, name:'Tablet', category:'Mobile', price:15000, stock:4, status:'Limited', description:'10 inch tablet'},
    {id:8, name:'Speaker', category:'Audio', price:3000, stock:12, status:'Available', description:'Bluetooth speaker'},
    {id:9, name:'Camera', category:'Electronics', price:35000, stock:2, status:'Limited', description:'DSLR camera'},
    {id:10, name:'Printer', category:'Office', price:7000, stock:1, status:'Available', description:'Inkjet printer'}
  ];

  selectedProduct!: Product;
  showModal = false;

  viewProductDetails(product: Product){
    this.selectedProduct = product;
    this.showModal = true;
  }

  closeModal(){
    this.showModal = false;
  }

}