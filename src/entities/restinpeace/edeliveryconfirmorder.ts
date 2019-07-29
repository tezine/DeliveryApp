
import {EDeliveryProductInBasket} from './edeliveryproductinbasket';

export class EDeliveryConfirmOrder{
	userID:string;
	companyID:string;
	comments:string;
	paymentMethodType:number;
	total:number;
	changeFor:number;
	creationDateLocal?:string;
	productList:EDeliveryProductInBasket[];
}