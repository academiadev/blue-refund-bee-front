import { ErrorHandler, Injector, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppError } from './app-error';
import { BadCredentialsError } from './bad-credentials';
import { AuthService } from './../service/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AppErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) {

    }

    handleError(error) {
        const toast = this.injector.get(ToastrService);
        const auth = this.injector.get(AuthService);
        console.log(error);


        if (error instanceof BadCredentialsError) {
            const appError: AppError = error;
            auth.logoutAndRedirect();
            toast.error('Usuário sem permissão. Deslogando...');
            return;
        }

        if (error instanceof AppError) {
            const appError: AppError = error;
            toast.error(appError.originalError ? appError.originalError.message : appError.originalError, 'Ocorreu um erro!');
            return;
        }

        // toast.error('Erro desconhecimento.', 'Ocorreu um erro!');
        return;
    }

}
