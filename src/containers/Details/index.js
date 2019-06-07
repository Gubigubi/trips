import React, {Component} from 'react'
import CityEditor from '../../components/CityEditor';
import Calendar from '../../components/Calendar';
import history from '../../history'
import {connect} from 'react-redux'
import {saveTitleTrip, saveDateTrip, } from '../../ac'
import withStyles from '@material-ui/core/styles/withStyles';
class Details extends Component {
    state={
        id: null,
        city: null,
        date: null
    }
    
    componentDidMount() {
        this.setTripById(this.props.location.state.id)
    }
    componentDidUpdate(prevProps, prevState) {
        if(
            this.props.location.state.id !== prevProps.location.state.id ||
            this.props.trips !==  prevProps.trips
            )
        this.setTripById(this.props.location.state.id)
    }
    
    render() {

        const {id, city, dateStart, dateEnd} = this.state;
        return (
            <div className={this.props.classes.pageContainer}>
                <div className={this.props.classes.halfContainer}>
                    <CityEditor 
                        city={city} 
                        editorHandler={this.saveTitle.bind(this)} 
                        changeHandler={this.changeTitle}
                    />
                </div>
                <div className={this.props.classes.calendarContainer}>
                    <Calendar date={dateStart} dateHandler={this.saveDate(id,'start')}/>
                    <Calendar date={dateEnd} dateHandler={this.saveDate(id,'end')}/>
                </div>
               
            </div>
        )
    }
    saveTitle () {
        const {city, id} = this.state
        this.props.saveTitleTrip(city, id)
    }
    changeTitle = (event) => {
        console.log(event.target.value)
        this.setState({city: event.target.value})
    }
    saveDate (id, type){
        return (date) => {
            this.props.saveDateTrip(id, type, date)
        }  
    }
    setTripById = (id) => {
        const {trips, location} = this.props;
        const trip = trips.find(item => (item.id === location.state.id ))
        if(trip){
            this.setState({...trip})
        }
         else {
             history.push('/')
         }  
        
    }
    
}
const mapStateToProps = (state, ownProps) => ({
    trips: state.trips
})
const mapDispatchToProps = {
    saveTitleTrip:  saveTitleTrip,
    saveDateTrip:  saveDateTrip
}

const styles = theme => ({
    pageContainer: {
        display: 'flex'
    },
    halfContainer: {
        width: '30%',
        margin: '40px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    calendarContainer: {
        width: '20%',
        margin: '40px',
        display: 'flex',
        justifyContent: 'space-around'
    },
    name: {
        fontSize: '40px'
    },
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Details))