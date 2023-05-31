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
import { Link } from "react-router-dom";
const Emails = () => {
  const theme = useTheme();
  return (
    <ListItem sx={{padding:0,color:'black'}} as={Link} to='/mail/2'>
    {/* <Link to='/mail/2'> */}
      <ListItemButton sx={{p:0}}>
        <Grid
          container
          colSpacing={{ xs: 2, sm: 1 }}
          rowSpacing={2}
          sx={{ alignItems: "center", justifyContent: "flex-start", my: 1,p:0 }}
          >
          <Grid xs={3} sm={2} md={1}>
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
          <Grid xs={9} sm={8} md={3}>
            <Box>
              <Typography noWrap>Sender Name 3135115156323</Typography>
            </Box>
          </Grid>
          <Grid xs={8} sm={4} md={3}>
            <Box>
              <Typography noWrap>Subject asjdvasjdvjhasdjhasbd</Typography>
            </Box>
          </Grid>
          <Grid xs={12} sm={7} md={5}>
            <Box>
              <Typography noWrap>
                In this course, taught by OpenAI’s Isa Fulford together with
                Andrew Ng, you’ll learn to build complex applications using
                large language models (LLMs). This course takes you beyond
                prompting, and explains how to break a complex task down to be
                carried out via multiple API calls to an LLM. You’ll also learn
                to evaluate the inputs and outputs of LLMs for safety,
                relevance, and accuracy.
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
