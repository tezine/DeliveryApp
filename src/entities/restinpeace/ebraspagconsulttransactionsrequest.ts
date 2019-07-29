
export class EBraspagConsultTransactionsRequest{
	initialCaptureDate?:string;
	finalCaptureDate?:string;
	pageIndex?:number;
	pageSize?:number;
	eventStatus:string;
	includeAllSubordinates?:boolean;
	merchantIds:string;
}