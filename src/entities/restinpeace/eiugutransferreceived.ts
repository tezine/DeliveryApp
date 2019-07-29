
import {EIuguSender} from './eiugusender';

export class EIuguTransferReceived{
	id:string;
	created_at:string;
	amount_cents:string;
	amount_localized:string;
	sender:EIuguSender;
}