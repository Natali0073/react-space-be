import { Component } from 'react';
import React from 'react';
import * as PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

class InfoTextField extends Component {

  render() {
    return (
        <div>

          <FormControl>
            <InputLabel htmlFor="input-with-icon-adornment">{this.props.label}</InputLabel>
            <Input
                disabled
                id="input-with-icon-adornment"
                value={this.props.value}
                endAdornment={
                  <InputAdornment position="end">
                    {this.props.children}
                  </InputAdornment>
                }
            />
          </FormControl>
        </div>
    )
  }

}

InfoTextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InfoTextField;
