import { Box } from '@mui/material';
import { styled} from '@mui/material/styles';
import * as React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PersonIcon from '@mui/icons-material/Person';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';


const rightDrawer=[
  {
      "name":"Calender",
      "icon":<CalendarMonthIcon sx={{
          color:'red'
      }}/>,

  },
  {
      "name":"Keep",
      "icon":<LightbulbIcon sx={{
          color:'yellow'
      }}/>,

  },
  {
      "name":"Tasks",
      "icon":<TaskAltIcon sx={{
          color:'blue'
      }}/>,

  },
  {
      "name":"Contacts",
      "icon":<PersonIcon sx={{
          color:'blue'
      }}/>,

  }
]


const closedRightMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:'#e8f1ff',
  border:'none',
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(6)} + 1px)`,
  },
});

const DrawerHeaderRight = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const DrawerRight = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(!open && {
      ...closedRightMixin(theme),
      '& .MuiDrawer-paper': closedRightMixin(theme),
    }),
  }),
);


export default function RightNavbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
           <DrawerRight variant="permanent" open={false} anchor='right'>
        <DrawerHeaderRight>
        </DrawerHeaderRight>
        <List>
          {rightDrawer?.map((lists, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }} title={lists?.name}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: 'center',
                  px: 2.5,
                  my:1.25,
                  "&:hover":{
                    borderRadius:'50%',
                    backgroundColor:'#dce2ea',
                    transition:'400ms ease-in-out'
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                  }}
                >
                    {lists?.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DrawerRight>
    </Box>
  );
}