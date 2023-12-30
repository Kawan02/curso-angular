import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent {
  name: String = 'Teste';
  idade: number = 30;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  carro = {
    name: 'Polo',
    year: 2019,
  };
  // constructor() { }

  // ngOnInit(): void {

  // }
}
