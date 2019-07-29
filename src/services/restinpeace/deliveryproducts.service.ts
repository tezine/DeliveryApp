//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EDeliveryProduct } from '../../entities/restinpeace/edeliveryproduct';
//#endregion

@Injectable()
export class DeliveryProductsService {

	constructor(private authHttp: HttpClient) {}

	async getAll(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EDeliveryProduct[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsService/GetAll'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getCount(companyID:string, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsService/GetCount'+'/'+companyID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAllDividedByCategory(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EDeliveryProduct[][]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsService/GetAllDividedByCategory'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAllWithDividers(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EDeliveryProduct[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsService/GetAllWithDividers'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<EDeliveryProduct>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async remove(id:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.delete(Defines.RestBaseURL + '/v1/SDeliveryProductsService/Remove'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eDeliveryProduct:EDeliveryProduct, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SDeliveryProductsService/Save', JSON.stringify(eDeliveryProduct), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}