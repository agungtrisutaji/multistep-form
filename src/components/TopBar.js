import { AppBar, Box, Typography } from '@material-ui/core';
import { Children, Component } from 'react';

export class TopBar extends Component {
  render() {
    return (
      <>
        <AppBar title='Masukan Detail Responden'>
          <Box p={2} textAlign={'center'}>
            <Typography variant='h6'>Masukan Detail Responden</Typography>
          </Box>
        </AppBar>
      </>
    );
  }
}
