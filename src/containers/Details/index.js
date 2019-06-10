import React, { Component } from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
class Details extends Component {
  render() {
    const pickedTrip = this.props.trips.find(
      (el) => el.id === this.props.pickedId,
    );
    if (pickedTrip) {
      const { city, dateStart, dateEnd } = pickedTrip;
      const { classes } = this.props;
      return (
        <div className={classes.pageContainer}>
          <div className={classes.halfContainer}>
            <TextField
              value={city}
              onChange={this.changeTitle}
              margin="normal"
              InputProps={{
                classes: {
                  input: classes.resize,
                },
              }}
            />
          </div>
          <div className={classes.calendarContainer}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="mui-pickers-date"
                label="Date picker"
                value={dateStart}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="mui-pickers-date"
                label="Date picker"
                value={dateEnd}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
      );
    } else {
      return <></>;
    }
  }

  changeTitle = (event) => {
    console.log(event.target.value);
    this.props.changeHandler(this.props.pickedId, 'city', event.target.value);
  };
}

const styles = (theme) => ({
  pageContainer: {
    marginTop: '50px',
    display: 'flex',
  },
  halfContainer: {
    width: '30%',
    margin: '40px',
    display: 'flex',
    justifyContent: 'space-around',
  },
  calendarContainer: {
    width: '30%',
    margin: '40px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  resize: {
    fontSize: 40,
  },
});

export default withStyles(styles)(Details);
