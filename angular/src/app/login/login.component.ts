import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermisosService } from '../services/permisos.service'
import { Data } from '../models/data'
import { LoginService } from '../services/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginData: FormGroup;
  constructor(
    private loginServices:LoginService,
    private permisos: PermisosService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      email:["lcp.caiza@gmail.com",Validators.required],
      password:["12345",Validators.required],
  });
  }
  login():void{
    let email =this.loginData.get('email').value;
    let password =this.loginData.get('password').value;
    let datalogin = {
      data:{
        password,
        email
      }
    };
      this.loginServices.login(datalogin).subscribe((data:Data)=>{
        console.log(data)
    if(data.transaccion){
      if(this.permisos.decodificarToken(data.token)){
        this.router.navigate(['/menu']);
      }else{
       email='';
        password='';
        alert('error')
      }
    } (error:String)=>{
      email='';
      password='';
      alert('error')
    };
  });
  }

}
