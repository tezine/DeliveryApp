//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EPayment } from '../../entities/restinpeace/epayment';
import { EList } from '../../entities/restinpeace/elist';
//#endregion

@Injectable()
export class PaymentsService {

	constructor(private authHttp: HttpClient) {}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<EPayment>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SPaymentsService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAll(listCount:number=-1, pageNumber:number=0, orderBy:string='id desc', timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SPaymentsService/GetAll', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAllByDriver(driverID:number, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SPaymentsService/GetAllByDriver'+'/'+driverID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAllByDriverThisMonth(driverID:number, timeoutSeconds:number=20000):Promise<EList>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SPaymentsService/GetAllByDriverThisMonth'+'/'+driverID).toPromise().catch(Helper.handleError);
		return response;
	}


}