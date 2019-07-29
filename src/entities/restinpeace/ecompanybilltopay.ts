
export class ECompanyBillToPay{
	id:string;
	companyID:string;
	toEntityID:string;
	issueDate?:string;
	dueDate?:string;
	docNumber:string;
	amount?:number;
	totalPaid?:number;
	description:string;
	creationDateUTC:string;
	modificationDateUTC:string;
	entityName:string;
}