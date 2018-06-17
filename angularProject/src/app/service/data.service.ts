import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { BadInputError } from '../commons/bad-input';
import { BadCredentialsError } from '../commons/bad-credentials';
import { AppError } from '../commons/app-error';
import { NotFoundError } from '../commons/not-found-error';

export class DataService {

    constructor(
        protected url: string,
        protected http: HttpClient
    ) { }

    protected getHeaders() {
        let requestHeaders = new HttpHeaders();
        requestHeaders = requestHeaders.set('Authorization', 'Bearer ' + localStorage.getItem(environment.tokenName));
        return { headers: requestHeaders };
    }

    getAll<T>(): Observable<T> {
        return this.http.get(this.url, this.getHeaders()).pipe(
            map(res => <T>res),
            catchError(this.handleError)
        );
    }

    update<T>(object): Observable<T> {
        return this.http.post(this.url, object, this.getHeaders()).pipe(
            map(res => <T>res),
            catchError(this.handleError)
        );
    }

    protected handleError(error: HttpErrorResponse) {
        if (error.status === 400) {
            return throwError(new BadInputError(error));
        }
        if (error.status === 401) {
            return throwError(new BadCredentialsError(error));
        }
        if (error.status === 404) {
            return throwError(new NotFoundError(error));
        }
        return throwError(new AppError(error));
    }

}
