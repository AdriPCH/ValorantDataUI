import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AgentsComponent} from './valorant/components/agents/agents.component';
import {HomeComponent} from './valorant/public/components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgentsComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'valorantProyect';


  options = [
    { path: '/home', title: 'Home' },
    { path: '/agents', title: 'Agents' },
    { path: '/agent-detail', title: 'AgentDetail' },
  ]
}
