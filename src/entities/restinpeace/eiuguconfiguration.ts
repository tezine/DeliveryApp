
import {EIuguBankSlip} from './eiugubankslip';
import {EIuguAccountCreditCard} from './eiuguaccountcreditcard';

export class EIuguConfiguration{
	auto_withdraw:boolean;
	payment_email_notification:boolean;
	payment_email_notification_receiver:string;
	auto_advance?:boolean;
	auto_advance_type:object;
	auto_advance_option?:number;
	commission_percent:string;
	owner_emails_to_notify:object;
	fines?:boolean;
	late_payment_fine?:number;
	per_day_interest?:boolean;
	bank_slip:EIuguBankSlip;
	credit_card:EIuguAccountCreditCard;
	early_payment_discount?:boolean;
	early_payment_discount_days:object;
	early_payment_discount_percent:object;
}