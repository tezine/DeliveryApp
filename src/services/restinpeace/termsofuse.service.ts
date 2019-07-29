//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { ETermsOfUse } from '../../entities/restinpeace/etermsofuse';
import { EList } from '../../entities/restinpeace/elist';
//#endregion

@Injectable()
export class TermsOfUseService {

	constructor(private authHttp: HttpClient) {}

	async getTermsOfUse(appType:number, timeoutSeconds:number=20000):Promise<ETermsOfUse>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/STermsOfUseService/GetTermsOfUse'+'/'+appType).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAll(listCount:number=-1, pageNumber:number=0, orderBy:string='id desc', timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/STermsOfUseService/GetAll', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<ETermsOfUse>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/STermsOfUseService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eTerm:ETermsOfUse, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/STermsOfUseService/Save', JSON.stringify(eTerm), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}