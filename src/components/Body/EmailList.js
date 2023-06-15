import { Box, List } from "@mui/material";
import React from "react";
import Emails from "./Emails";
import { db } from "../../firebase";
const EmailList = () => {
  const [emails, setemails] = React.useState([]);
  React.useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setemails(
          snapshot.docs.map((doc) => ({
            id: doc?.id,
            data: doc?.data(),
          }))
        )
      );
  }, []);
  return (
    <Box>
      <List>
        {emails?.map(({id, data}) => (
          <Emails
            message={data?.message}
            id={id}
            key={id}
            title={data?.to}
            subject={data?.subject}
            time={new Date(data?.timestamp?.seconds*1000).toUTCString()}
            />
        ))}
      </List>
    </Box>
  );
};

export default EmailList;
