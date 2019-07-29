//region Imports
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DeliveryOrdersService} from '../../services/restinpeace/deliveryorders.service';
import {AppGlobals} from '../../codes/appglobals';
import {ToastController} from '@ionic/angular';
import {Helper} from '../../codes/helper';
import {Defines} from '../../codes/defines';
import {EKeyValue} from '../../entities/ekeyvalue';
import {CompaniesService} from '../../services/restinpeace/companies.service';
import {ECompany} from '../../entities/restinpeace/ecompany';
import * as moment from 'moment';
//endregion

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
  providers:[DeliveryOrdersService, CompaniesService]
})
export class BasketPage implements OnInit {


    paymentMethods:EKeyValue[]=[];
    eCompany=new ECompany();

  constructor(private deliveryOrdersService:DeliveryOrdersService, private router:Router, public appGlobals:AppGlobals,
              private toastController: ToastController, private companyService:CompaniesService) {

    // //todo remover
    // this.appGlobals.eDeliveryConfirmOrder=new EDeliveryConfirmOrder();
    // this.appGlobals.eDeliveryConfirmOrder.productList=[];
    // let eProduct=new EDeliveryProductInBasket();
    // eProduct.quantity=3;
    // eProduct.name='Pizza de brócolis';
    // eProduct.brief='pizza maravilhosa e com recheio de tomate.....';
    // eProduct.option1GroupName='Tamanho';
    // eProduct.option1Name='Grande';
    // eProduct.option1Price=60;
    //
    // eProduct.option2GroupName='Massa';
    // eProduct.option2Name='Fina';
    //
    // eProduct.addon1GroupName='Borda';
    // eProduct.addon1Name='Gergelim';
    // eProduct.addon1Price=2;
    // eProduct.comments='sem provolone';
    // this.appGlobals.eDeliveryConfirmOrder.total=10;
    // this.appGlobals.eDeliveryConfirmOrder.productList.push(eProduct);
  }

  async ngOnInit() {
      this.eCompany=await this.companyService.getByID(this.appGlobals.companyID);
      if(this.eCompany.eCompanyConfig.acceptCreditCard)this.paymentMethods.push(new EKeyValue('Cartão de crédito', 1));
      if(this.eCompany.eCompanyConfig.acceptDebitCard)this.paymentMethods.push(new EKeyValue('Cartão de débito', 2));
      if(this.eCompany.eCompanyConfig.acceptCash)this.paymentMethods.push(new EKeyValue('Dinheiro', 3));
      this.appGlobals.eDeliveryConfirmOrder.total= await this.deliveryOrdersService.getTotal(this.appGlobals.eDeliveryConfirmOrder);
  }

  async onBtnConfirmOrderClicked(){
      console.log('(onBtnConfirmOrder)', this.appGlobals.eDeliveryConfirmOrder.paymentMethodType);
      if(Helper.numberIsNullOrUndefinedOrZero(this.appGlobals.eDeliveryConfirmOrder.paymentMethodType))return Helper.displayToastWithTimeout(this.toastController,'Especifique a forma de pagamento');
     let now=moment().format();
     console.log('now:',now);
     this.appGlobals.eDeliveryConfirmOrder.creationDateLocal=now;
     let ok=await this.deliveryOrdersService.confirmOrder(this.appGlobals.eDeliveryConfirmOrder);
     if(!ok)return Helper.displayToastWithTimeout(this.toastController,'Falha ao enviar pedido');
     else this.router.navigateByUrl(Defines.routeBasketResult);
  }

  getTotalString():string{
      if(this.appGlobals.eDeliveryConfirmOrder.total==0)return '';
      else return 'R$ '+this.appGlobals.eDeliveryConfirmOrder.total;
  }
}
