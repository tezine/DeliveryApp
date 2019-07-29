import {Component, Input, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {DeliveryProductsService} from '../../services/restinpeace/deliveryproducts.service';
import {AppGlobals} from '../../codes/appglobals';
import {EDeliveryProduct} from '../../entities/restinpeace/edeliveryproduct';
import {DeliveryProductsOptionsService} from '../../services/restinpeace/deliveryproductsoptions.service';
import {Helper} from '../../codes/helper';
import {EDeliveryProductOption} from '../../entities/restinpeace/edeliveryproductoption';
import {EDeliveryProductAddon} from '../../entities/restinpeace/edeliveryproductaddon';
import {DeliveryProductsAddonsService} from '../../services/restinpeace/deliveryproductsaddons.service';
import {EDeliveryProductInBasket} from '../../entities/restinpeace/edeliveryproductinbasket';

@Component({
  selector: 'app-product-dlg',
  templateUrl: './product-dlg.component.html',
  styleUrls: ['./product-dlg.component.scss'],
  providers:[DeliveryProductsService, DeliveryProductsOptionsService, DeliveryProductsAddonsService]
})
export class ProductDlgComponent implements OnInit {

  @Input() productID:string;
  eProduct=new EDeliveryProduct();
  quantityList:number[]=[1,2,3,4,5,6,7,8,9,10];
  childOptions1:EDeliveryProductOption[]=[];
  childOptions2:EDeliveryProductOption[]=[];
  childAddons1:EDeliveryProductAddon[]=[];
  childAddons2:EDeliveryProductAddon[]=[];
  childAddons3:EDeliveryProductAddon[]=[];
  eProductInBasket=new EDeliveryProductInBasket();

  constructor(navParams: NavParams, private deliveryProductsService:DeliveryProductsService, private optionsService:DeliveryProductsOptionsService,
              private addonsService:DeliveryProductsAddonsService, private appGlobals:AppGlobals,private modalCtrl: ModalController) {
  }

  async ngOnInit() {
    this.eProduct=await this.deliveryProductsService.getByID(this.productID);
    if(this.eProduct.allowHalf)this.quantityList=[0.5, 1,2,3,4,5,6,7,8,9,10];
    console.log(this.eProduct.addon1ParentGroupID, this.eProduct.addon1ParentGroupName);
    if(!Helper.isNullOrUndefined(this.eProduct.option1ParentGroupID)) this.childOptions1=await this.optionsService.getChildOptions(this.eProduct.option1ParentGroupID);
    if(!Helper.isNullOrUndefined(this.eProduct.option2ParentGroupID)) this.childOptions2=await this.optionsService.getChildOptions(this.eProduct.option2ParentGroupID);
    if(!Helper.isNullOrUndefined(this.eProduct.addon1ParentGroupID)) this.childAddons1=await this.addonsService.getChildAddons(this.eProduct.addon1ParentGroupID);
    if(!Helper.isNullOrUndefined(this.eProduct.addon2ParentGroupID)) this.childAddons2=await this.addonsService.getChildAddons(this.eProduct.addon2ParentGroupID);
    if(!Helper.isNullOrUndefined(this.eProduct.addon3ParentGroupID)) this.childAddons3=await this.addonsService.getChildAddons(this.eProduct.addon3ParentGroupID);
  }

  async onBtnCancelClicked(){
    this.modalCtrl.dismiss();
  }

  getOptionNameWithPrice(eOption:EDeliveryProductOption):string{
    if(eOption.price && eOption.price>0)return eOption.name+' - ' +eOption.price +' reais';
    else return eOption.name;
  }

  async onBtnAddClicked(){
    this.eProductInBasket.name=this.eProduct.name;
    this.eProductInBasket.brief=this.eProduct.brief;
    this.eProductInBasket.id=this.eProduct.id;
    this.eProductInBasket.unitPrice=this.eProduct.unitPrice;
    if(!Helper.isNullOrUndefined(this.eProductInBasket.option1ID)){
      this.eProductInBasket.option1GroupName=this.eProduct.option1ParentGroupName;
      let eOption1=this.childOptions1.find(x=>x.id==this.eProductInBasket.option1ID);
      if(eOption1){
        this.eProductInBasket.option1Price=eOption1.price;
        this.eProductInBasket.option1Name=eOption1.name;
      }
    }
    if(!Helper.isNullOrUndefined(this.eProductInBasket.option2ID)){
      this.eProductInBasket.option2GroupName=this.eProduct.option2ParentGroupName;
      let eOption2=this.childOptions2.find(x=>x.id==this.eProductInBasket.option2ID);
      if(eOption2){
        this.eProductInBasket.option2Price=eOption2.price;
        this.eProductInBasket.option2Name=eOption2.name;
      }
    }
    if(!Helper.isNullOrUndefined(this.eProductInBasket.addon1ID)){
      this.eProductInBasket.addon1GroupName=this.eProduct.addon1ParentGroupName;
      let eAddon=this.childAddons1.find(x=>x.id==this.eProductInBasket.addon1ID);
      if(eAddon){
        this.eProductInBasket.addon1Price=eAddon.price;
        this.eProductInBasket.addon1Name=eAddon.name;
      }
    }
    if(!Helper.isNullOrUndefined(this.eProductInBasket.addon2ID)){
      this.eProductInBasket.addon2GroupName=this.eProduct.addon2ParentGroupName;
      let eAddon=this.childAddons2.find(x=>x.id==this.eProductInBasket.addon2ID);
      if(eAddon){
        this.eProductInBasket.addon2Price=eAddon.price;
        this.eProductInBasket.addon2Name=eAddon.name;
      }
    }
    if(!Helper.isNullOrUndefined(this.eProductInBasket.addon3ID)){
      this.eProductInBasket.addon3GroupName=this.eProduct.addon3ParentGroupName;
      let eAddon= this.childAddons3.find(x=>x.id==this.eProductInBasket.addon3ID);
      if(eAddon){
        this.eProductInBasket.addon3Price=eAddon.price;
        this.eProductInBasket.addon3Name=eAddon.name;
      }
    }
    this.appGlobals.addToBasket(this.eProductInBasket,this.appGlobals.companyID,this.appGlobals.userID);
    this.modalCtrl.dismiss();
  }

}
