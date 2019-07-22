import React from "react";
import { List, Datagrid, TextField, BooleanField, NumberField, ArrayField, SingleFieldList, ChipField } from "react-admin";
import GroupIcon from "@material-ui/icons/Group";

export const UserIcon = GroupIcon;

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="name" />
            <TextField source="locale" />
            <TextField source="avatar_url" />
            <BooleanField source="email_confirmed_at" />
            <NumberField source="created_at" />
            <ArrayField source="roles"><SingleFieldList><ChipField source="id" /></SingleFieldList></ArrayField>
        </Datagrid>
    </List>
);