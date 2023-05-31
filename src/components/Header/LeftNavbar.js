import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ChatIcon from '@mui/icons-material/Chat';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import TimerIcon from '@mui/icons-material/Timer';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import CategoryIcon from '@mui/icons-material/Category';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button } from '@mui/material';
import ColorizeIcon from '@mui/icons-material/Colorize';

const leftDrawer=[
  {
      "name":"Inbox",
      "icon":<InboxIcon />,

  },
  {
      "name":"Starred",
      "icon":<StarBorderIcon />,

  },
  {
      "name":"Snoozed",
      "icon":<AccessTimeIcon/>,

  },
  {
      "name":"Sent",
      "icon":<SendIcon/>,

  },
  {
      "name":"Drafts",
      "icon":<DraftsIcon/>,

  }
]

const leftDrawermore=[
  {
      "name":"Important",
      "icon":<LabelImportantIcon/>,

  },
  {
      "name":"Chats",
      "icon":<ChatIcon />,

  },
  {
      "name":"Scheduled",
      "icon":<ScheduleSendIcon />,

  },
  {
      "name":"All Mail",
      "icon":<DynamicFeedIcon />,

  },
  {
      "name":"Spam",
      "icon":<TimerIcon />,

  },
  {
      "name":"Trash",
      "icon":<DeleteSweepIcon />,

  },
  {
      "name":"Categories",
      "icon":<CategoryIcon />,

  },
  {
      "name":"Manage \n Labels",
      "icon":<ManageHistoryIcon />,

  },
  {
      "name":"Create new label",
      "icon":<AddIcon />,

  },
]


const drawerWidth = 160;


const openedMixin = (theme) => ({
  width: drawerWidth,
  backgroundColor:'#F6F8FC',
  border:'none',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  backgroundColor:'#F6F8FC',
  border:'none',
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const LeftNavbar = ({open,handleDrawerClose}) => {
const theme=useTheme();
const [more, setmore] = React.useState(false);

const handlesetmore = () => {
  setmore(!more);
};
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
      </DrawerHeader>
      {open && (
        <Box sx={{my:2,display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Button startIcon={<ColorizeIcon />} sx={{backgroundColor:'#C2E7FF',color:'black',padding:'10px 16px',borderRadius:'15px',"&:hover":{
            backgroundColor:'#9cc1d8'
          }}}>Compose</Button>
        </Box>
      )}
    <List >
      {leftDrawer?.map((text, index) => (
        <ListItem key={index} disablePadding sx={{ display: 'block' }} title={text?.name}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 1.5,
              [theme.breakpoints.down('sm')]:{
                alignItems:'center',
              }
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : 'auto',
                justifyContent: 'center',
              }}
            >
              {text?.icon}
            </ListItemIcon>
            <ListItemText primary={text?.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    <ListItem disablePadding sx={{ display: 'block' }} title="More" >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 1.5,
              [theme.breakpoints.down('xs')]:{
                alignItems:'flex-start'
              }
            }}
            onClick={()=>handlesetmore()}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 2 : 'auto',
                justifyContent: 'center',
              }}
            >
            {more?<KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/>}  
            </ListItemIcon>
            <ListItemText primary={more?"Less":"More"} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
    </List>
        {more && (
    <List>
    {leftDrawermore?.map((text, index) => (
      <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 1.5,
            wordWrap:'break-word',
            [theme.breakpoints.down('sm')]:{
              alignItems:'center'
            }
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 2 : 'auto',
              justifyContent: 'center',
            }}
          >
            {text?.icon}
          </ListItemIcon>
          <ListItemText primary={text?.name} sx={{ display: open ? "block ": "none" }} style={{
            whiteSpace:'pre-line'
          }}/>
        </ListItemButton>
      </ListItem>
    ))}
  </List>
        )}
  </Drawer>
  )
}

export default LeftNavbar