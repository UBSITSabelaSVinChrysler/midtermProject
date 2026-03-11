import { Routes } from '@angular/router';
import { Home } from './components/home/home'; 
import { Property } from './databinding/property/property';
import { TwoWay } from './databinding/two-way/two-way';
import { Attribute } from './databinding/attribute/attribute';
import { Style } from './databinding/style/style';
import { Interpolation } from './databinding/interpolation/interpolation';
import { EventBinding } from './databinding/event/event';
import { ProductsComponent } from './products/products';
import { ProductList } from './product-list/product-list';
import { ProductDetails } from './product-details/product-details';
import { Component } from '@angular/core';



export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'interpolation', component: Interpolation },
    { path: 'property-binding', component: Property },
    { path: 'event-binding', component: EventBinding },
    { path: 'two-way', component: TwoWay },
    { path: 'attribute', component: Attribute },
    { path: 'style', component: Style },
    { path: 'products', component: ProductsComponent },
    { path: 'product-list', component: ProductList},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
{
    path: 'employees'
    Component; ProductList;
    children:[
      {
        path: ':id',
        children: [
          {
            path: 'details',Component: ProductList,
          }
        ]
      }
    ]
  }



