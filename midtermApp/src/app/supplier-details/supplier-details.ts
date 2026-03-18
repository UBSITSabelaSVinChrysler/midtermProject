import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../models/supplier.interface';
import { SupplierService } from '../services/supplier-service';


@Component({
  selector: 'app-supplier-details',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './supplier-details.html', 
  styleUrls: ['./supplier-details.css']
})
export class SupplierDetailsComponent implements OnInit {
  supplier!: Supplier;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SupplierService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const data = this.service.getSupplierById(id);
    if (data) {
      this.supplier = JSON.parse(JSON.stringify(data));
    }
  }

  save() {
    this.service.updateSupplier(this.supplier);
    alert('Supplier updated successfully!');
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/suppliers']);
  }
}