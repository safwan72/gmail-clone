import {
  Box,
  Checkbox,
  Grid,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleselectMail } from "../../features/mailSlice";

const Emails = ({id,title,subject,message,time}) => {
  const theme = useTheme();
  const dispatch=useDispatch();
  const navigate=useNavigate();
const openMail=()=>{
dispatch(handleselectMail({
  id,title,subject,message,time
}))

navigate(`mail/${id}/`)

}

  return (
    <ListItem sx={{padding:0,color:'black'}} onClick={()=>openMail()}>
    {/* <Link to='/mail/2'> */}
    <ListItemButton sx={{py:0}}>
        <Grid
          container
          columnSpacing={{ xs: 2, sm: 1 }}
          rowSpacing={2}
          sx={{ alignItems: "center", justifyContent: "flex-start", my: 1,p:0 }}
          >
          <Grid item xs={3} sm={2} md={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                [theme.breakpoints.down("sm")]: {
                  marginRight: "5px",
                },
              }}
            >
              <Checkbox
                size="small"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 17 },
                  padding: 0,
                  marginRight: "2px",
                }}
              />
              <StarOutlineIcon
                fontSize="small"
                sx={{ fontSize: 18, marginRight: "5px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={9} sm={8} md={3}>
            <Box>
              <Typography noWrap>{title}</Typography>
            </Box>
          </Grid>
          <Grid item xs={8} sm={4} md={3}>
            <Box>
              <Typography noWrap>{subject}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={5}>
            <Box>
              <Typography noWrap>
                {message}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </ListItemButton>

       {/* </Link> */}
    </ListItem>
  );
};

export default Emails;
