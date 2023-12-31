import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {
  show: boolean = false;

  showMessage(): void {
    this.show = !this.show; // toggle
  }

  showMessageTwo() {
    alert('Alerta só para testar o funcionamento dos eventos em angular');
  }
}
