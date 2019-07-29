
import { DeliveryStatus } from '../../enums/restinpeace/deliverystatus';
import {EDeliveryProductInBasket} from './edeliveryproductinbasket';

export class EDeliveryOrder{
	id:string;
	companyID:string;
	visualID:number;
	entityID:string;
	paymentMethodType?:number;
	exitDateUTC?:string;
	deliveryDateUTC?:string;
	status:DeliveryStatus;
	content:string;
	qualification?:number;
	userComment:string;
	discount:number;
	notes:string;
	change?:number;
	changeFor?:number;
	total?:number;
	creationDateUTC:string;
	creationDateLocal?:string;
	modificationDateUTC:string;
	entityName:string;
	statusName:string;
	productList:EDeliveryProductInBasket[];
}