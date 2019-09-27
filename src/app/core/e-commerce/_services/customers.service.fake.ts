// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// RxJS
import { Observable, forkJoin, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';
// Lodash
import { each } from 'lodash';
// CRUD
import { HttpUtilsService, QueryParamsModel, QueryResultsModel } from '../../_base/crud';
// Models
import { CustomerModel } from '../_models/customer.model';

//const API_CUSTOMERS_URL = 'api/customers';
//const API_CUSTOMERS_URL_GET = 'https://dev.freterium.com/api/web/beta/admin/clients/get' ;
//const API_CUSTOMERS_URL_POST = 'https://dev.freterium.com/api/web/beta/admin/client/set' ;
const API_CUSTOMERS_URL_GET = 'api/customers' ;
const API_CUSTOMERS_URL_POST = 'api/customers' ;

// Fake REST API (Mock)
// This code emulates server calls
@Injectable()
export class CustomersService {
	constructor(private http: HttpClient, private httpUtils: HttpUtilsService) { }

	// CREATE =>  POST: add a new customer to the server
	createCustomer(customer: CustomerModel): Observable<CustomerModel> {
		// Note: Add headers if needed (tokens/bearer)
		const httpHeaders = this.httpUtils.getHTTPHeaders();
		return this.http.post<CustomerModel>(API_CUSTOMERS_URL_POST, customer, { headers: httpHeaders});
	}

	// // CREATE =>  POST: add a new customer to the server
	// createCustomer(customer: CustomerModel) {
	// 	// Note: Add headers if needed (tokens/bearer)
	// //	const payload = { };
	// 	//const body = JSON.stringify(payload);
	// 	//const httpHeaders = this.httpUtils.getHTTPHeaders();
	// 	const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
  	// 	const options = { headers: headers };	
	// 	//return this.http.post<CustomerModel>(API_CUSTOMERS_URL_POST, customer, { headers: httpHeaders});
	// 	return this.http.post(API_CUSTOMERS_URL_POST +
	// 		'name=' + customer.name
	// 		+'&acronym=' + customer.acronym
	// 		+'&activity=' + customer.activity
	// 		+'&phone=' + customer.phone
	// 		+'&address=' + customer.address
	// 		+'&type=' + customer.type
	// 		+'&status='+customer.status
	// 		+'&equip_truck='+customer.equip_truck
	// 		+'&carriers='+customer.carriers
	// 		, customer ,options);
	// }

	// READ
	getAllCustomers(): Observable<CustomerModel[]> {
		return this.http.get<CustomerModel[]>(API_CUSTOMERS_URL_GET);
	}

	getCustomerById(customerId: number): Observable<CustomerModel> {
		return this.http.get<CustomerModel>(API_CUSTOMERS_URL_GET + `/${customerId}`);
	}

	// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
	// items => filtered/sorted result
	findCustomers(queryParams: QueryParamsModel): Observable<QueryResultsModel> {
		// This code imitates server calls
		const url = API_CUSTOMERS_URL_GET;
		return this.http.get<CustomerModel[]>(API_CUSTOMERS_URL_GET).pipe(
			mergeMap(res => {
				const result = this.httpUtils.baseFilter(res, queryParams, ['status', 'type']);
				return of(result);
			})
		);
	}


	// UPDATE => PUT: update the customer on the server
	updateCustomer(customer: CustomerModel): Observable<any> {
		const httpHeader = this.httpUtils.getHTTPHeaders();
		return this.http.put(API_CUSTOMERS_URL_POST, customer, { headers: httpHeader });
	}

	// UPDATE Status
	updateStatusForCustomer(customers: CustomerModel[], status: string): Observable<any> {
		const tasks$ = [];
		each(customers, element => {
			const _customer = Object.assign({}, element);
			_customer.status = status;
			tasks$.push(this.updateCustomer(_customer));
		});
		return forkJoin(tasks$);
	}

	// DELETE => delete the customer from the server
	deleteCustomer(customerId: number): Observable<any> {
		const url = `${API_CUSTOMERS_URL_POST}/${customerId}`;
		return this.http.delete<CustomerModel>(url);
	}

	deleteCustomers(ids: number[] = []): Observable<any> {
		const tasks$ = [];
		const length = ids.length;
		// tslint:disable-next-line:prefer-const
		for (let i = 0; i < length; i++) {
			tasks$.push(this.deleteCustomer(ids[i]));
		}
		return forkJoin(tasks$);
	}
}
