
export class ECompanyChat{
	id:string;
	companyID:string;
	companyAdminUserID:string;
	companyMobileUserID:string;
	chatDirection:number;
	content:string;
	creationDateUTC:string;
	creationDateLocal?:string;
	senderName:string;
	receiverName:string;
	color:string;
}