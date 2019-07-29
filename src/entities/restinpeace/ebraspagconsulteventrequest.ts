
export class EBraspagConsultEventRequest{
	accessToken:string;
	initialForecastedDate?:string;
	finalForecastedDate?:string;
	initialPaymentDate?:string;
	finalPaymentDate?:string;
	pageIndex?:number;
	pageSize?:number;
	eventStatus:string;
	includeAllSubordinates?:boolean;
	merchantIds:string;
}