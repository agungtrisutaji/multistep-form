import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import {
  FormControl,
  Input,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    console.log(this.props.values);
    // PROCESS FORM //
    fetch(
      'https://script.google.com/macros/s/AKfycbxqSirDlqJTwchB8Zeo7rhr_Wn2i8JNjBhNEOmWfocAcoM4Yme3gNCUeh85X6mr8pw/exec',
      {
        method: 'POST',
        mode: 'no-cors',

        body: new FormData(document.FormControl),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        try {
          console.log(JSON.parse(data));
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { FirstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <>
        <Dialog open fullWidth maxWidth='sm'>
          <AppBar title='Confirm User Data' />
          <FormControl>
            <Input
              primary='First Name'
              readOnly
              value={FirstName}
              secondary={FirstName}
            />
            <Input
              primary='Last Name'
              readOnly
              value={lastName}
              secondary={lastName}
            />
            <Input primary='Email' readOnly value={email} secondary={email} />
            <Input
              primary='Occupation'
              readOnly
              value={occupation}
              secondary={occupation}
            />
            <Input primary='City' readOnly value={city} secondary={city} />
            <Input primary='Bio' readOnly value={bio} secondary={bio} />
          </FormControl>
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
