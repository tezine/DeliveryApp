//author Bruno Vacare Tezine
//#region Imports
import { Injectable } from '@angular/core'
import {Http, Response, URLSearchParams} from '@angular/http'
import {HttpClient, HttpParams} from '@angular/common/http';
import {Defines} from '../../codes/defines';
import {Helper} from '../../codes/helper';
import { EIuguPaymentMethod } from '../../entities/restinpeace/eiugupaymentmethod';
import { EList } from '../../entities/restinpeace/elist';
import { EIuguClientInfo } from '../../entities/restinpeace/eiuguclientinfo';
import { EResponse } from '../../entities/restinpeace/eresponse';
import { EIuguCreateDomicilioBancarioRequest } from '../../entities/restinpeace/eiugucreatedomiciliobancariorequest';
import { EIuguVerificarDomicilioItem } from '../../entities/restinpeace/eiuguverificardomicilioitem';
import { EIuguGetAccountInfoResponse } from '../../entities/restinpeace/eiugugetaccountinforesponse';
import { EIuguBuscarFaturaResponse } from '../../entities/restinpeace/eiugubuscarfaturaresponse';
import { EIuguCancelInvoiceResponse } from '../../entities/restinpeace/eiugucancelinvoiceresponse';
//#endregion

@Injectable()
export class IuguService {

	constructor(private authHttp: HttpClient) {}

	async getPaymentMethods(clientID:string, accountApiToken:string='', timeoutSeconds:number=20000):Promise<EIuguPaymentMethod[]>{
		let params: HttpParams = new HttpParams();
		if(accountApiToken!=null) params= params.set('accountApiToken', accountApiToken.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetPaymentMethods'+'/'+clientID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getPaymentMethod(clientID:string, paymentMethodID:string, accountApiToken:string='', timeoutSeconds:number=20000):Promise<EIuguPaymentMethod>{
		let params: HttpParams = new HttpParams();
		if(accountApiToken!=null) params= params.set('accountApiToken', accountApiToken.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetPaymentMethod'+'/'+clientID+'/'+paymentMethodID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getTransfersReceived(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetTransfersReceived', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getTransfersSent(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetTransfersSent', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getBankTransfers(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetBankTransfers', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getClient(clientID:string, accountApiToken:string='', timeoutSeconds:number=20000):Promise<EIuguClientInfo>{
		let params: HttpParams = new HttpParams();
		if(accountApiToken!=null) params= params.set('accountApiToken', accountApiToken.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetClient'+'/'+clientID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getClients(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetClients', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async removeClient(clientID:string, timeoutSeconds:number=20000):Promise<boolean>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/RemoveClient'+'/'+clientID).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAccounts(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetAccounts', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async adicionarDomicilioBancario(eRequest:EIuguCreateDomicilioBancarioRequest, subAccountUserToken:string, timeoutSeconds:number=20000):Promise<EResponse>{
		const response = await this.authHttp.post(Defines.RestBaseURL + '/v1/SIuguService/AdicionarDomicilioBancario'+'/'+subAccountUserToken, JSON.stringify(eRequest), Defines.httpOptions).toPromise().catch(Helper.handleError);
		return response;
	}

	async verificarEnvioDomicilioBancario(subAccountLiveApiToken:string, timeoutSeconds:number=20000):Promise<EIuguVerificarDomicilioItem[]>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/VerificarEnvioDomicilioBancario'+'/'+subAccountLiveApiToken).toPromise().catch(Helper.handleError);
		return response;
	}

	async getAccountInfo(accountID:string, subAccountLiveApiToken:string, timeoutSeconds:number=20000):Promise<EIuguGetAccountInfoResponse>{
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetAccountInfo'+'/'+accountID+'/'+subAccountLiveApiToken).toPromise().catch(Helper.handleError);
		return response;
	}

	async getFaturas(listCount:number=-1, pageNumber:number=0, timeoutSeconds:number=20000):Promise<EList>{
		let params: HttpParams = new HttpParams();
		if(listCount!=null) params= params.set('listCount', listCount.toString());
		if(pageNumber!=null) params= params.set('pageNumber', pageNumber.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetFaturas', {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async getFatura(invoiceID:string, accountApiToken:string='', timeoutSeconds:number=20000):Promise<EIuguBuscarFaturaResponse>{
		let params: HttpParams = new HttpParams();
		if(accountApiToken!=null) params= params.set('accountApiToken', accountApiToken.toString());
		const response = await this.authHttp.get(Defines.RestBaseURL + '/v1/SIuguService/GetFatura'+'/'+invoiceID, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async cancelarFatura(invoiceID:string, accountApiToken:string='', timeoutSeconds:number=20000):Promise<EIuguCancelInvoiceResponse>{
		let params: HttpParams = new HttpParams();
		if(accountApiToken!=null) params= params.set('accountApiToken', accountApiToken.toString());
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SIuguService/CancelarFatura'+'/'+invoiceID, Defines.httpOptions, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}

	async reembolsarFatura(invoiceID:string, accountApiToken:string='', timeoutSeconds:number=20000):Promise<EResponse>{
		let params: HttpParams = new HttpParams();
		if(accountApiToken!=null) params= params.set('accountApiToken', accountApiToken.toString());
		const response = await this.authHttp.put(Defines.RestBaseURL + '/v1/SIuguService/ReembolsarFatura'+'/'+invoiceID, Defines.httpOptions, {params: params}).toPromise().catch(Helper.handleError);
		return response;
	}


}