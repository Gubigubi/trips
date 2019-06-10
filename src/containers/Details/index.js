import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
class Details extends Component {
  render() {
    const pickedTrip = this.props.trips.find(
      (el) => el.id === this.props.pickedId,
    );
    if (pickedTrip) {
      const { city } = pickedTrip;
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
  resize: {
    fontSize: 40,
  },
});

export default withStyles(styles)(Details);
