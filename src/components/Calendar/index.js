import React, {useState} from 'react'
import Clndr from 'react-calendar';
import { makeStyles } from '@material-ui/core/styles';
const Calendar = ({date, dateHandler}) => {
    const classes = useStyles();
    const [shownCalendar, toggleCalendar] = useState(false);
    
    const formatDate = () => {
        const strDate = 'm/d/Y'
            .replace('Y', date.getFullYear())
            .replace('m', date.getMonth()+1)
            .replace('d', date.getDate());
        return strDate 
    }
    const calendarHandler = (date) => {
        toggleCalendar(!shownCalendar)
        dateHandler(date)
    }
    if(date) {
        return  (
            <div className={classes.popupContainer}>
                <span onClick={() => { toggleCalendar(!shownCalendar)}}>{formatDate()}</span>
                {
                    shownCalendar && 
                    (
                    <div className={classes.popup}>
                        <Clndr onChange={calendarHandler} value={date} />
                    </div>  
                    )
                }
                
            </div>
        )
    } else {
        return (<div>No Date</div>)
    }
    
}
const useStyles = makeStyles(theme => ({
    popupContainer: {
        position: 'relative'
    },
    popup: {
        position: 'absolute',
        top: '110%',
        left: 0
    }
  }));
export default Calendar