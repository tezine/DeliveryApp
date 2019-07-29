import {Defines} from './defines';
import {Injectable} from '@angular/core';
import {EStorage} from '../entities/estorage';
import {EDeliveryProduct} from '../entities/restinpeace/edeliveryproduct';
import {EDeliveryConfirmOrder} from '../entities/restinpeace/edeliveryconfirmorder';
import {EDeliveryProductInBasket} from '../entities/restinpeace/edeliveryproductinbasket';
import {ECompany} from '../entities/restinpeace/ecompany';

@Injectable({
  providedIn: 'root' //dessa maneira nao precisa declarar no module.ts
})
export class AppGlobals  extends Defines {

    public eStorage=new EStorage();
    public eDeliveryConfirmOrder=new EDeliveryConfirmOrder();
    public companyID='05b7d70f-4e72-11e9-a5a1-00155d016500';//todo mudar
    public userID='fc4686c3-4fd2-11e9-9ad6-00155d016500';//todo mudar

    constructor() {
        super();
        this.eDeliveryConfirmOrder.productList=[];
        console.log('criando lista vazia de produtos');
    }

    addToBasket(e:EDeliveryProductInBasket, companyID:string, userID:string):void{
        this.eDeliveryConfirmOrder.companyID=companyID;
        this.eDeliveryConfirmOrder.userID=userID;
        let productIndex = this.eDeliveryConfirmOrder.productList.findIndex(x=>x.id==e.id);
        if(productIndex!=-1) {
            //this.eDeliveryConfirmOrder.productList.re
            console.log('(AppGlobals)addToBasket. Replacing product...');
            this.eDeliveryConfirmOrder.productList[productIndex]=e;
            return;
        } else this.eDeliveryConfirmOrder.productList.push(e);
        console.log('(AppGlobals)addToBasket. adicionando produto na cesta:', e.option1ID, '.quantidade:', e.quantity, '.Contagem:',this.eDeliveryConfirmOrder.productList.length);
    }
}
