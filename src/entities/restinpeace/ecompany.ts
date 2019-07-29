
import {ECompanyConfig} from './ecompanyconfig';

export class ECompany{
	id:string;
	name:string;
	email:string;
	completeAddress:string;
	street:string;
	number:string;
	addressComplement:string;
	referencePoint:string;
	neighborhood:string;
	postalCode:string;
	cityID?:number;
	stateID?:number;
	countryID?:number;
	phone1:string;
	phone2:string;
	mobile:string;
	enabled:boolean;
	website:string;
	labSite:string;
	cnpj:string;
	razaoSocial:string;
	inscricaoEstadual:string;
	simplesNacional:string;
	contactName:string;
	contactPhone:string;
	contactEmail:string;
	modulesUsed:string;
	config:string;
	creationDateUTC:string;
	modificationDateUTC:string;
	lastAccessUTC:string;
	eCompanyConfig:ECompanyConfig;
}