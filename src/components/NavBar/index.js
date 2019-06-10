import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const NavBar = ({trips, changeHandler}) => {
    const [value, setValue] = React.useState(null);

    const formatDate = (date) => {
        const strDate = 'd/m'
            .replace('m', (date.getMonth()+1>9) ? date.getMonth()+1 : '0' + (date.getMonth()+1))
            .replace('d', (date.getDate()>9) ? date.getDate() : '0' + date.getDate() );
        return strDate 
    }
    const Links = () => {
        return trips.map(link => (
            <Tab 
                key={link.id}
                value={link.id}
                label= {`${link.city} [${formatDate(link.dateStart)} - ${formatDate(link.dateEnd)}]`} 
            />
            ))
    }
    const handleChange = (_, id) => {
        setValue(id);
        
        changeHandler(id)
      }
    return (
        <AppBar>
            <Tabs variant="fullWidth" value={value} onChange={handleChange}>
                {Links()}
            </Tabs>
        </AppBar>);  
}

export default NavBar