//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EBaseAddress } from '../../entities/restinpeace/ebaseaddress';
//#endregion

@Injectable()
export class BaseAddressesService {

	constructor(private authHttp: HttpClient) {}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<EBaseAddress>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBaseAddressesService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async getEntityAddresses(entityID:string, timeoutSeconds:number=20000):Promise<EBaseAddress[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBaseAddressesService/GetEntityAddresses'+'/'+entityID).toPromise().catch(Helper.handleError);
		return response;
	}


}