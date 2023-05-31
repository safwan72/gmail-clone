import React from 'react'
import { Box, List } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Emails from './Emails';
import HOC from './HOC';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
   <HOC>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-start',width:'40%'}}>
      <Checkbox size="small" style={{marginRight:'5px'}}/>
      <RefreshIcon fontSize="small" style={{marginRight:'5px'}}/>
<MoreVertIcon fontSize="small" style={{marginRight:'5px'}}/>
    </Box>
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <List>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        <Emails/>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
      </HOC>
  )
}

export default Home