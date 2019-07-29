
import {EBraspagAuthorizeRequestCreditCard} from './ebraspagauthorizerequestcreditcard';

export class EBraspagAuthorizeRequestPayment{
	Type:string;
	Amount:number;
	Installments:number;
	SoftDescriptor:string;
	CreditCard:EBraspagAuthorizeRequestCreditCard;
}