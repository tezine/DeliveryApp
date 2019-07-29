//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EBraspagToken } from '../../entities/restinpeace/ebraspagtoken';
//#endregion

@Injectable()
export class BraspagService {

	constructor(private authHttp: HttpClient) {}

	async createToken(timeoutSeconds:number=20000):Promise<EBraspagToken>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBraspagService/CreateToken').toPromise().catch(Helper.handleError);
		return response;
	}


}