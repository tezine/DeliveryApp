//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EBugComment } from '../../entities/restinpeace/ebugcomment';
//#endregion

@Injectable()
export class BugCommentsService {

	constructor(private authHttp: HttpClient) {}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<EBugComment>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBugCommentsService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAll(bugID:number, listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EBugComment[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBugCommentsService/GetAll'+'/'+bugID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eBugComment:EBugComment, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SBugCommentsService/Save', JSON.stringify(eBugComment), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}