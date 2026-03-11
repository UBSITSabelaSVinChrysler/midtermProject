import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products: Product[] = [
    {id:1, name:'NVIDIA GeForce RTX 6090', category:'GPU', price:120000, stock:2, status:'Limited', description:'Next-gen flagship graphics card for extreme gaming and AI workloads'},
    {id:2, name:'Intel Core i9-14900K', category:'CPU', price:35000, stock:6, status:'Available', description:'24-core high-performance processor for gaming and productivity'},
    {id:3, name:'AMD Ryzen 9 7950X', category:'CPU', price:33000, stock:5, status:'Available', description:'16-core AMD processor designed for heavy multitasking'},
    {id:4, name:'ASUS ROG Strix Z790-E', category:'Motherboard', price:28000, stock:3, status:'Limited', description:'High-end gaming motherboard supporting DDR5 and PCIe 5.0'},
    {id:5, name:'Corsair Vengeance 32GB DDR5', category:'RAM', price:9500, stock:10, status:'Available', description:'32GB DDR5 memory kit optimized for gaming systems'},
    {id:6, name:'Samsung 990 Pro 2TB', category:'Storage', price:12000, stock:8, status:'Available', description:'High-speed NVMe Gen4 SSD for fast boot and load times'},
    {id:7, name:'Seagate Barracuda 4TB', category:'Storage', price:6000, stock:7, status:'Available', description:'Large capacity HDD for files and backups'},
    {id:8, name:'Corsair RM850x 850W PSU', category:'Power Supply', price:8500, stock:4, status:'Limited', description:'80+ Gold fully modular power supply'},
    {id:9, name:'NZXT H9 Flow', category:'PC Case', price:9000, stock:3, status:'Limited', description:'High airflow mid-tower gaming case'},
    {id:10, name:'Logitech G Pro X Superlight', category:'Peripherals', price:8500, stock:12, status:'Available', description:'Ultra-lightweight wireless gaming mouse'}
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('auth_token');
  }

  login(): void { sessionStorage.setItem('auth_token', 'demo-token');}
  logout(): void { sessionStorage.removeItem('auth_token;');}


  updateProduct(updated: Product): void {
    const idx = this.products.findIndex(p => p.id === updated.id);
    if (idx !== -1) {
      this.products[idx] = { ...updated };
    }
  }
}