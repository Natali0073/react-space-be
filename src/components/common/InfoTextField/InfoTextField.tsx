import React, { Component } from 'react';
import './infro-text-field.scss';
import { FormControl, InputAdornment, TextField } from '@material-ui/core';

class InfoTextField extends Component<InfoTextFieldProps, {}> {

  render() {
    return (
        <div className="text-field-container">
          <FormControl className="form-control">
            <TextField
                label={this.props.label}
                id="input-with-icon-adornment"
                value={this.props.value ? this.props.value : ''}
                placeholder={this.props.placeholder}
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                      <InputAdornment position="end">
                        {this.props.children}
                      </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
            />
          </FormControl>
        </div>
    )
  }
}

export default InfoTextField;

export interface InfoTextFieldProps {
  label: string;
  value: string | null;
  placeholder?: string;
}

