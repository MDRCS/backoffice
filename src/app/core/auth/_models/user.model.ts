import { BaseModel } from '../../_base/crud';
import { Address } from './address.model';

export class User extends BaseModel {
    id: number;
    login: string;
    password: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    roles: number[];
    pic: string;
    fullname: string;
    occupation: string;
    client: number[];
	companyName: string;
	mobile: string;
    address: Address;

    // id: number;
    // login: string;
    // password: string;
    // email: string;
    // accessToken: string;
    // refreshToken: string;
    // roles: number[];
    // client: number[] ;
    // pic: string;
    // fullname: string;
    // occupation: string;
	// mobile: string;
    // address: Address;

    clear(): void {
        this.id = undefined;
        this.login = '';
        this.password = '';
        this.email = '';
        this.roles = [];
        this.fullname = '';
        this.accessToken = 'access-token-' + Math.random();
        this.refreshToken = 'access-token-' + Math.random();
        this.pic = './assets/media/users/default.jpg';
        this.occupation = '';
        this.client = [] ;
        this.companyName = '';
        this.mobile = '';
        this.address = new Address();
        this.address.clear();
    }
}
