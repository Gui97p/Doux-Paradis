import React from 'react';
import { Admin, Resource  } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { UserList, UserCreate, UserEdit } from './User/User.jsx';
import { ProductList, ProductCreate, ProductEdit } from './Product/Product.jsx';

const dataProvider = jsonServerProvider('https://doux-paradis-api.onrender.com');

function AdminPage() {
    return (<Admin basename="/admin" dataProvider={dataProvider}>
        <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit}/>
        <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit}/>
    </Admin>);
}

export default AdminPage;
