import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product-service';
import { Product } from '../models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})
export class ProductList implements OnInit {

  products: Product[] = [];
  selectedId: number | null = null;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  getProduct(product: Product): void {
    this.selectedId = product.id;
    this.router.navigate(['/product-list', product.id, 'details']);
  }

}// import { Component } from '@angular/core';
// import { ActivatedRoute, Router, RouterOutlet } from '../../../node_modules/@angular/router/types/_router_module-chunk';
// import { FormsModule } from '../../../node_modules/@angular/forms/types/forms';
// import { CommonModule } from '../../../node_modules/@angular/common/types/_common_module-chunk';
// import { ProductService } from '../services/product-service';
// import { OnInit } from '../../../node_modules/@angular/core/types/core';
// import { Product } from '../models/product.interface';
// import { ProductsComponent } from '../products/products';

// @Component({
//   selector: 'app-product-list',
//   imports: [RouterOutlet,RouterLink,ActivatedRoute,Router,FormsModule,CommonModule,ProductService,ProductsComponent],
//   templateUrl: './product-list.html',
//   styleUrl: './product-list.css',
// })
// export class ProductList implements OnInit{
//   employees: Product []=[];
//   returnUrl: String | null = null;
//   selectedId: Number | null = null;
// }

//   constructor (
//     private productService: ProductService,
//     private route: ActivatedRoute,
//     privated router: Router
//   ){}

//   ngOnInit(): void {
//     this.products = this.ProductService.getProduct();
//   }

//   getProduct(a:Product): void {
//     this.selectedId =e.id;
//     this.router.navigate(['Porduct', e.id,'details']);
//   }
