//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EList } from '../../entities/restinpeace/elist';
import { EServerError } from '../../entities/restinpeace/eservererror';
//#endregion

@Injectable()
export class ErrorsService {

	constructor(private authHttp: HttpClient) {}

	async getAll(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SErrorsService/GetAll', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<EServerError>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SErrorsService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async clear(timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SErrorsService/Clear').toPromise().catch(Helper.handleError);
		return response;
	}


}