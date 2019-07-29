
export class ECompanyBillToReceive{
	id:string;
	companyID:string;
	fromEntityID:string;
	issueDate?:string;
	dueDate?:string;
	docNumber:string;
	amount?:number;
	amountReceived?:number;
	description:string;
	creationDateUTC:string;
	modificationDateUTC:string;
	entityName:string;
}