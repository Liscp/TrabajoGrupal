import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router,NavigationEnd} from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { PermisosService } from '../../services/permisos.service';
import { WebService } from '../../services/web.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  user = [];
  private url:string;
  constructor(
    private crudService:CrudService,
    private permisosService:PermisosService,
    private servidor: WebService,
    private permisos:PermisosService,
    private router:Router,
    private http:HttpClient){
       this.url=servidor.getUrl();
    }


  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(): void {
    this.http
      .get(`${this.url}get_usuarios`)
      .subscribe((data: any) => {
        data.data.forEach((element) => {
          this.user.push(element);
        });
      });
  }
  public edit(user){
    sessionStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/menu/edit-users'])
    console.log(sessionStorage.setItem)
  }
  deletUuser(_id) {
    this.crudService.delete('usuario_delete', _id);
  }
}
