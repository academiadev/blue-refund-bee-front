import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService extends DataService {

    constructor(http: HttpClient) {
        super(environment.urls.empresa.url, http);
    }

    public cadastrar(empresa) {
        let requestHeaders = new HttpHeaders();
        requestHeaders = requestHeaders.set('Authorization', 'Bearer ' + localStorage.getItem(environment.tokenName));

        console.log(empresa);

        return this.http.post('http://localhost:8086/cadastro/porcodigo/', empresa, {
            headers: requestHeaders
        } );
    }

}
