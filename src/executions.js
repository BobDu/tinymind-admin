import React from "react";
import { List, Datagrid, TextField, NumberField, BooleanField } from "react-admin";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

export const ExecutionIcon = FlightTakeoffIcon;

export const ExecutionList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            {/*<ReferenceField source="user_id" reference="users"><TextField source="id" /></ReferenceField>*/}
            {/*<ReferenceField source="model_id" reference="models"><TextField source="id" /></ReferenceField>*/}
            <TextField source="model_name" />
            {/*<ReferenceField source="instance_id" reference="instances"><TextField source="id" /></ReferenceField>*/}
            <NumberField source="seq" />
            <NumberField source="subseq" />
            <TextField source="batch_size" />
            <TextField source="prev_token" />
            <TextField source="prev_mode" />
            <TextField source="status" />
            <TextField source="token" />
            <TextField source="batch_token" />
            <TextField source="summary" />
            <TextField source="env.deps" />
            <TextField source="code.mode" />
            <NumberField source="code_version" />
            <BooleanField source="code_changed" />
            <TextField source="resource" />
            <NumberField source="resource_count" />
            {/*<ArrayField source="params"><SingleFieldList><ChipField source="end" /></SingleFieldList></ArrayField>*/}
            <TextField source="data" />
            {/*<ArrayField source="events"><SingleFieldList><ChipField source="ts" /></SingleFieldList></ArrayField>*/}
            <TextField source="charts" />
            <TextField source="results" />
            <TextField source="stdout" />
            <TextField source="stderr" />
            {/*<NumberField source="created_at" />*/}
            {/*<NumberField source="completed_at" />*/}
            <TextField source="username" />
            <TextField source="instancename" />
        </Datagrid>
    </List>
);