import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {

  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];
  text: string = "{(expression})"
  curly: string ="{{ }}"
  common: string ="{( userName ))"
  methods: string= "{{ getStatus() }" 
  dotnot: string="({ user.name ))"
  dotnot2: string ="{{ user? profile? email }}"
   jpipe: string ="({ user | json ))"
  isActive: boolean = false;

  user: User = {
    name: 'John The Baptist',
    department: 'IT',
    details: {role: 'Admin'}
  }
};
