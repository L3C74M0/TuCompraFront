import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaClinicaService {

  private API_SERVER = "http://localhost:8080/historiaR/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllHistorias(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "historias");
  }

  public saveHistoria(historia: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "historias", historia);
  }

  public deleteHistoria(id: string): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "del/" + id);
  }
}
