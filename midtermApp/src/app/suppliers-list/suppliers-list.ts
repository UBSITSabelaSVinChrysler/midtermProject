import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Supplier } from '../models/supplier.interface';
import { SupplierService } from '../services/supplier-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-suppliers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suppliers-list.html', 
  styleUrls: ['./suppliers-list.css']  
})
export class SuppliersListComponent implements OnInit {
  suppliers: Supplier[] = [];

  constructor(private service: SupplierService, private router: Router) {}

  ngOnInit(): void {
    this.suppliers = this.service.getSuppliers();
  }

  viewDetails(id: number) { 
    this.router.navigate(['/suppliers', id]); 
  }
}