import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpresaViewComponent } from './empresa-view/empresa-view.component';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaAddComponent } from './empresa-add/empresa-add.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'empresaAdd', component: EmpresaAddComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpresaViewComponent,
    EmpresaAddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
