import React from "react";
import HOC from "./HOC";
import { Box, Button, Container, IconButton, Typography, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectopenMail } from "../../features/mailSlice";
function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "white",
      color: "black",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
const MailComponent = () => {
  const theme = useTheme();
  const selectMail=useSelector(selectopenMail);
console.log(selectMail)
  return (
    <HOC>
      <Container maxWidth='xl' sx={{paddingRight:'20px'}}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 4,
          pr: 4,
          width: "50%",
          [theme.breakpoints.down("md")]: {
            width: "98%",
            margin: "0 auto",
            pr: 1,
            mt: 4,
            flexWrap:'wrap'
          },
        }}
      >
        <IconButton component={Link} to='/'>
          <ArrowBackIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton component={Link} to='/'>
          <ArchiveIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <PunchClockIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <DeleteIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <EmailIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <SnoozeIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <AddTaskIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <AdjustIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <LabelIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
        <IconButton>
          <MoreVertIcon fontSize="small" style={{ marginRight: "5px" }} />
        </IconButton>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography sx={{ typography: { lg: 'h5',md: 'h6', xs: 'body2'},mb:3 }}>
          {selectMail?.subject}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            flexWrap:'wrap',
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            {...stringAvatar("Kent Dodds")}
            sx={{ width: 35, height: 35, mr: "5px" }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              mb:1
            }}
          >
            <Box>
              <Typography variant="p" sx={{ mr: "3px" }}>
                Md Ibne Safwan Ali
              </Typography>
              <Typography variant="caption">
                {`<${selectMail?.title}>`}
              </Typography>
            </Box>
            <Typography variant="caption">to me</Typography>
          </Box>
          <Box flexGrow={1}/>
          <Box>
            <Typography variant="caption">
            {selectMail?.time}</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography variant="p">
        {selectMail?.message}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            startIcon={<UndoIcon />}
            sx={{
              backgroundColor: "#C2E7FF",
              color: "black",
              padding: "10px 16px",
              marginRight: "20px",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "#9cc1d8",
                marginRight: 2,
              },
            }}
          >
            Reply
          </Button>
          <Button
            startIcon={<RedoIcon />}
            sx={{
              backgroundColor: "#C2E7FF",
              color: "black",
              padding: "10px 16px",
              borderRadius: "15px",
              "&:hover": {
                backgroundColor: "#9cc1d8",
              },
            }}
          >
            {" "}
            Forward
          </Button>
        </Box>
      </Box>
      </Container>
    </HOC>
  );
};

export default MailComponent;
