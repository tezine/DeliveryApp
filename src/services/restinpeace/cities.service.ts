//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { ECity } from '../../entities/restinpeace/ecity';
//#endregion

@Injectable()
export class CitiesService {

	constructor(private authHttp: HttpClient) {}

	async getByID(cityID:number, timeoutSeconds:number=20000):Promise<ECity>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCitiesService/GetByID'+'/'+cityID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAllByState(stateID:number, timeoutSeconds:number=20000):Promise<ECity[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCitiesService/GetAllByState'+'/'+stateID).toPromise().catch(Helper.handleError);
		return response;
	}

	async searchCityByName(name:string, listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<ECity[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCitiesService/SearchCityByName'+'/'+name, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}


}