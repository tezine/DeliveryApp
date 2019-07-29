//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EBaseEntity } from '../../entities/restinpeace/ebaseentity';
import { EUserAuth } from '../../entities/restinpeace/euserauth';
//#endregion

@Injectable()
export class BaseEntitiesService {

	constructor(private authHttp: HttpClient) {}

	async getAll(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EBaseEntity[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBaseEntitiesService/GetAll'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<EBaseEntity>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBaseEntitiesService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async searchByName(companyID:string, name:string, timeoutSeconds:number=20000):Promise<EBaseEntity[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBaseEntitiesService/SearchByName'+'/'+companyID+'/'+name).toPromise().catch(Helper.handleError);
		return response;
	}

	async authenticate(email:string, password:string, timeoutSeconds:number=20000):Promise<EUserAuth>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SBaseEntitiesService/Authenticate'+'/'+email+'/'+password).toPromise().catch(Helper.handleError);
		return response;
	}

	async saveProfile(eBaseEntity:EBaseEntity, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SBaseEntitiesService/SaveProfile', JSON.stringify(eBaseEntity), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eBaseEntity:EBaseEntity, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SBaseEntitiesService/Save', JSON.stringify(eBaseEntity), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async remove(id:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.delete(Defines.RestBaseURL + '/v1/SBaseEntitiesService/Remove'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async createUserFromMobile(eNewUser:EBaseEntity, timeoutSeconds:number=20000):Promise<EUserAuth>{
		const response = await this.authHttp.post(Defines.RestBaseURL + '/v1/SBaseEntitiesService/CreateUserFromMobile', JSON.stringify(eNewUser), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}


}