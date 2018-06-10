import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpresaViewComponent } from './empresa-view/empresa-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpresaViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
