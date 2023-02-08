import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private API_SERVER = "http://localhost:8080/colaboradorR/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllColaboradores(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "colaboradores");
  }

  public saveColaborador(colaborador: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "colaboradores", colaborador);
  }

  public deleteColaborador(id: string): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "del/" + id);
  }
}
