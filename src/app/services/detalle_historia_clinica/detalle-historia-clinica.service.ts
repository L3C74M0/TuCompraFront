import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleHistoriaClinicaService {

  private API_SERVER = "http://localhost:8080/detalleR/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllDetalles(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "detalles");
  }

  public saveDetalle(detalle: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "detalles", detalle);
  }

  public deleteDetalle(id: string): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "del/" + id);
  }
}
