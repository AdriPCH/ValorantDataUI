import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {MatFabButton, MatIconButton, MatMiniFabButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatRadioButton} from '@angular/material/radio';
import {MatButtonToggle} from '@angular/material/button-toggle';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIconButton,
    RouterLink,
    MatIcon,
    MatFabButton,
    MatMiniFabButton,
    MatRadioButton,
    MatButtonToggle
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
