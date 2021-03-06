//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EDeliveryProductOption } from '../../entities/restinpeace/edeliveryproductoption';
//#endregion

@Injectable()
export class DeliveryProductsOptionsService {

	constructor(private authHttp: HttpClient) {}

	async getAll(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EDeliveryProductOption[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/GetAll'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAllGroupNames(companyID:string, timeoutSeconds:number=20000):Promise<EDeliveryProductOption[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/GetAllGroupNames'+'/'+companyID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getChildOptions(parentGroupID:string, timeoutSeconds:number=20000):Promise<EDeliveryProductOption[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/GetChildOptions'+'/'+parentGroupID).toPromise().catch(Helper.handleError);
		return response;
	}

	async groupContainsPrice(parentGroupID:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/GroupContainsPrice'+'/'+parentGroupID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getCount(companyID:string, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/GetCount'+'/'+companyID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<EDeliveryProductOption>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async remove(id:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.delete(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/Remove'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eDeliveryProductOption:EDeliveryProductOption, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SDeliveryProductsOptionsService/Save', JSON.stringify(eDeliveryProductOption), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}