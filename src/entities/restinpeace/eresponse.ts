
export class EResponse{
	ok:boolean;
	errorMessage:string;
	errorCode:number;
	columnsContent:string;
	content:object;
	id:number;
	idString:string;
	deliveryFileID:number;
	invoice_id:string;
	iuguRequestID?:number;
}