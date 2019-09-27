// Angular
import { Component, OnInit, Input,Inject, ChangeDetectionStrategy, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Material
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// RxJS
import { Subscription, of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
// Lodash
import { each, find, some } from 'lodash';
// NGRX
import { Update } from '@ngrx/entity';
import { Store, select } from '@ngrx/store';
// State
import { AppState } from '../../../../../../core/reducers';
// CRUD
import { TypesUtilsService } from '../../../../../../core/_base/crud';
// Services and Models
import { CustomerModel, CustomerUpdated, CustomerOnServerCreated, selectLastCreatedCustomerId, selectCustomersPageLoading, selectCustomersActionLoading, selectAllClients,  } from '../../../../../../core/e-commerce';

import {FormControl} from '@angular/forms';

@Component({
	// tslint:disable-next-line:component-selector
	selector: 'kt-customers-edit-dialog',
	templateUrl: './customer-edit.dialog.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class CustomerEditDialogComponent implements OnInit, OnDestroy {
	// Public properties
	customer: CustomerModel;
	customerForm: FormGroup;
	hasFormErrors: boolean = false;
	viewLoading: boolean = true;
	loadingAfterSubmit: boolean = true;
	allTransporters$: Observable<CustomerModel[]>;
	clientTransporters: CustomerModel[] = [];
	// Private properties
	private componentSubscriptions: Subscription;

	transporters = new FormControl();
	transporterList: string[] = ['Trans1', 'Trans2', 'Trans3', 'Trans4', 'Trans5', 'Trans6'];

	/**
	 * Component constructor
	 *
	 * @param dialogRef: MatDialogRef<CustomerEditDialogComponent>
	 * @param data: any
	 * @param fb: FormBuilder
	 * @param store: Store<AppState>
	 * @param typesUtilsService: TypesUtilsService
	 */
	constructor(public dialogRef: MatDialogRef<CustomerEditDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private store: Store<AppState>,
		private typesUtilsService: TypesUtilsService) {
	}

	/**
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
	 */

	/**
	 * On init
	 */
	ngOnInit() {
		this.store.pipe(select(selectCustomersActionLoading)).subscribe(res => this.viewLoading = res);
		this.customer = this.data.customer;
		this.createForm();
		this.allTransporters$ = this.store.pipe(select(selectAllClients)) ;
		//console.log(this.allTransporters$);
		this.loadTransporters();
	}


	/**
	 * Load transporters
	 */
	loadTransporters() {
	//	console.log(this.allTransporters$);
		this.allTransporters$.subscribe(_allTransporters => {
			if (!_allTransporters) {
				return;
			}
			const mainTransporters = _allTransporters.filter(el => el.type === 'transporteur');
			mainTransporters.forEach((element: CustomerModel) => {
				const hasClientTransporter = this.customer.carriers.some(t => t === element.id);
				const rootTransporter = new CustomerModel();
				rootTransporter.clear();
				rootTransporter.isSelected = hasClientTransporter;
				rootTransporter.id = element.id;
				rootTransporter.name = element.name;
				this.clientTransporters.push(rootTransporter);
			//	console.log(rootTransporter);	
			});
			
		});
		
	}

	/** ACTIONS */
	/**
	 * Returns transporters ids
	 */
	prepareTransportersIds(): number[] {
		const result = [];
		each(this.clientTransporters, (_root: CustomerModel) => {
			if (_root.isSelected) {
				result.push(_root.id);
			}
		});
	//	console.log(result) ;
		return result;
	}

	/**
	 * On destroy
	 */
	ngOnDestroy() {
		if (this.componentSubscriptions) {
			this.componentSubscriptions.unsubscribe();
		}
	}

	createForm() {
		this.customerForm = this.fb.group({
			name: [this.customer.name, Validators.required],
			acronym: [ this.customer.acronym, Validators.compose([Validators.required]) ],
			activity: [this.customer.activity, Validators.compose([Validators.required])],
			phone: [this.customer.phone, Validators.required],
			address: [this.customer.address, Validators.required],
			type: [this.customer.type.toString(), Validators.compose([Validators.required])],
			equip_truck: [this.customer.equip_truck.toString(), [Validators.required, Validators.min(0), Validators.max(1)]],
		//	carriers: [null, Validators.required],
		//	users: [this.customer.users, Validators.compose([Validators.required])]
		});
	}

	/**
	 * Returns page title
	 */
	getTitle(): string {
		if (this.customer.id > 0) {
			return `Edit client '${this.customer.name}'`;
			// return `Edit customer '${this.customer.company} ${
			// 	this.customer.type
			// }'`;
		}

		return 'New client';
	}

	/**
	 * Check control is invalid
	 * @param controlName: string
	 */
	isControlInvalid(controlName: string): boolean {
		const control = this.customerForm.controls[controlName];
		const result = control.invalid && control.touched;
		return result;
	}

	/** ACTIONS */

	/**
	 * Returns prepared customer
	 */
	prepareCustomer(): CustomerModel {
		const controls = this.customerForm.controls;
		const _customer = new CustomerModel();
		_customer.id = this.customer.id;
		// const _date = new Date() ;
		// if (_date) {
		// 	_customer.dateOfBbirth = this.typesUtilsService.dateFormat(_date);
		// } else {
		// 	_customer.dateOfBbirth = '';
		// }
		_customer.name = controls['name'].value;
		_customer.acronym = controls['acronym'].value;
		_customer.activity = controls['activity'].value;
		_customer.phone = controls['phone'].value;
		_customer.address = controls['address'].value;
		_customer.type = controls['type'].value;
		_customer.status = this.customer.status;
		_customer.equip_truck = controls['equip_truck'].value;
		_customer.carriers = this.prepareTransportersIds();
		return _customer;
	}


	

	/**
	 * On Submit
	 */
	onSubmit() {
		this.hasFormErrors = false;
		this.loadingAfterSubmit = false;
		this.viewLoading = false;
		const controls = this.customerForm.controls;
		/** check form */
		if (this.customerForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);

			this.hasFormErrors = true;
			return;
		}

		const editedCustomer = this.prepareCustomer();
		if (editedCustomer.id > 0) {
			this.updateCustomer(editedCustomer);
		} else {
			this.createCustomer(editedCustomer);
		}
	}

	/**
	 * Update customer
	 *
	 * @param _customer: CustomerModel
	 */
	updateCustomer(_customer: CustomerModel) {
		this.loadingAfterSubmit = true;
		this.viewLoading = true;
		const updateCustomer: Update<CustomerModel> = {
			id: _customer.id,
			changes: _customer
		};
		this.store.dispatch(new CustomerUpdated({
			partialCustomer: updateCustomer,
			customer: _customer
		}));

		// Remove this line
		of(undefined).pipe(delay(1000)).subscribe(() => this.dialogRef.close({ _customer, isEdit: true }));
		// Uncomment this line
		// this.dialogRef.close({ _customer, isEdit: true }
	}

	/**
	 * Create customer
	 *
	 * @param _customer: CustomerModel
	 */
	createCustomer(_customer: CustomerModel) {
		this.loadingAfterSubmit = true;
		this.viewLoading = true;
		this.store.dispatch(new CustomerOnServerCreated({ customer: _customer }));
		this.componentSubscriptions = this.store.pipe(
			select(selectLastCreatedCustomerId),
		//	delay(1000), // Remove this line
		).subscribe(res => {
			if (!res) {
				return;
			}

			this.dialogRef.close({ _customer, isEdit: false });
		});
	}

	/**
	 * Check is selected changes
	 *
	 * @param $event: Event
	 * @param transporter: CustomerModel
	 */
	isSelectedChanged($event, transporter: CustomerModel) {
		//console.log(transporter) ;
		//console.log(transporter.isSelected) ;
		if (transporter.isSelected) {
			const _root = find(this.clientTransporters, (item: CustomerModel) => item.id === transporter.id);
			if (_root && !_root.isSelected) {
				_root.isSelected = true;
			}
			//console.log(_root) ;
		//	console.log(_root.isSelected) ;
			return;
		}

		if (!transporter.isSelected) {
			const _root = find(this.clientTransporters, (item: CustomerModel) => item.id === transporter.id);
			if (_root && _root.isSelected) {
					_root.isSelected = false;
			}
		//	console.log(_root.isSelected) ;
			return;
		}
		//console.log(transporter) ;
		//console.log(transporter.isSelected) ;
		
	}

	/** Alect Close event */
	onAlertClose($event) {
		this.hasFormErrors = false;
	}
}
