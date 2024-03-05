import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
          <AppBar title='Enter User Details' />
          <TextField
            placeholder='Masukan nama Anda'
            label='Nama'
            onChange={handleChange('nama')}
            defaultValue={values.nama}
            margin='normal'
            fullWidth
            name='nama'
          />
          <br />
          <TextField
            placeholder='Divisi'
            label='Divisi'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
            margin='normal'
            fullWidth
          />
          <br />
          <TextField
            placeholder='Enter Your Email'
            label='Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
            margin='normal'
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
