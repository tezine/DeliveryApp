//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EModule } from '../../entities/restinpeace/emodule';
//#endregion

@Injectable()
export class ModulesService {

	constructor(private authHttp: HttpClient) {}

	async getAllByCompany(companyID:string, timeoutSeconds:number=20000):Promise<EModule[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SModulesService/GetAllByCompany'+'/'+companyID).toPromise().catch(Helper.handleError);
		return response;
	}


}