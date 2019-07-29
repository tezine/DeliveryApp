
export class EDeliveryProductOption{
	id:string;
	parentID:string;
	companyID:string;
	name:string;
	internalName:string;
	price?:number;
	isGroupName:boolean;
	isMandatory:boolean;
	parentGroupName:string;
	completeParentGroupName:string;
	completeGroupName:string;
}