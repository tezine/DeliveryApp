//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { ECompanyBillToReceive } from '../../entities/restinpeace/ecompanybilltoreceive';
//#endregion

@Injectable()
export class CompaniesBillsToReceiveService {

	constructor(private authHttp: HttpClient) {}

	async getAll(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='id desc', timeoutSeconds:number=20000):Promise<ECompanyBillToReceive[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCompaniesBillsToReceiveService/GetAll'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getCount(companyID:string, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCompaniesBillsToReceiveService/GetCount'+'/'+companyID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<ECompanyBillToReceive>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCompaniesBillsToReceiveService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eBillToReceive:ECompanyBillToReceive, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SCompaniesBillsToReceiveService/Save', JSON.stringify(eBillToReceive), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async remove(id:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.delete(Defines.RestBaseURL + '/v1/SCompaniesBillsToReceiveService/Remove'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}


}