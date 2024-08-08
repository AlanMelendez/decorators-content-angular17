import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { Student } from '../../interface/student';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.css'
})
export class StudentsDetailsComponent {
  @Input() student: Student | undefined;

  //Content Child
  @ContentChild("color") contentColor !: ElementRef;


  ngAfterViewInit() {
      console.log('This is content child color', this.contentColor);

      //Set the color of the content child
      this.contentColor.nativeElement.setAttribute('style', 'color: red');
  }
}
