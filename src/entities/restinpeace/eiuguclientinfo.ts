
import {EIuguPaymentMethod} from './eiugupaymentmethod';

export class EIuguClientInfo{
	id:string;
	email:string;
	name:string;
	notes:string;
	created_at:string;
	updated_at:string;
	custom_variables:object[];
	paymentMethods:EIuguPaymentMethod[];
}