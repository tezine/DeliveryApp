//region Imports
import { Component, OnInit } from '@angular/core';
import {Defines} from '../../codes/defines';
import {LoadingController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {AppGlobals} from '../../codes/appglobals';
import {EBaseEntity} from '../../entities/restinpeace/ebaseentity';
import {BaseEntitiesService} from '../../services/restinpeace/baseentities.service';
import {EBaseAddress} from '../../entities/restinpeace/ebaseaddress';
import {Helper} from '../../codes/helper';
import {GISService} from '../../services/restinpeace/gis.service';
import {Location} from '@angular/common';
//endregion

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
  providers: [GISService]
})
export class ConfigPage implements OnInit {

  eBaseEntity=new EBaseEntity();
  repeatPassword="";
  eBaseAddress=new EBaseAddress();
  cepFound=true;

  constructor(private baseEntityService:BaseEntitiesService,public loadingCtrl: LoadingController, private router: Router, private appGlobals:AppGlobals,
              private gisService:GISService,private toastController: ToastController,private location: Location) {
    //this.eBaseEntity.address1=new EBaseAddress();
  }

  async ngOnInit() {
    const loader = await this.loadingCtrl.create({message: 'Aguarde...', duration: 5000});
    loader.present();
    this.eBaseEntity=await this.baseEntityService.getByID(this.appGlobals.userID);
    this.eBaseAddress=this.eBaseEntity.addressList[0];
    loader.dismiss();
  }

  async onTxtPostalCodeFilled(event: any) {
    if (this.eBaseAddress.postalCode.length != 8) {
      return;
    }
    console.log('verificando cep:', this.eBaseAddress.postalCode);
    const loader = await this.loadingCtrl.create({message: 'Aguarde...', duration: 5000});
    loader.present();
    let eCoordinate = await this.gisService.getAddressOfPostalCode(this.eBaseAddress.postalCode);
    loader.dismiss();
    if (!eCoordinate ||  (!eCoordinate.rua) || (eCoordinate.rua.length==0)) {
      return Helper.displayToastWithTimeout(this.toastController,'CEP não encontrado');
    }
    this.cepFound=true;
    this.eBaseAddress.street = eCoordinate.rua;
    this.eBaseAddress.stateID=eCoordinate.stateID;
    this.eBaseAddress.cityID=eCoordinate.cityID;
    this.eBaseAddress.stateName=eCoordinate.estado;
    this.eBaseAddress.cityName=eCoordinate.cidade;
  }

  async onBtnSaveClicked(){
    if(this.eBaseEntity.password!=this.repeatPassword)return Helper.displayToastWithTimeout(this.toastController,'As senhas são diferentes');
    if(this.eBaseEntity.password.length<6)return Helper.displayToastWithTimeout(this.toastController,'A senha deve ter ao menos 6 dígitos');
    this.eBaseEntity.addressList[0]=this.eBaseAddress;
    let ok= await this.baseEntityService.saveProfile(this.eBaseEntity);
    if(ok)this.location.back();
    else Helper.displayToastWithTimeout(this.toastController,'Falha ao salvar');
  }
}
