
import {EIuguInvoiceItem2} from './eiuguinvoiceitem2';

export class EIuguInvoiceItem{
	id:string;
	due_date:string;
	currency:string;
	customer_id:string;
	discount_cents:object;
	email:string;
	expiration_url:object;
	notification_url:object;
	return_url:object;
	status:string;
	tax_cents:object;
	updated_at:string;
	total_cents:number;
	commission_cents?:number;
	secure_id:string;
	secure_url:string;
	user_id:object;
	commission:string;
	total:string;
	created_at:string;
	items:EIuguInvoiceItem2[];
	variables:object[];
	logs:object[];
}