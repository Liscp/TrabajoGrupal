import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router,} from '@angular/router';
import { CrudService } from '../../services/crud.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  user:any;
  createuserForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private CrudService:CrudService,) {
       if (sessionStorage.getItem('user')) {
         console.log(sessionStorage.getItem('user'))
       this.user=JSON.parse(sessionStorage.getItem('user'));
    }

  }

  ngOnInit(): void {
      this.createuserForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
       rol: ['', [Validators.required]],
       apellido: ['', [Validators.required]],
       edad: ['', [Validators.required]],
       email: ['', [Validators.required]],

    verifypassw: ['', [Validators.required]],
   });
  }
  update(){
    let nombre = this.createuserForm.get('nombre').value;
    let apellido = this.createuserForm.get('apellido').value;
    let edad = this.createuserForm.get('edad').value;
    let email = this.createuserForm.get('email').value;

    let rol = this.createuserForm.get('rol').value;
;
    if (this.createuserForm.valid) {

      } else {
        let Data = {
          data: {
            nombre,
            apellido,
            edad,
            email,
            rol,
          },
        };
        let user= this.CrudService.put(
       'update',this.user._id,Data);
       if (user) {
         console.log(this.user._id)
         console.log(Data)
         this.router.navigate(['/menu/usuario']);
         localStorage.clear();
       }
     }

  }
}

