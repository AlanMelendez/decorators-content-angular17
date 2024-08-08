import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './interface/student';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailsComponent } from "./components/students-details/students-details.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent, StudentsDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ContentChildAndContentChildrenExamples';

  students: Student[] = [
    {id: 1, Name: 'John', Address: 'USA', Age: 25},
    {id: 2, Name: 'Smith', Address: 'UK', Age: 30},
    {id: 3, Name: 'Karan', Address: 'India', Age: 22},
  ];


}
