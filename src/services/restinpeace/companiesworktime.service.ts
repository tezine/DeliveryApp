//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { ECompanyWorkTimes } from '../../entities/restinpeace/ecompanyworktimes';
//#endregion

@Injectable()
export class CompaniesWorkTimeService {

	constructor(private authHttp: HttpClient) {}

	async getByCompanyID(id:string, timeoutSeconds:number=20000):Promise<ECompanyWorkTimes>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCompaniesWorkTimeService/GetByCompanyID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eWorkTimes:ECompanyWorkTimes, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SCompaniesWorkTimeService/Save', JSON.stringify(eWorkTimes), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}