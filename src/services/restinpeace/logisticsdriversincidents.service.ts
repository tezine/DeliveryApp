//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { ELogisticsDriverIncident } from '../../entities/restinpeace/elogisticsdriverincident';
//#endregion

@Injectable()
export class LogisticsDriversIncidentsService {

	constructor(private authHttp: HttpClient) {}

	async getAll(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='creationdateutc desc', timeoutSeconds:number=20000):Promise<ELogisticsDriverIncident[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversIncidentsService/GetAll'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<ELogisticsDriverIncident>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversIncidentsService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async getCount(companyID:string, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversIncidentsService/GetCount'+'/'+companyID).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eIncident:ELogisticsDriverIncident, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversIncidentsService/Save', JSON.stringify(eIncident), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async remove(id:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.delete(Defines.RestBaseURL + '/v1/SLogisticsDriversIncidentsService/Remove'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}


}