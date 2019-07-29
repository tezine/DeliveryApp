//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EBaseEntity } from '../../entities/restinpeace/ebaseentity';
import { ELogisticsDriverAuth } from '../../entities/restinpeace/elogisticsdriverauth';
//#endregion

@Injectable()
export class LogisticsDriversService {

	constructor(private authHttp: HttpClient) {}

	async getAll(companyID:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EBaseEntity[]>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/GetAll'+'/'+companyID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByID(id:string, timeoutSeconds:number=20000):Promise<EBaseEntity>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/GetByID'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async getCount(companyID:string, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/GetCount'+'/'+companyID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByEmail(email:string, timeoutSeconds:number=20000):Promise<EBaseEntity>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/GetByEmail'+'/'+email).toPromise().catch(Helper.handleError);
		return response;
	}

	async getByMobile(email:string, timeoutSeconds:number=20000):Promise<EBaseEntity>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/GetByMobile'+'/'+email).toPromise().catch(Helper.handleError);
		return response;
	}

	async save(eDriver:EBaseEntity, timeoutSeconds:number=20000):Promise<string>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/Save', JSON.stringify(eDriver), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async saveDriverStatus(eDriver:EBaseEntity, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/SaveDriverStatus', JSON.stringify(eDriver), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async saveLogMode(eDriver:EBaseEntity, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/SaveLogMode', JSON.stringify(eDriver), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async saveDriverStatusFromDriverMobile(driverID:number, statusID:number, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/SaveDriverStatusFromDriverMobile'+'/'+driverID+'/'+statusID, Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async createDriver(eDriver:EBaseEntity, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/CreateDriver', JSON.stringify(eDriver), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async saveVehicleInfo(eDriver:EBaseEntity, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/SaveVehicleInfo', JSON.stringify(eDriver), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async savePaymentConfig(eDriver:EBaseEntity, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/SavePaymentConfig', JSON.stringify(eDriver), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async saveNotifications(eDriver:EBaseEntity, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SLogisticsDriversService/SaveNotifications', JSON.stringify(eDriver), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async remove(id:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.delete(Defines.RestBaseURL + '/v1/SLogisticsDriversService/Remove'+'/'+id).toPromise().catch(Helper.handleError);
		return response;
	}

	async authenticate(txt:string, password:string, appVersion:string, firebaseToken:string, timeoutSeconds:number=20000):Promise<ELogisticsDriverAuth>{
		let params: HttpParams = new HttpParams();
		params= params.set('firebaseToken', firebaseToken.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/Authenticate'+'/'+txt+'/'+password+'/'+appVersion, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async recoverPassword(txt:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/RecoverPassword'+'/'+txt).toPromise().catch(Helper.handleError);
		return response;
	}

	async search(txt:string, listCount:number=-1, pageNumber:number=0, orderBy:string='name asc', timeoutSeconds:number=20000):Promise<EBaseEntity[]>{
		let params: HttpParams = new HttpParams();
		params= params.set('txt', txt.toString());
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		if(orderBy!=null) params= params.set('orderBy', orderBy.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SLogisticsDriversService/Search', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}


}