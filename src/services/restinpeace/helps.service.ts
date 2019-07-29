//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EList } from '../../entities/restinpeace/elist';
import { EHelp } from '../../entities/restinpeace/ehelp';
//#endregion

@Injectable()
export class HelpsService {

	constructor(private authHttp: HttpClient) {}

	async getAll(listCount:number=-1, pageNumber:number=0, orderBy:string='id desc', timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SHelpsService/GetAll', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<EHelp>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SHelpsService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async getHelpContent(languageCode:number, helpType:number, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SHelpsService/GetHelpContent'+'/'+languageCode+'/'+helpType).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eHelp:EHelp, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SHelpsService/Save', JSON.stringify(eHelp), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async updateHelp(helpContent:string, languageCode:number, helpType:number, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SHelpsService/UpdateHelp'+'/'+languageCode+'/'+helpType, JSON.stringify(helpContent), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}