import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { LoginDTO } from './../dto/login-dto';
// import { ToastrService } from 'ngx-toastr';
// import { TokenDTO } from '../dto/token-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    // private toaster: ToastrService,
    // private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'usuario': new FormControl('', [Validators.minLength(4), Validators.required]),
      'senha': new FormControl('', [Validators.required])
    });
  }

  /* onSubmit(user: LoginDTO) {
    this.authService.login(user).subscribe((token: TokenDTO) => {
      localStorage.setItem(environment.tokenName, token.access_token);
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
      this.router.navigate([returnUrl || '/home']);
    },
      (e) => {
        if (e instanceof BadCredentialsError) {
          this.senha.setErrors(e['form']);
        } else {
          throw e;
        }
      });
  }

  get usuario() {
    return this.form.get('usuario');
  }


  get senha() {
    return this.form.get('senha');
  }*/

}
