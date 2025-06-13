import { Component } from '@angular/core';
import {ToolbarComponent} from '../toolbar/toolbar.component';
import {MatCard} from '@angular/material/card';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,
    MatCard,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
