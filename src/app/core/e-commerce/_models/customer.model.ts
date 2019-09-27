import { BaseModel } from '../../_base/crud';

export class CustomerModel  extends BaseModel {

	id: number;
	name: string;
	acronym: string ;
	activity: string ;
	phone: string;
	address: string;
	isSelected:  boolean;
	type: string; // 0 = Charger Lite | 1 = Charger | 2 = Transporter 
	status: string; // 0 = Active | 1 = Suspended | Pending = 2
	equip_truck: number ; 
	carriers: number[] ;

	// id: number ; 
	// 	name: string ;
	// 	acronym: string ;
	// 	activity: string ;
	// 	tel: string ;
	// 	address: string ;
	// 	type: string ;
	// 	status: string ;   // 0 = actif | 1 = suspendu | en attente = 2
	// 	equip_truck: boolean ;  // Tester si le client a des moyens propre
		
	// 	carriers: number[] ; 

	clear() {
		this.name = '';
		this.acronym = '' ;
		this.activity = '' ;
		this.phone = '';
		this.address = '';
		this.isSelected = false;
		this.type = 'chargeur' ;
		this.status = 'actif';
		this.equip_truck = 1 ; 
		this.carriers = [] ;	
	}

	/* 
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	userName: string;
	gender: string;
	status: number; // 0 = Active | 1 = Suspended | Pending = 2
	dateOfBbirth: string;
	dob: Date;
	ipAddress: string;
	type: number; // 0 = Business | 1 = Individual

	clear() {
		this.dob = new Date();
		this.firstName = '';
		this.lastName = '';
		this.email = '';
		this.userName = '';
		this.gender = 'Female';
		this.ipAddress = '';
		this.type = 1;
		this.status = 1;
	}
	
	*/
}
