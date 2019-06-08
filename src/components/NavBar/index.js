import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link';
import {connect} from 'react-redux'

const NavBar = ({trips}) => {
    const classes = useStyles();
    const formatDate = (date) => {
        console.log(date.getDate().length)
        const strDate = 'd/m'
            .replace('m', (date.getMonth()+1>9) ? date.getMonth()+1 : '0' + (date.getMonth()+1))
            .replace('d', (date.getDate()>9) ? date.getDate() : '0' + date.getDate() );
        return strDate 
    }
    const Links = () => {
        return trips.map(link => (
            <Link 
                key={link.id} 
                component={RouterLink} 
                className={classes.link}
                to={{
                    pathname: `/${link.id}`,
                    state: {
                        id:link.id
                    }
                }}
            >
                {`${link.city} [${formatDate(link.dateStart)} - ${formatDate(link.dateEnd)}]`}
            </Link>))
    }
    return (
        <nav className={classes.nav}>
            <Fab
                variant="extended"
                size="medium"
                color="default"
                aria-label="Add"
                className={classes.margin}
            >
                New trip
            </Fab>
            <div   className={classes.linksContainer}>
                {Links()}
            </div>
        </nav>);
    
    
}

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    nav: {
      display: 'flex',
      alignItems: 'center'
    },
    linksContainer: {
        width: '80%',
        display: 'flex',
        justifyContent: 'flex-start'
    },
    link: {
        marginLeft: 50
    }
  }));
const mapStateToProps = (state, ownProps) => ({
    trips: state.trips
})

export default connect(mapStateToProps)(NavBar)