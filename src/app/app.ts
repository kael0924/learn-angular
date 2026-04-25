import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('learn-angular');
  protected readonly appTitle = signal('My Recipe Box');

  protected loadSpaghetti() {
    console.log('Loading Spaghetti...');
  }

  protected loadSalad() {
    console.log('Loading Salad...');
  }
}
