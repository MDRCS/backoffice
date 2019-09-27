export class PermissionsTable {
	public static permissions: any = [
        {
            id: 1,
            name: 'accessToECommerceModule',
            level: 1,
            title: 'MODULE SETTINGS'
        },
        {
            id: 2,
            name: 'accessToAuthModule',
            level: 1,
            title: 'USERS MANAGEMENT'
        },
        {
            id: 3,
            name: 'accessToMailModule',
            level: 1,
            title: 'MODULE CREATE'
        },
        {
            id: 4,
            name: 'accessToMailModule',
            level: 1,
            title: 'MODULE DASHBOARD'
        },
        {
            id: 5,
            name: 'accessToMailModule',
            level: 1,
            title: 'MODULE LISTING'
        },
        {
            id: 6,
            name: 'accessToMailModule',
            level: 1,
            title: 'MENUS'
        },
        {
            id: 7,
            name: 'accessToMailModule',
            level: 1,
            title: 'ORDERS PERMISSIONS'
        },
        {
            id: 8,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'ACCOUNT_INFO'
        },
        {
            id: 9,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'ACCOUNT_PREFERENCES'
        },
        {
            id: 10,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'ADDRESSES_LIST'
        },
        {
            id: 11,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'ADDRESSES_ADD'
        },
        {
            id: 12,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'ADDRESSES_EDIT'
        },
        {
            id: 13,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'ADDRESSES_DELETE'
        },
        {
            id: 14,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'ADDRESSES_ENABLE'
        },
        {
            id: 15,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'ADDRESSES_DISABLE'
        },
        {
            id: 16,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'DRIVERS_ADD'
        },
        {
            id: 17,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'DRIVERS_EDIT'
        },
        {
            id: 18,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'DRIVERS_DELETE'
        },
        {
            id: 19,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'DRIVERS_ENABLE'
        },
        {
            id: 20,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'DRIVERS_DISABLE'
        },
        {
            id: 21,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_TYPES_LIST'
        },
        {
            id: 22,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_TYPES_ADD'
        },
        {
            id: 23,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_TYPES_EDIT'
        },
        {
            id: 24,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_TYPES_DELETE'
        },
        {
            id: 25,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_TYPES_ENABLE'
        },
        {
            id: 26,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_TYPES_DISABLE'
        },
        {
            id: 27,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_LIST'
        },
        {
            id: 28,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_ADD'
        },
        {
            id: 29,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_EDIT'
        },
        {
            id: 30,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_DELETE'
        },
        {
            id: 31,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_ENABLE'
        },
        {
            id: 32,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'VEHICLES_DISABLE'
        },
        {
            id: 33,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'ZONES_LIST'
        },
        {
            id: 34,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'ZONES_ADD'
        },
        {
            id: 35,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'ZONES_EDIT'
        },
        {
            id: 36,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'ZONES_DELETE'
        },
        {
            id: 37,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'ZONES_ENABLE'
        },
        {
            id: 38,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'ZONES_DISABLE'
        },
        {
            id: 39,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_LIST'
        },
        {
            id: 40,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_ADD'
        },
        {
            id: 41,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_EDIT'
        },
        {
            id: 42,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_DELETE'
        },
        {
            id: 43,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_ENABLE'
        },
        {
            id: 44,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_DISABLE'
        },
        {
            id: 45,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_MATRIX_LIST'
        },
        {
            id: 46,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_MATRIX_ADD'
        },
        {
            id: 47,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_MATRIX_EDIT'
        },
        {
            id: 48,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_MATRIX_DELETE'
        },
        {
            id: 49,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_DIMURRAGE_LIST'
        },
        {
            id: 50,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_DIMURRAGE_ADD'
        },
        {
            id: 51,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_DIMURRAGE_EDIT'
        },
        {
            id: 52,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'CARRIERS_DIMURRAGE_DELETE'
        },
        {
            id: 53,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_LIST'
        },
        {
            id: 54,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_ADD'
        },
        {
            id: 55,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_EDIT'
        },
        {
            id: 56,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_DELETE'
        },
        {
            id: 57,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_ENABLE'
        },
        {
            id: 58,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_DISABLE'
        },
        {
            id: 59,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_MATRIX_LIST'
        },
        {
            id: 60,
            name: 'canReadECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_MATRIX_ADD'
        },
        {
            id: 61,
            name: 'canEditECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_MATRIX_EDIT'
        },
        {
            id: 62,
            name: 'canDeleteECommerceData',
            level: 2,
            parentId: 1,
            title: 'SHIPPERS_MATRIX_DELETE'
        },
        {
            id: 63,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS ADMIN ADD'
        },
        {
            id: 64,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS ADMIN EDIT'
        },
        {
            id: 65,
            name: 'canDeleteAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS ADMIN DELETE'
        },
        {
            id: 66,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS ADMIN ENABLE'
        },
        {
            id: 67,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS ADMIN DISABLE'
        },
        {
            id: 68,
            name: 'canReadAuthData',
            level: 2,
            parentId: 1,
            title: 'USERS ADMIN PERMISSIONS'
        },
        {
            id: 69,
            name: 'canEditAuthData',
            level: 2,
            parentId: 1,
            title: 'USERS REGIONAL MANAGER ADD'
        },
        {
            id: 70,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS REGIONAL MANAGER EDIT'
        },
        {
            id: 71,
            name: 'canDeleteAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS REGIONAL MANAGER DELETE'
        },
        {
            id: 72,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS REGIONAL MANAGER ENABLE'
        },
        {
            id: 73,
            name: 'canReadAuthData',
            level: 2,
            parentId: 1,
            title: 'USERS REGIONAL MANAGER PERMISSIONS'
        },
        {
            id: 74,
            name: 'canEditAuthData',
            level: 2,
            parentId: 1,
            title: 'USERS AGENT ADD'
        },
        {
            id: 75,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS AGENT EDIT'
        },
        {
            id: 76,
            name: 'canDeleteAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS AGENT DELETE'
        },
        {
            id: 77,
            name: 'canEditAuthData',
            level: 2,
            parentId: 2,
            title: 'USERS AGENT ENABLE'
        },
        {
            id: 78,
            name: 'canEditAuthData',
            level: 2,
            parentId: 1,
            title: 'USERS AGENT DISABLE'
        },
        {
            id: 79,
            name: 'canReadAuthData',
            level: 2,
            parentId: 1,
            title: 'USERS AGENT PERMISSIONS'
        },
        {
            id: 80,
            name: 'canEditMailData',
            level: 2,
            parentId: 3,
            title: 'CREATE FORM'
        },
        {
            id: 81,
            name: 'canEditMailData',
            level: 2,
            parentId: 3,
            title: 'CREATE IMPORT'
        },
        {
            id: 82,
            name: 'canEditMailData',
            level: 2,
            parentId: 3,
            title: 'CREATE PLANING'
        },
        {
            id: 83,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD FILTER'
        },
        {
            id: 84,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD STATS'
        },
        {
            id: 85,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD GROUPED ACTIONS'
        },
        {
            id: 86,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD GROUPED ACTIONS ASSIGN'
        },
        {
            id: 87,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD GROUPED ACTIONS DIVEST'
        },
        {
            id: 88,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD GROUPED ACTIONS ROUTE'
        },
        {
            id: 89,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD GROUPED ACTIONS ROUTE CANCEL'
        },
        {
            id: 90,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD GROUPED ACTIONS DELETE'
        },
        {
            id: 91,
            name: 'canEditMailData',
            level: 2,
            parentId: 4,
            title: 'DASHBOARD GROUPED ACTIONS OPTIMIZE'
        },
        {
            id: 92,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'LISTING WAITING'
        },
        {
            id: 93,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'LISTING WAITING'
        },
        {
            id: 94,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'LISTING ONGOING'
        },
        {
            id: 95,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'LISTING_HISTORY'
        },
        {
            id: 96,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'LISTING FILTER'
        },
        {
            id: 97,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'MODULE REPORTING'
        },
        {
            id: 98,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'REPORTING VIEW'
        },
        {
            id: 98,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'REPORTING EXPORT'
        },
        {
            id: 99,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'MODULE GLOBAL MAP'
        },
        {
            id: 100,
            name: 'canReadMailData',
            level: 2,
            parentId: 6,
            title: 'MENU ALERTS'
        },
        {
            id: 101,
            name: 'canReadMailData',
            level: 2,
            parentId: 6,
            title: 'MENU MESSAGES'
        },
        {
            id: 102,
            name: 'canReadMailData',
            level: 2,
            parentId: 6,
            title: 'MENU NOTIFICATION'
        },
        {
            id: 103,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'LISTING HISTORY'
        },
        {
            id: 104,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'LISTING FILTER'
        },
        {
            id: 105,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'MODULE REPORTING'
        },
        {
            id: 106,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'REPORTING VIEW'
        },
        {
            id: 107,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'REPORTING EXPORT'
        },
        {
            id: 108,
            name: 'canEditMailData',
            level: 2,
            parentId: 5,
            title: 'MODULE GLOBAL MAP'
        },
        {
            id: 109,
            name: 'canReadMailData',
            level: 2,
            parentId: 6,
            title: 'MENU ALERTS'
        },
        {
            id: 110,
            name: 'canReadMailData',
            level: 2,
            parentId: 6,
            title: 'MENU MESSAGES'
        },
        {
            id: 111,
            name: 'canReadMailData',
            level: 2,
            parentId: 6,
            title: 'MENU NOTIFICATION'
        },
        {
            id: 112,
            name: 'canEditMailData',
            level: 2,
            parentId: 7,
            title: 'ASSIGN OWNMEANS'
        },
        {
            id: 113,
            name: 'canEditMailData',
            level: 2,
            parentId: 7,
            title: 'ASSIGN CHARTERING'
        },
        {
            id: 114,
            name: 'canEditMailData',
            level: 2,
            parentId: 7,
            title: 'ASSIGN QRKEYS'
        },
        {
            id: 115,
            name: 'canEditMailData',
            level: 2,
            parentId: 7,
            title: 'REPORTING VIEW'
        },
        {
            id: 116,
            name: 'canEditMailData',
            level: 2,
            parentId: 7,
            title: 'REPORTING EXPORT'
        },
        {
            id: 117,
            name: 'canEditMailData',
            level: 2,
            parentId: 7,
            title: 'ASSIGN EXWORKS'
        },
        {
            id: 118,
            name: 'canReadMailData',
            level: 2,
            parentId: 7,
            title: 'ORDER EDIT'
        },
        {
            id: 119,
            name: 'canReadMailData',
            level: 2,
            parentId: 7,
            title: 'ORDER DUPLICATE'
        },
        {
            id: 120,
            name: 'canDeleteAuthData',
            level: 2,
            parentId: 7,
            title: 'ORDER DELETE'
        },
    ];
}
