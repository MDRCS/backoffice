// Context
export { ECommerceDataContext } from './_server/_e-commerce.data-context';

// Models and Consts
export { CustomerModel } from './_models/customer.model';


// DataSources
export { CustomersDataSource } from './_data-sources/customers.datasource';


// Actions
// Customer Actions =>
export {
    CustomerActionTypes,
    CustomerActions,
    CustomerOnServerCreated,
    CustomerCreated,
    CustomerUpdated,
    CustomersStatusUpdated,
    OneCustomerDeleted,
    ManyCustomersDeleted,
    CustomersPageRequested,
    CustomersPageLoaded,
    CustomersPageCancelled,
    CustomersPageToggleLoading
} from './_actions/customer.actions';




// Effects
export { CustomerEffects } from './_effects/customer.effects';


// Reducers
export { customersReducer } from './_reducers/customer.reducers';


// Selectors
// Customer selectors =>
export {
    selectCustomerById,
    selectCustomersInStore,
    selectCustomersPageLoading,
    selectLastCreatedCustomerId,
    selectCustomersActionLoading,
    selectCustomersShowInitWaitingMessage,
    selectAllClients,
} from './_selectors/customer.selectors';




// Services
export { CustomersService } from './_services/';

