import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MenuComponent, RegistroUsuarioComponent, UsuarioComponent, EditUserComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
