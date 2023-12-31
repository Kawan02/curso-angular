import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [
    {
      name: 'Turca',
      type: 'Dog',
      age: 4,
    },
    {
      name: 'Tom',
      type: 'Cat',
      age: 7,
    },
    {
      name: 'Frida',
      type: 'Dog',
      age: 9,
    },
    {
      name: 'Bob',
      type: 'Horse',
      age: 2,
    },
  ];

  animal: Animal = {
    name: 'Qualquer coisa',
    type: 'Dog',
    age: 2,
  };

  animalDetails = '';

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${this.animal.name} tem ${animal.age} anos!`;
  }
}
