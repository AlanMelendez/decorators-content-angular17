import { CommonModule } from '@angular/common';
import { Component, ContentChildren, ElementRef, Input, QueryList } from '@angular/core';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  /**
   *? Usamos este input para mandar la información del estudiante desde el componente padre.
   */
   @Input() students!: any;



   /**
    *? Usamos este ContentChild para obtener la referencia al elemento DOM con la directiva color.
    Aqui la propia documentación de Angular nos dice que debemos usar QueryList en lugar de ElementRef.
   */
  //  @ContentChildren("color") contentColor! : QueryList<any>;
   @ContentChildren("color") contentColor! : QueryList<ElementRef>;


   //! Ejemplo de QueryList
  /**
   *
   */

   /**
    * Necesitamos usar EL ciclo de vida angular ngAfterContentInit.
    * este se activara después de que se inicialice nuestra vista y se proyecte el contenido (Los elementos DOM como el "color").
    */
   ngAfterContentInit() {
       console.log('This is content child color', this.contentColor);

       //Set the color of the content child
       if (this.contentColor) {

          /*
            Cambiamos el color del contenido referenciado por el ContentChildren (En este caso).
            Si tuvieramos dos elementos con la misma referencia, ambos cambiarían de color pero es necesario
            usar ContentChildren para obtener una lista de todos los elementos referenciados por la directiva.

            El content Child, solo causara efecto en el primer elemento, cualquier otro sera omitido.
          */
         this.contentColor.first.nativeElement.setAttribute('style', 'color: red');
         this.contentColor.last.nativeElement.setAttribute('style', 'color: blue');

       }
   }
}
