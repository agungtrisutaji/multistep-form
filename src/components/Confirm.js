import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {
  Input,
} from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    console.log(this.props.values);
    fetch(
      'https://script.google.com/macros/s/AKfycbyigyNfsRhdQ2TmEFSC8xmzF74Ql9bk9XCM9ps9c_uuAyF8XRhs63il3g-QVcSCmhEY/exec',
      {
        method: 'POST',
        body: new FormData(document.forms['result']),
      }
    )
      .then((response) => {
        console.log('Success!', response);
      })
      .catch((error) => {
        console.error('Error!', error);
      });
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { nama, divisi, email, occupation, city, bio },
    } = this.props;
    return (
      <>
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar title='Confirm User Data' />
          <form name='result'>
            <Input
              primary='Nama'
              readOnly
              value={nama}
              secondary={nama}
              type='text'
              name='nama'
              id='nama'
            />
            {/* <Input
              primary='Last Name'
              readOnly
              value={divisi}
              secondary={divisi}
            /> */}
            <Input
              type='email'
              name='email'
              primary='Email'
              readOnly
              value={email}
              secondary={email}
            />
            {/* <Input
              primary='Occupation'
              readOnly
              value={occupation}
              secondary={occupation}
            />
            <Input primary='City' readOnly value={city} secondary={city} />
            <Input primary='Bio' readOnly value={bio} secondary={bio} /> */}
          </form>
          <br />

          <Button color='secondary' variant='contained' onClick={this.back}>
            Back
          </Button>

          <Button color='primary' variant='contained' onClick={this.continue}>
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    );
  }
}

export default Confirm;
