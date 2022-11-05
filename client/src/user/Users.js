import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Paper,
} from "@mui/material";
import { list } from "./api-user.js";
import { Link } from "react-router-dom";


export default function Users() { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <Paper elevation={4}>
      <Typography variant="h6">All Users</Typography>
      <List dense>
        {users.map((item, i) => {
          return (
            <Link to={"/user/" + item._id} key={i}>
              <ListItem button>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Paper>
  );
}
