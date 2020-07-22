import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PermisosService } from '../services/permisos.service'

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsService implements CanActivate {

  constructor(public auth: PermisosService, public router: Router) { }
  canActivate() {
    if (this.auth.getUserRol()) {
      this.router.navigate(['/menu/usuario']);
      return false;
    }
    return true;
  }
}
