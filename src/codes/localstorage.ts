import {Defines} from './defines';
import {AppGlobals} from './appglobals';
import {EStorage} from '../entities/estorage';

export class LocalStorage{

    static readValuesToAppGlobals(appGlobals:AppGlobals):void{
        let eStorage:EStorage;
        let value= localStorage.getItem(Defines.localStorageKey);
        if(value!=null){
            eStorage=JSON.parse(value);
            appGlobals.eStorage=eStorage;
        }
    }

    static saveAppGlobals(appGlobals:AppGlobals):void{
        localStorage.setItem(Defines.localStorageKey,JSON.stringify(appGlobals.eStorage));
    }

    static clearValues(appGlobals:AppGlobals):void{
        appGlobals.eStorage=new EStorage();
        localStorage.removeItem(Defines.localStorageKey);
    }

    static setJwtToken(token:string):void{
        //console.log('vai setar token:',token);
        localStorage.setItem(Defines.localStorageToken, token);//usado pelo angular2-jwt
        //console.log('setou token:',localStorage.getItem(Defines.localStorageToken));
    }

    static getJwtToken():any{
        return localStorage.getItem(Defines.localStorageToken);//usado pelo angular2-jwt
    }

}
