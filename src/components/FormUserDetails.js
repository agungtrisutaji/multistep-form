import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Box, MenuItem, Typography } from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    console.log(this.props.values);
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <Dialog open fullWidth maxWidth='sm'>
          <TextField
            isRequired={true}
            placeholder='Masukan nama Anda'
            label='Nama'
            onChange={handleChange('nama')}
            defaultValue={values.nama}
            margin='normal'
            fullWidth
            helperText={'Silahkan isi nama Anda'}
            type='text'
            name='nama'
          />
          <br />
          <TextField
            label='Pilih Divisi'
            select
            SelectProps={{
              multiple: false,
            }}
            size='small'
            color='secondary'
            helperText='Pilih Divisi Anda'
            value={values.divisi}
            onChange={handleChange('divisi')}>
            <MenuItem value='S'>SALES</MenuItem>
            <MenuItem value='SM'>SERVICE DELIVERY MANAGER</MenuItem>
            <MenuItem value='TS'>TECHNICAL SUPPORT</MenuItem>
            <MenuItem value='F'>FINANCE</MenuItem>
            <MenuItem value='W'>WAREHOUSE</MenuItem>
            <MenuItem value='HR'>HUMAN RESOURCE</MenuItem>
          </TextField>
          <br />
          <TextField
            placeholder='Enter Your Email'
            label='Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
            margin='normal'
            type='email'
            fullWidth
          />
          <br />
          <Button color='primary' variant='contained' onClick={this.continue}>
            Continue
          </Button>
        </Dialog>
      </>
    );
  }
}

export default FormUserDetails;
