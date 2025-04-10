export class Owner {
    id?: number; // Optional when creating a new owner, required when fetching existing owner
    firstName: string = '';
    lastName: string = '';
    address: string = '';
    city: string = '';
    telephone: string = '';

    constructor(id?: number, firstName: string = '', lastName: string = '', address: string = '', city: string = '', telephone: string = '') {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.telephone = telephone;
    }
}
