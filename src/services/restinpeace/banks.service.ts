//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EBank } from '../../entities/restinpeace/ebank';
//#endregion

@Injectable()
export class BanksService {

	constructor(private authHttp: HttpClient) {}

	async getBanks(timeoutSeconds:number=20000):Promise<EBank[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBanksService/GetBanks').toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:number, timeoutSeconds:number=20000):Promise<EBank>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBanksService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}


}