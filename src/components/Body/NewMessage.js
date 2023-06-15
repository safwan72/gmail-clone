import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Modal from "@mui/material/Modal";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";
import { db } from "../../firebase";
import firebase from 'firebase/compat/app';

const style = {
  // position: "absolute",
  // bottom: 5,
  // right: 5,
  width: '100%',
  bgcolor: "background.paper",
  p: 2,
};

const NewMessage = ({ open, handleModal }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      to: "",
      message: "",
      subject: "",
    },
  });
  const onSubmit = (data) => {
    db.collection('emails').add({
      to:data.to,
      message:data.message,
      subject:data.subject,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    // handleModal();
  };
  return (
    <Modal
      open={open}
      onClose={handleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{width:450,position:'absolute',bottom:10,right:10,top:'unset',left:'unset',}}
    >
      <Card sx={style}>
        <CardHeader
          sx={{ py: 1 }}
          subheader="New Message"
          action={
            <IconButton aria-label="settings" onClick={handleModal}>
              <CloseIcon />
            </IconButton>
          }
        ></CardHeader>
        <CardContent>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="to"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullWidth label="To" id="to" type="email" variant="standard"/>
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <TextField {...field} fullWidth label="Subject" id="subject" type="text" variant="standard"/>
                  )}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      id="message"
                      label="Message"
                      multiline
                      rows={6}
                      fullWidth
                      variant="standard"
                    />
                  )}
                />
              </Box>
              <Box sx={{ my: 2, pt: 3 }}>
                <Button
                  type="submit"
                  endIcon={<SendIcon />}
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
                  Send
                </Button>
              </Box>
            </form>
          </Box>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default NewMessage;
