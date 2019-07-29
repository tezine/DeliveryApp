
import { EntityType } from '../../enums/restinpeace/entitytype';
import {EBaseAddress} from './ebaseaddress';

export class EBaseEntity{
	id:string;
	companyID:string;
	type:EntityType;
	name:string;
	surname:string;
	email:string;
	login:string;
	password:string;
	mobile:string;
	gender:number;
	status:number;
	rg:string;
	cpf:string;
	permissions:number;
	firebaseToken:string;
	appleToken:string;
	mobileVersion:string;
	razaoSocial:string;
	inscricaoEstadual:string;
	simplesNacional:string;
	cnpj:string;
	website:string;
	contactName:string;
	contactPhone:string;
	creationDateUTC:string;
	lastAccessUTC:string;
	modificationDateUTC:string;
	token:string;
	addressList:EBaseAddress[];
}