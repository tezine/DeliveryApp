
import {EBraspagAuthorizeRequestCustomer} from './ebraspagauthorizerequestcustomer';
import {EBraspagAuthorizeRequestPayment} from './ebraspagauthorizerequestpayment';

export class EBraspagAuthorizeRequest{
	MerchantOrderId:string;
	Customer:EBraspagAuthorizeRequestCustomer;
	Payment:EBraspagAuthorizeRequestPayment;
}