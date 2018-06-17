import { Validators, FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmpresaService } from '../service/empresa.service';
import { AuthService } from '../service/auth.service';
import { OnInit, Component } from '@angular/core';
import { LoginDTO } from '../dto/login-dto';
import { TokenDTO } from '../dto/token-dto';
import { BadCredentialsError } from '../commons/bad-credentials';
import { AppUserValidator } from './user-validator';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	form: FormGroup;

	constructor(
		private router: Router,
		private authService: AuthService,
		private route: ActivatedRoute,
		private toaster: ToastrService,
	) { }

	ngOnInit() {
		this.form = new FormGroup({
			'appUser': new FormControl(
				'',
				[
					Validators.minLength(4), Validators.required,
					AppUserValidator.hasWhiteSpace
				]
			),
			'password': new FormControl('', [Validators.required])
		});
	}

	onSubmit(user: LoginDTO) {
		this.authService.login(user).subscribe((token: TokenDTO) => {
			localStorage.setItem(environment.tokenName, token.access_token);
			const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
			this.router.navigate([returnUrl || '/home']);
		},
			(e) => {
				if (e instanceof BadCredentialsError) {
					this.password.setErrors(e['form']);
				} else {
					throw e;
				}
			});
	}

	get appUser() {
		return this.form.get('appUser');
	}


	get password() {
		return this.form.get('password');
	}

}
