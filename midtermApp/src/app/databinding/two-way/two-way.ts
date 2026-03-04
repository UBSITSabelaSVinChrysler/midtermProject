import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way.html',
  styleUrls: ['./two-way.css'],
})
export class TwoWay{

  // Two-way binding properties
  twoWayName: string = 'Juan Dela Cruz';
  twoWayEmail: string = '';
  twoWayAge: number = 20;
  twoWayGender: string = 'male';
  twoWaySubscribed: boolean = false;
  twoWayLanguage: string = 'TypeScript';
  twoWayRating: number = 3;
  twoWayColor: string = '#3b82f6';

  programmingLanguages: string[] = [
    'TypeScript',
    'JavaScript',
    'Python',
    'Java',
    'C#'
  ];

  i: number = 0;
  selectedColor: string = '#2E75B6';
  rangeValue: number = 50;
  selectedOption: string = 'option1';

  selectedId: number | null = null;
  selectedName: string = '';
  selectedDepartment: string = '';
  selectedPosition: string = '';
  selectedRole: string = '';

  user: User[] = [
    {
      id: 1,
      name: 'John Doe',
      position: 'Developer',
      department: 'IT',
      details: { role: [1, 'Admin'] }
    },
    {
      id: 2,
      name: 'Jane Smith',
      position: 'Designer',
      department: 'Creative',
      details: { role: [2, 'Editor'] }
    },
    {
      id: 3,
      name: 'Alice Johnson',
      position: 'Manager',
      department: 'Management',
      details: { role: [3, 'Viewer'] }
    }
  ];

  onClick(u: User): void {
    console.log('Button clicked!');
    this.selectedId = u.id;
    this.selectedName = u.name || '';
    this.selectedDepartment = u.department || '';
    this.selectedPosition = u.position || '';
    this.selectedRole = u.details?.role[1]?.toString() || '';

    console.log(`Selected User ID: ${this.selectedId}`);
  }

  // Generated profile output
  get profileSummary(): string {
    const sub = this.twoWaySubscribed ? 'Subscribed' : 'Not subscribed';
    return `${this.twoWayName}, ${this.twoWayAge} years old, ${this.twoWayGender}. ` +
           `Prefers ${this.twoWayLanguage}. Rating: ${this.twoWayRating}/5. ${sub}.`;
  }

  // Reset form programmatically
  resetForm(): void {
    this.twoWayName = '';
    this.twoWayEmail = '';
    this.twoWayAge = 18;
    this.twoWayGender = 'male';
    this.twoWaySubscribed = false;
    this.twoWayLanguage = 'TypeScript';
    this.twoWayRating = 3;
  }
}