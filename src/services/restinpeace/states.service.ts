//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EState } from '../../entities/restinpeace/estate';
//#endregion

@Injectable()
export class StatesService {

	constructor(private authHttp: HttpClient) {}

	async getBrazilStates(timeoutSeconds:number=20000):Promise<EState[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SStatesService/GetBrazilStates').toPromise().catch(Helper.handleError);
		return response;
	}


}