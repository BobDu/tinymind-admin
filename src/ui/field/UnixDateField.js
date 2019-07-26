import React from 'react';
import { TextField } from 'react-admin';
import moment from 'moment';

const UnixDateField = ({ source, record, ...props }) => {
  const timestamp = record[source];
  if (Number.isInteger(timestamp) && timestamp > 1000000000 && timestamp < 9999999999) {
    record[source] = moment.unix(timestamp).format('YYYY-MM-DD HH:mm');
  }
  return <TextField source={source} record={record} {...props} />;
};

UnixDateField.propTypes = TextField.propTypes;
UnixDateField.defaultProps = TextField.defaultProps;

export default UnixDateField;
