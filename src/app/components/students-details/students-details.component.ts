import { Component, ContentChild, ElementRef, Input } from '@angular/core';
import { Student } from '../../interface/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.css'
})
export class StudentsDetailsComponent {

  /**
   *? Usamos este input para mandar la información del estudiante desde el componente padre.
   */
  @Input() students!: any;



  /**
   *? Usamos este ContentChild para obtener la referencia al elemento DOM con la directiva color.
  */
  @ContentChild("color") contentColor! : ElementRef;

  /**
   * Necesitamos usar EL ciclo de vida angular ngAfterContentInit.
   * este se activara después de que se inicialice nuestra vista y se proyecte el contenido (Los elementos DOM como el "color").
   */
  ngAfterContentInit() {
      console.log('This is content child color', this.contentColor);

      //Set the color of the content child
      if (this.contentColor) {
        this.contentColor.nativeElement.setAttribute('style', 'color: red');
      }
  }
}
