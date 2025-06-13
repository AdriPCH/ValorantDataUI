import {Component, OnInit} from '@angular/core';
import {ValorantService} from '../../../services/valorant.service';
import {CommonModule} from '@angular/common';
import {ToolbarComponent} from '../../public/components/toolbar/toolbar.component';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [CommonModule, ToolbarComponent, RouterLink],
  templateUrl: './agents.component.html',
  styleUrl: './agents.component.css'
})
export class AgentsComponent implements OnInit{

  //devuelve un array de la data
  agents: any[] = []
  selectedAgent: any = null;

  constructor(
    private router: Router,
    private valorantService: ValorantService) {}

  ngOnInit(): void {
    this.valorantService.getAgents().subscribe(data => {
      const allAgents = data;
      this.agents = allAgents
        .filter(agent => agent.isPlayableCharacter)
        .filter((agent, index, self) =>
          index === self.findIndex(a => a.uuid === agent.uuid)
        );
    });
  }

  goToAgentDetail(agentUuid: string) {
    this.router.navigate(['/agent-detail', agentUuid]);
  }

}
