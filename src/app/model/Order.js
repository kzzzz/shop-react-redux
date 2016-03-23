class Order {
    constructor() {
        this._company = '';
    }

    get company(){
        return this._company;
    }

    set company(newCompany){
        if(newCompany){
            this._company = newCompany;
        }
    }

    get currentStep(){

    }
}

export default Order;