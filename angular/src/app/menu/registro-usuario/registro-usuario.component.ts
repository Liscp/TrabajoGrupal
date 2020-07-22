import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { CrudService } from '../../services/crud.service';
import { PermisosService } from '../../services/permisos.service';
//import { Data } from '../../models/data';
import { ConstantPool } from '@angular/compiler';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.scss']
})
export class RegistroUsuarioComponent implements OnInit {
  createuserForm: FormGroup;
  navigationSubcription;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private cudService: CrudService,
    private permisosService: PermisosService,
  ) { }

  ngOnInit(): void {
    this.createuserForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
       rol: ['', [Validators.required]],
       apellido: ['', [Validators.required]],
       edad: ['', [Validators.required]],
       email: ['', [Validators.required]],
       passw: ['', [Validators.required]],
       verifypassw: ['', [Validators.required]]
    });

  }
  createUser(){
    let nombre = this.createuserForm.get('nombre').value;
      let apellido = this.createuserForm.get('apellido').value;
      let edad = this.createuserForm.get('edad').value;
      let email = this.createuserForm.get('email').value;
      let passw = this.createuserForm.get('passw').value;
      let rol = this.createuserForm.get('rol').value;
      let verifypassw = this.createuserForm.get('verifypassw').value;
      if (this.createuserForm.valid) {
        if (passw != verifypassw) {
        alert('Las contraseñas no son iguales')
        } else {
          let datos = {
            data: {
              nombre,
              apellido,
              edad,
              email,
              passw,
              rol,
            },
          };
          let user = this.cudService.insert('insertusuario', datos);
          console.log(user)
          if (user) {
              this.router.navigate(['/menu/usuario'])

          }
        }
      } else {
       alert ('Llene todos los campos')
        ;
      }
    }
}
