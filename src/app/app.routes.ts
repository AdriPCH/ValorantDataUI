import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './valorant/public/components/home/home.component';
import {AgentsComponent} from './valorant/components/agents/agents.component';
import {AgentDetailComponent} from './valorant/components/agent-detail/agent-detail.component';

export const routes: Routes = [
  //Agregamos la ruta de Home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'agent-detail/:id', component: AgentDetailComponent }
];

