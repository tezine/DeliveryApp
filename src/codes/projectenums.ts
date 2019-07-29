import {EKeyValue} from '../entities/ekeyvalue';

export class ProjectEnums{
    public static getPaymentMethodList(): EKeyValue[] {
        return [
            new EKeyValue('Cartão de crédito' , 1),
            new EKeyValue('Débito', 2),
            new EKeyValue('Dinheiro', 3),
        ]
    }
}
