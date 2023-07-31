import React from 'react';
import { 
    Datagrid,
    List, 
    TextField, NumberField, BooleanField,
    TextInput, NumberInput, BooleanInput, 
    Create, 
    SimpleForm, 
    Edit 
} from 'react-admin';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <NumberField source="phone_number" />
            <BooleanField source="isAdmin" />
        </Datagrid>
    </List>
);

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <NumberInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="email" />
            <NumberInput source="phone_number" />
            <BooleanInput source="isAdmin" />
        </SimpleForm>
    </Create>
);

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberInput source="id" disable />
            <TextInput source="name" />
            <TextInput source="email" />
            <NumberInput source="phone_number" />
            <BooleanInput source="isAdmin" />
        </SimpleForm>
    </Edit>
);
