import {ToastController} from '@ionic/angular';

export class Helper {

    public static handleError(error: any): Promise<any> {
        console.error('(Helper)handleError. An error occurred:', error); // for demo purposes only
        if (error.name == "TimeoutError") {
            //console.log('aconteceu timeout');
            //return Observable.throw("Timeout has occurred");
            return Promise.reject('timeout');
        }
        if (error.status == 401) {//nao autorizado
            console.log('nao autorizado');
            //AppComponent.direcionarParaNaoAutorizado();
        }
        return Promise.reject(error.statusText);
    }

    //string only
    public static stringIsNullOrUndefinedOrEmpty(str: any): boolean {
        if (str == null) return true;
        if (str === null) return true;
        if (str === undefined) return true;
        if (str.length === 0) return true;
        return false;
    }

    public static isEmailValid(email:string):boolean{
        if(email==undefined || email.length<3)return false;
        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    //boolean only
    public static isTrue(prop:any){
        if(prop===null)return false;
        if(prop===undefined)return false;
        if(prop===0)return false;
        if(prop===1)return true;
        if(prop===true)return true;
        if(prop==="true")return true;
        return false;
    }

    //number only
    public static numberIsNullOrUndefinedOrZero(num:any):boolean{
        if(num===null)return true;
        if(num===undefined)return true;
        if(isNaN(num))return true;
        if(num===0)return true;
        if(num.length===0)return true;
        return false;
    }

    //others
    public static isNullOrUndefined(prop:any){
        if(prop===null)return true;
        if(prop===undefined)return true;
        return false;
    }

    public static getSortOrder(sortField:string|undefined, sortOrder:number|undefined):string{
        if(sortField==undefined || sortOrder==undefined)return '';
        if(sortOrder==1)return sortField+ ' asc';
        else return sortField+' desc'
    }

    public static converBase64StringToBLOB(b64Data:string, contentType:any, sliceSize?:number):Blob {
        contentType = contentType || '';
        sliceSize = sliceSize || 512;
        let byteCharacters = atob(b64Data);
        let byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            let slice = byteCharacters.slice(offset, offset + sliceSize);
            let byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            let byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        let blob = new Blob(byteArrays, {type: contentType});
        return blob;
    }

    public static displayError(growlMsgs:any, msg:string):void{
        growlMsgs.push({severity:'error', summary:'', detail:msg});
    }

    public static displaySuccess(growlMsgs:any, msg:string):void{
        growlMsgs.push({severity:'success', summary:'', detail:msg});
    }

    public static displayWarning(growlMsgs:any, msg:string):void{
        growlMsgs.push({severity:'warn', summary:'', detail:msg});
    }

    public static async displayToastWithTimeout(toastController:ToastController, msg:string, timeout=2000){
        const toast = await toastController.create({
            message: msg,
            duration: timeout
        });
        toast.present();
    }

    public static async displayToastWithButton(toastController:ToastController, msg:string, btnText:string){
        const toast = await toastController.create({
            message: msg,
            showCloseButton: true,
            position: 'top',
            closeButtonText: btnText
        });
        toast.present();
    }

}
