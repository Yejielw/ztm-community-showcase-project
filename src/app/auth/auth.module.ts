import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { routes } from './auth.routing';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
