import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalInDepth } from './signal-in-depth/signal-in-depth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SignalInDepth,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-app');
}
