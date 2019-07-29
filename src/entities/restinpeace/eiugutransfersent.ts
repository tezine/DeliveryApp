
import {EIuguReceiver} from './eiugureceiver';

export class EIuguTransferSent{
	id:string;
	created_at:string;
	amount_cents:string;
	amount_localized:string;
	receiver:EIuguReceiver;
}