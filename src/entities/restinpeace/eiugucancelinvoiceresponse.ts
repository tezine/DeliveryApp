
import {EIuguFaturaBankSlip} from './eiugufaturabankslip';
import {EIuguFaturaItem} from './eiugufaturaitem';
import {EIuguFaturaVariable} from './eiugufaturavariable';

export class EIuguCancelInvoiceResponse{
	id:string;
	due_date:string;
	currency:string;
	discount_cents:object;
	email:string;
	items_total_cents:number;
	notification_url:object;
	return_url:object;
	status:string;
	tax_cents:object;
	updated_at:string;
	total_cents:number;
	paid_at:object;
	commission_cents:object;
	secure_id:string;
	secure_url:string;
	customer_id:object;
	user_id:object;
	total:string;
	taxes_paid:string;
	commission:string;
	interest:object;
	discount:object;
	created_at:string;
	refundable:object;
	installments:object;
	bank_slip:EIuguFaturaBankSlip;
	items:EIuguFaturaItem[];
	variables:EIuguFaturaVariable[];
	custom_variables:object[];
	logs:object[];
}