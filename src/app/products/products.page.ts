//region Imports
import {Component, OnInit} from '@angular/core';
import {OverlayEventDetail} from '@ionic/core';
import {Router} from '@angular/router';
import {Defines} from '../../codes/defines';
import {LoadingController, ModalController, PickerController} from '@ionic/angular';
import {ProductDlgComponent} from './product-dlg.component';
import {DeliveryProductsService} from '../../services/restinpeace/deliveryproducts.service';
import {EDeliveryProduct} from '../../entities/restinpeace/edeliveryproduct';
import {AppGlobals} from '../../codes/appglobals';

//endregion

@Component({
    selector: 'app-products',
    templateUrl: './products.page.html',
    styleUrls: ['./products.page.scss'],
    providers: [DeliveryProductsService]
})
export class ProductsPage implements OnInit {

    products: EDeliveryProduct[] = [];

    constructor(private deliveryProductsService: DeliveryProductsService, private router: Router, public loadingCtrl: LoadingController,
                public modalController: ModalController, private pickerCtrl: PickerController, private appGlobals:AppGlobals) {

    }

    async ngOnInit() {
        await this.getProducts();
    }

    async onProductClicked(eProduct: EDeliveryProduct) {
        if (eProduct.isCategory) {
            return;
        }
        const modal = await this.modalController.create({
            component: ProductDlgComponent,
            componentProps: { productID: eProduct.id }
        });
         return await modal.present();
        // const picker = await this.pickerCtrl.create({
        //     buttons: [
        //         {
        //             text: 'Cancelar',
        //         },
        //         {
        //             text: 'OK',
        //             handler: (data) => {
        //                 console.log(data);
        //                 this.appGlobals.addToBasket(eProduct,data.value);
        //             }
        //         }],
        //     columns: [
        //         {
        //             name: 'quantidade',
        //             options: [
        //                 {
        //                     text: '1',
        //                     value: 1
        //                 },
        //                 {
        //                     text: '2',
        //                     value: 2
        //                 },
        //                 {
        //                     text: '3',
        //                     value: 3
        //                 },
        //             ]
        //         },
        //     ]
        // });
        // await picker.present();
    }

    async doRefresh(event: any) {
        console.log('Begin async operation');
        await this.getProducts();
        event.target.complete();
    }

    async getProducts() {
        const loader = await this.loadingCtrl.create({message: 'Aguarde...', duration: 5000});
        loader.present();
        this.products = await this.deliveryProductsService.getAllWithDividers(Defines.companyID);
        loader.dismiss();
    }

}
