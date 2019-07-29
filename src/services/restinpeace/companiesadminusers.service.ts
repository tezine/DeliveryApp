//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EList } from '../../entities/restinpeace/elist';
import { ECompanyAdminUser } from '../../entities/restinpeace/ecompanyadminuser';
//#endregion

@Injectable()
export class CompaniesAdminUsersService {

	constructor(private authHttp: HttpClient) {}

	async getAll(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCompaniesAdminUsersService/GetAll'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<ECompanyAdminUser>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SCompaniesAdminUsersService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eUser:ECompanyAdminUser, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SCompaniesAdminUsersService/Save', JSON.stringify(eUser), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async remove(id:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.delete(Defines.RestBaseURL + '/v1/SCompaniesAdminUsersService/Remove'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}


}