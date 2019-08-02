import React from 'react';
import { RichTextField } from 'react-admin';

const JsonField = ({ source, record, ...props }) => {
  if (!record.isFormat) {
    const jsonStr = JSON.stringify(record[source], null, '&nbsp&nbsp');
    record[source] = jsonStr;
    record.isFormat = true;
  }
  return <RichTextField source={source} record={record} {...props} style={{ whiteSpace: 'pre-line' }} />;
};

JsonField.propTypes = RichTextField.propTypes;
JsonField.defaultProps = RichTextField.defaultProps;

export default JsonField;
