
import {EIuguBankAddress} from './eiugubankaddress';

export class EIuguBankTransfer{
	id:string;
	status:string;
	created_at:string;
	updated_at:string;
	amount:string;
	account_name:string;
	account_id:string;
	bank_address:EIuguBankAddress;
}