import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValorantService {

  private apiUrl = 'https://valorant-api.com';

  constructor(private http: HttpClient) { }

  //llamado de api para agentes
  public getAgents(): Observable<any[]> {
    return this.http.get<{ status: number, data: any[] }>(`${this.apiUrl}/v1/agents?language=es-ES`)
      .pipe(
        map(response => response.data)
      );
  }

  getAgentById(agentUuid: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/v1/agents/${agentUuid}?language=es-ES`);
  }



}
