import { Injectable } from '@angular/core';
import { Supplier } from '../models/supplier.interface';


@Injectable({ providedIn: 'root' })
export class SupplierService {
    private suppliers: Supplier[] = [
        { id: 1, supplierName: 'TechCorp', location: 'Manila', email: 'info@tech.com', contactPerson: 'Juan Dela Cruz', phone: '0917-123-4567', productsSupplied: ['Laptops', 'Mice'] },
        { id: 2, supplierName: 'BuildRight Inc.', location: 'Cebu City', email: 'sales@buildright.ph', contactPerson: 'Maria Santos', phone: '0918-234-5678', productsSupplied: ['Cement', 'Steel Bars'] },
        { id: 3, supplierName: 'GreenGarden Co.', location: 'Davao City', email: 'orders@greengarden.com', contactPerson: 'Pedro Penduko', phone: '0919-345-6789', productsSupplied: ['Fertilizer', 'Seeds'] },
        { id: 4, supplierName: 'OfficePro Solutions', location: 'Makati', email: 'support@officepro.ph', contactPerson: 'Elena Reyes', phone: '0920-456-7890', productsSupplied: ['Paper', 'Ink Cartridges'] },
        { id: 5, supplierName: 'Swift Logistics', location: 'Pasig', email: 'admin@swift.com', contactPerson: 'Roberto Gomez', phone: '0921-567-8901', productsSupplied: ['Packaging Tape', 'Boxes'] },
        { id: 6, supplierName: 'Global Electronics', location: 'Quezon City', email: 'contact@globalelec.ph', contactPerson: 'Sofia Lopez', phone: '0922-678-9012', productsSupplied: ['Microchips', 'Resistors'] },
        { id: 7, supplierName: 'PureWater Systems', location: 'Iloilo City', email: 'service@purewater.com', contactPerson: 'Antonio Luna', phone: '0923-789-0123', productsSupplied: ['Filters', 'Water Pumps'] },
        { id: 8, supplierName: 'EcoPower Energy', location: 'Baguio', email: 'hello@ecopower.ph', contactPerson: 'Isabel Daza', phone: '0924-890-1234', productsSupplied: ['Solar Panels', 'Batteries'] },
        { id: 9, supplierName: 'Daily Harvest', location: 'Laguna', email: 'fresh@dailyharvest.ph', contactPerson: 'Ricardo Dalisay', phone: '0925-901-2345', productsSupplied: ['Vegetables', 'Fruits'] },
        { id: 10, supplierName: 'Prime Textiles', location: 'Bulacan', email: 'fabrics@primetex.com', contactPerson: 'Teresa Magbanua', phone: '0926-012-3456', productsSupplied: ['Cotton', 'Silk Threads'] }
      ];

  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) {
      this.suppliers[index] = { ...updatedSupplier };
    }
  }
}