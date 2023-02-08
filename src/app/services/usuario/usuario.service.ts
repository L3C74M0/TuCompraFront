import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private API_SERVER = "http://localhost:8080/usuarioR/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllUsuarios(): Observable<any> {
    return this.httpClient.get(this.API_SERVER + "usuarios");
  }

  public saveUsuario(usuario: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER + "usuarios", usuario);
  }

  public deleteUsuario(id: string): Observable<any> {
    return this.httpClient.delete(this.API_SERVER + "del/" + id);
  }
}
