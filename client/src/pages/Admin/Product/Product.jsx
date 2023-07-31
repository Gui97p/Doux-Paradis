import React from 'react';
import { Datagrid, List, TextField, Create, SimpleForm, TextInput, Edit } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="price" />
            <TextField source="image" />
        </Datagrid>
    </List>
);

export const ProductCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="image" />
        </SimpleForm>
    </Create>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="price" />
            <TextInput source="image" />
        </SimpleForm>
    </Edit>
);
