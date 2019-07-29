import {HttpHeaders} from '@angular/common/http';

export class Defines {
    static readonly angularAppVersion = "1.0.36";
    static readonly RestBaseURL = '/api';  // URL to web api
    static readonly Headers = new Headers({ 'Content-Type': 'application/json' });
    static readonly localStorageKey = 'myLocalStorage';
    static readonly mapBoxAccessToken = 'change';
    static readonly localStorageToken = 'token';
    static companyID='05b7d70f-4e72-11e9-a5a1-00155d016500';

    static readonly routeProducts = 'products';//ver as rotas em app-routing.module.ts
    static readonly routeBasketResult = 'basket-result';

    static readonly httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

}
