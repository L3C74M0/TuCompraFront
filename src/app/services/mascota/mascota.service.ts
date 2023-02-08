import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private API_SERVER = "http://localhost:8080/mascotaR/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllMascotas(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "mascotas");
  }

  public saveMascota(mascota: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "mascotas", mascota);
  }

  public deleteMascota(id: string): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "del/" + id);
  }
}
