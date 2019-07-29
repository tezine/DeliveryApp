
export class EPayment{
	id:number;
	driverID?:number;
	braspagPaymentID:string;
	returnCode:string;
	returnMessage:string;
	orderTotal:number;
	driverTotal:number;
	uttiliTotal:number;
	mdr:number;
	receivedDate:string;
	captureDate?:string;
	proofOfSale:string;
	authorizationCode:string;
	tid:string;
	creditCardBrand:string;
	status:number;
	getLink:string;
	driverTotalDecimal:number;
	orderTotalDecimal:number;
}