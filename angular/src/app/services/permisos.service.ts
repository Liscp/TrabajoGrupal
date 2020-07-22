import { Injectable } from '@angular/core';
import { Data } from '../models/data';
import { Usuario } from '../models/usuario';
import * as jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class PermisosService {
  data: Data;
  private token: string;
  private usuarioLogin:Usuario;
  private sessionID:string;
  private rol:string;
  public jwtHelper: JwtHelperService

  constructor() {
    this.token = null,
    this.usuarioLogin;
  }
  decodificarToken(token: string): boolean {
    const decoded = jwt_decode(token);
    if (decoded) {
      this.token = token || null;
      this.usuarioLogin = decoded.data || null;
      this.sessionID = this.usuarioLogin.sessionID || null;
      delete this.usuarioLogin.sessionID;
      delete this.usuarioLogin.passw;
      return true;
    } else {
      return false;
    }
  }
  public isAuthenticated(): boolean {
    return this.token ===null;
    console.log(this.token)
  }
  obtenerToken(): string {
    return this.token;
  }

  destruirToken(): void {
    this.token = null;
  }

  getUserLogin(): object {
    return this.usuarioLogin;
  }

  obtenerSession(): string {
    return this.sessionID;
  }
  getUserRol(): string {
    return this.rol;
  }
}
