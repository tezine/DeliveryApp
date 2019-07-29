//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { ECoordinate } from '../../entities/restinpeace/ecoordinate';
import { EDistanceAndDuration } from '../../entities/restinpeace/edistanceandduration';
import { ECoordinates } from '../../entities/restinpeace/ecoordinates';
//#endregion

@Injectable()
export class GISService {

	constructor(private authHttp: HttpClient) {}

	async getEstimatedTime(fromLat:number, fromLong:number, toLat:number, toLong:number, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SGISService/GetEstimatedTime'+'/'+fromLat+'/'+fromLong+'/'+toLat+'/'+toLong).toPromise().catch(Helper.handleError);
		return response;
	}

	async getEstimatedTimeToArriveAtPoint(driverCoordinates:string, pointID:number, timeoutSeconds:number=20000):Promise<number>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SGISService/GetEstimatedTimeToArriveAtPoint'+'/'+driverCoordinates+'/'+pointID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getPossibleCoordinatesFromAddress(endereco:string, timeoutSeconds:number=20000):Promise<ECoordinate[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SGISService/GetPossibleCoordinatesFromAddress'+'/'+endereco).toPromise().catch(Helper.handleError);
		return response;
	}

	async getPossibleSPCoordinatesFromAddress(endereco:string, timeoutSeconds:number=20000):Promise<ECoordinate[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SGISService/GetPossibleSPCoordinatesFromAddress'+'/'+endereco).toPromise().catch(Helper.handleError);
		return response;
	}

	async getCoordenadaDoEndereco(eCoordinate:ECoordinate, timeoutSeconds:number=20000):Promise<ECoordinate>{
		const response = await this.authHttp.post(Defines.RestBaseURL + '/v1/SGISService/GetCoordenadaDoEndereco', JSON.stringify(eCoordinate), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async getCoordinatesFromAddress(address:string, country:string, timeoutSeconds:number=20000):Promise<ECoordinate>{
		let params: HttpParams = new HttpParams();
		if(country!=null) params= params.set('country', country.toString());
		const response = await this.authHttp.post(Defines.RestBaseURL + '/v1/SGISService/GetCoordinatesFromAddress'+'/'+address, Defines.httpOptions, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getDistanceWithGoogle(eCoordinates:ECoordinates, timeoutSeconds:number=20000):Promise<EDistanceAndDuration>{
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SGISService/GetDistanceWithGoogle', JSON.stringify(eCoordinates), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAddressOfPostalCode(postalCode:string, timeoutSeconds:number=20000):Promise<ECoordinate>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SGISService/GetAddressOfPostalCode'+'/'+postalCode).toPromise().catch(Helper.handleError);
		return response;
	}


}