//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EServerConfig } from '../../entities/restinpeace/eserverconfig';
//#endregion

@Injectable()
export class ServerConfigService {

	constructor(private authHttp: HttpClient) {}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<EServerConfig>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SServerConfigService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eServerConfig:EServerConfig, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SServerConfigService/Save', JSON.stringify(eServerConfig), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}