import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ValorantService} from '../../../services/valorant.service';
import {NgForOf, NgIf} from '@angular/common';
import {ToolbarComponent} from '../../public/components/toolbar/toolbar.component';

@Component({
  selector: 'app-agent-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    ToolbarComponent,
    RouterLink
  ],
  templateUrl: './agent-detail.component.html',
  styleUrl: './agent-detail.component.css'
})
export class AgentDetailComponent implements OnInit {

  agents: any;

  constructor(
    private route: ActivatedRoute,
    private valorantService: ValorantService,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.valorantService.getAgentById(id).subscribe(response => {
          this.agents = response.data; // la API devuelve { data: {...} }
        });
      }
    });
  }


}
