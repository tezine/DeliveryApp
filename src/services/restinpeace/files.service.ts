//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EFile } from '../../entities/restinpeace/efile';
//#endregion

@Injectable()
export class FilesService {

	constructor(private authHttp: HttpClient) {}

	async getCompanyLogoByURL(url:string, timeoutSeconds:number=20000):Promise<EFile>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SFilesService/GetCompanyLogoByURL', JSON.stringify(url), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}