class Customer {
    
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast; 
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustomer = new Customer("James", "Finn");

console.log(`Customer name is ${myCustomer.firstName} ${myCustomer.lastName}`);
