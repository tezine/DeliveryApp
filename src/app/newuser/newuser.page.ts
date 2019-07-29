//region Imports
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoadingController, ToastController} from '@ionic/angular';
import {GISService} from '../../services/restinpeace/gis.service';
import {StatesService} from '../../services/restinpeace/states.service';
import {CitiesService} from '../../services/restinpeace/cities.service';
import {EBaseEntity} from '../../entities/restinpeace/ebaseentity';
import {EBaseAddress} from '../../entities/restinpeace/ebaseaddress';
import {EState} from '../../entities/restinpeace/estate';
import {ECity} from '../../entities/restinpeace/ecity';
import {BaseEntitiesService} from '../../services/restinpeace/baseentities.service';
import {Helper} from '../../codes/helper';

//endregion

@Component({
    selector: 'app-newuser',
    templateUrl: './newuser.page.html',
    styleUrls: ['./newuser.page.scss'],
    providers: [GISService, StatesService, CitiesService]
})
export class NewuserPage implements OnInit {

    //region Fields
    eBaseEntity = new EBaseEntity();
    eBaseAddress = new EBaseAddress();
    states: EState[] = [];
    cities: ECity[]=[];
    eSelectedState:number;
    eSelectedCityID:number;
    cepFound=false;
    repeatPassword = '';
    loading=false;
    //endregion

    constructor(private baseEntityService: BaseEntitiesService, private router: Router, private gisService: GISService, private statesService: StatesService, public loadingCtrl: LoadingController,
                private citiesService:CitiesService, private toastController: ToastController) { }

    async ngOnInit() {
        await this.getStates();
        console.log('origin:', location.origin);
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
        console.log('chegou rua', eCoordinate.rua);
        this.eBaseAddress.street = eCoordinate.rua;
        this.eBaseAddress.stateID=eCoordinate.stateID;
        this.eBaseAddress.cityID=eCoordinate.cityID;
        this.eBaseAddress.stateName=eCoordinate.estado;
        this.eBaseAddress.cityName=eCoordinate.cidade;
    }

    async getStates() {
        this.states = await this.statesService.getBrazilStates();
    }

    async onStateSelected(eState:EState){
        console.log('selecinou o estatdo', this.eSelectedState);
        //await this.getCities(this.eSelectedState);
    }

    compareWith(o1:EState, o2:EState) {
        return o1 && o2 ? o1.id === o2.id : o1 === o2;
    }

    async onBtnCreateUserClicked() {
        if(Helper.stringIsNullOrUndefinedOrEmpty(this.eBaseEntity.name)) return Helper.displayToastWithTimeout(this.toastController,'Especifique o nome');
        if(Helper.stringIsNullOrUndefinedOrEmpty(this.eBaseEntity.email)) return Helper.displayToastWithTimeout(this.toastController,'Especifique o e-mail');
        if(Helper.stringIsNullOrUndefinedOrEmpty(this.eBaseEntity.mobile)) return Helper.displayToastWithTimeout(this.toastController,'Especifique o celular');
        if(Helper.stringIsNullOrUndefinedOrEmpty(this.eBaseEntity.password)) return Helper.displayToastWithTimeout(this.toastController,'Especifique a senha');
        if(Helper.stringIsNullOrUndefinedOrEmpty(this.eBaseAddress.postalCode)) return Helper.displayToastWithTimeout(this.toastController,'Especifique o cep');
        if(Helper.stringIsNullOrUndefinedOrEmpty(this.eBaseAddress.street)) return Helper.displayToastWithTimeout(this.toastController,'Especifique a rua');
        if(Helper.stringIsNullOrUndefinedOrEmpty(this.eBaseAddress.number)) return Helper.displayToastWithTimeout(this.toastController,'Especifique o número da rua');
        this.loading=true;
        let eUserAuth = await this.baseEntityService.createUserFromMobile(this.eBaseEntity);
        this.loading=false;
    }
}
