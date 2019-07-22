import React from "react";
import { List, Datagrid, TextField, ArrayField, NumberField , UrlField, SingleFieldList, ChipField} from "react-admin";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";

export const InstanceIcon = DesktopMacIcon;

export const InstanceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="status" />
            <TextField source="next_status" />
            <UrlField source="url" />
            <ArrayField source="runs"><SingleFieldList><ChipField source="count" /></SingleFieldList></ArrayField>
            <TextField source="resource" />
            <NumberField source="count" />
            <NumberField source="remaining" />
        </Datagrid>
    </List>
);