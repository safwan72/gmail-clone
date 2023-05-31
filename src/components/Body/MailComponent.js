import React from "react";
import HOC from "./HOC";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArchiveIcon from "@mui/icons-material/Archive";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import SnoozeIcon from "@mui/icons-material/Snooze";
import AddTaskIcon from "@mui/icons-material/AddTask";
import AdjustIcon from "@mui/icons-material/Adjust";
import LabelIcon from "@mui/icons-material/Label";
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import { Link } from "react-router-dom";
function stringAvatar(name) {
    return {
      sx: {
        bgcolor: 'white',
        color:'black'
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
const MailComponent = () => {
    const theme=useTheme();
  return (
    <HOC>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt:4,
          pr:4,
          width:"50%",
          [theme.breakpoints.down('md')]:{
            width:'98%',
            margin:'0 auto',
            pr:1,
            mt:4,
          }
        }}
      >
        <ArrowBackIcon fontSize="small" style={{ marginRight: "5px" }}/>
        <ArchiveIcon fontSize="small" style={{ marginRight: "5px" }} />
        <PunchClockIcon fontSize="small" style={{ marginRight: "5px" }} />
        <DeleteIcon fontSize="small" style={{ marginRight: "5px" }} />
        <EmailIcon fontSize="small" style={{ marginRight: "5px" }} />
        <SnoozeIcon fontSize="small" style={{ marginRight: "5px" }} />
        <AddTaskIcon fontSize="small" style={{ marginRight: "5px" }} />
        <AdjustIcon fontSize="small" style={{ marginRight: "5px" }} />
        <LabelIcon fontSize="small" style={{ marginRight: "5px" }} />
        <MoreVertIcon fontSize="small" style={{ marginRight: "5px" }} />
      </Box>
      <Box sx={{my:4}}>
        <Typography variant="h4" sx={{mb:3}}>Subject asjdvasjdvjhasdjhasbd</Typography>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
        <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        {...stringAvatar('Kent Dodds')}
        sx={{ width: 35, height: 35,mr:'5px' }}
      />
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center'}}>
      <Box>
        <Typography variant="p" sx={{mr:'3px'}}>Md Ibne Safwan Ali</Typography>
        <Typography variant="caption">{"<safwan4872@gmail.com>"}</Typography>
      </Box>
      <Typography variant="caption">to me</Typography>

      </Box>
        </Box>
      </Box>
      <Box sx={{my:4}}>
        <Typography variant="p">
        In this course, taught by OpenAI’s Isa Fulford together with
                Andrew Ng, you’ll learn to build complex applications using
                large language models (LLMs). This course takes you beyond
                prompting, and explains how to break a complex task down to be
                carried out via multiple API calls to an LLM. You’ll also learn
                to evaluate the inputs and outputs of LLMs for safety,
                relevance, and accuracy.
        </Typography>
        <Box sx={{mt:4}}>
<Button startIcon={<UndoIcon />}sx={{backgroundColor:'#C2E7FF',color:'black',padding:'10px 16px',marginRight:'20px',borderRadius:'15px',"&:hover":{
            backgroundColor:'#9cc1d8',
            marginRight:2
          }}}> Reply</Button>
<Button startIcon={<RedoIcon />}sx={{backgroundColor:'#C2E7FF',color:'black',padding:'10px 16px',borderRadius:'15px',"&:hover":{
            backgroundColor:'#9cc1d8'
          }}}> Forward</Button>
        </Box>
      </Box>
    </HOC>
  );
};

export default MailComponent;
