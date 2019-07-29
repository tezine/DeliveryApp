
export class ESplitResponse{
	success:boolean;
	errorMessage:string;
	internalErrorMessage:string;
	tripID?:number;
	driverID?:number;
	userID?:number;
	stackTrace:string;
	subordinateTotal:number;
	internalPaymentID:number;
	braspagPaymentID:string;
}