import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { AppRoutingModule } from '../../app-routing-module';

@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [CommonModule, AppRoutingModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css',
})
export class ListRenderComponent {
  animals: Animal[] = [];

  animal: Animal = {
    id: 0,
    name: 'Qualquer coisa',
    type: 'Dog',
    age: 2,
  };

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimals();
  }
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${this.animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(this.animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
