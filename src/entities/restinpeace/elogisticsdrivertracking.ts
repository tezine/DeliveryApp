
export class ELogisticsDriverTracking{
	id:string;
	lastTrackingID:string;
	tripID?:number;
	driverID?:number;
	tripStatus?:number;
	latitude?:number;
	longitude?:number;
	dateUTC:string;
	dateLocal:string;
	distanceFromLastPosition:number;
	distanceFromLastRecord:number;
	shadow:boolean;
	isServiceStart:boolean;
	seed:string;
	driverName:string;
	color:string;
	title:string;
}