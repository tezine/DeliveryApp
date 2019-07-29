//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EBug } from '../../entities/restinpeace/ebug';
//#endregion

@Injectable()
export class BugTrackingService {

	constructor(private authHttp: HttpClient) {}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<EBug>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBugTrackingService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAll(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EBug[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBugTrackingService/GetAll', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eBug:EBug, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SBugTrackingService/Save', JSON.stringify(eBug), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}