//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EList } from '../../entities/restinpeace/elist';
//#endregion

@Injectable()
export class IuguClientsService {

	constructor(private authHttp: HttpClient) {}

	async getSubClients(clientID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='driverid asc', timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguClientsService/GetSubClients'+'/'+clientID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}


}