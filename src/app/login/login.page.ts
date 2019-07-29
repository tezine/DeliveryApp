//region Imports
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MenuController, NavController, ToastController} from '@ionic/angular';
import {AppGlobals} from '../../codes/appglobals';
import {Helper} from '../../codes/helper';
import {Defines} from '../../codes/defines';
import {BaseEntitiesService} from '../../services/restinpeace/baseentities.service';
import {FilesService} from '../../services/restinpeace/files.service';
import {EFile} from '../../entities/restinpeace/efile';
//endregion

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [FilesService]
})
export class LoginPage implements OnInit {

  //region fields
  email="bruno@tezine.com";
  password="tatatete";//todo remover
  loading=false;
  eFile=new EFile();
  picBase64:string;
  //endregion

  constructor(private baseEntitiesService:BaseEntitiesService,private router: Router, public toastController: ToastController, public appGlobals:AppGlobals,
              private navCtrl: NavController, private menu : MenuController, private filesService:FilesService) {

  }

  async ngOnInit() {
    console.log('fazendo lock no split');
     this.menu.enable(false);
    // this.menu.swipeEnable(false);
    this.eFile= await this.filesService.getCompanyLogoByURL(window.location.href);
    this.picBase64='data:image/jpeg;base64,'+this.eFile.contentBase64;
  }


  async onBtnLoginClicked(){
    console.log('clicou em login');
    this.loading=true;
    let eUserAuth=await this.baseEntitiesService.authenticate(this.email,this.password);
    this.appGlobals.companyID=eUserAuth.companyID;
    this.loading=false;
    if(!eUserAuth || (!eUserAuth.authenticated))return Helper.displayToastWithTimeout(this.toastController,'Falha na autenticação');
    this.appGlobals.userID=eUserAuth.id;
    this.router.navigateByUrl(Defines.routeProducts);
  }

  ionViewWillLeave(){
    this.menu.enable(true);
    //this.menu.swipeEnable(true);
  }

}
