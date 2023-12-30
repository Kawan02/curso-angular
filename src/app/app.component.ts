import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    FirstComponentComponent,
    ParentDataComponent,
  ],
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'teste@gmail.com',
    role: 'Admin',
  };

  title = 'curso-angular';
}
