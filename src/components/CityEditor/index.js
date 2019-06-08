import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const CityEditor = ({city, editorHandler, changeHandler}) => {
    const classes = useStyles();
    const [elState, setState] = useState({
        shownInput: false
    });
    
    const editHandler = () => {
        setState({shownInput: !elState.shownInput })
        editorHandler()
    }
    return (
        <div className={classes.container}>
            {
                !elState.shownInput && (<span className={classes.title} onClick={ () => {setState({shownInput: !elState.shownInput })}}>{city}</span>)
            }
            {
                elState.shownInput && 
                (<>
                    <input className={classes.input} type="text" value={city} onChange={changeHandler}/>
                    <Button variant="outlined" color="primary" className={classes.button} onClick={editHandler}>
                       edit
                    </Button>
                    <Button variant="outlined" className={classes.button} onClick={()=> { setState({shownInput: false})}}>
                    close
                    </Button>
                </>
                )
            }
        </div> 
    )
}
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    container: {
        height: 34,
        width: '100%',
        display: 'flex',
        alignItems: 'center' 
    },
    title: {
        fontSize: '32px'
    },
    input: {
        fontSize: "32px",
        height: 34,
        width: 200
    }
  }));
export default CityEditor