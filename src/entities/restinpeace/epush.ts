
export class EPush{
	id:number;
	pushType:number;
	title:string;
	message:string;
	badge:number;
	sound:string;
	driverID?:number;
	userID?:number;
	tripID?:number;
	directionType:number;
	status:number;
	creationDateUTC:string;
	key1:string;
	value1:string;
	key2:string;
	value2:string;
	key3:string;
	value3:string;
	userName:string;
	firebaseToken:string;
	applePushToken:string;
	sendNotification:boolean;
}