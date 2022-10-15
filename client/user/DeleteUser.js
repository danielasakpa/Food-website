import React, { useState } from "react";
import PropTypes from "prop-types";
import auth from "./../auth/auth-helper";
import { remove } from "./api-user.js";
import { Redirect } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


export default function DeleteUser(props) {
    const [open, setOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);
  
    const jwt = auth.isAuthenticated();
    const clickButton = () => {
      setOpen(true);
    };
    const deleteAccount = () => {
      remove(
        {
          userId: props.userId,
        },
        { t: jwt.token }
      ).then((data) => {
        if (data && data.error) {
          console.log(data.error);
        } else {
          auth.clearJWT(() => console.log("deleted"));
          setRedirect(true);
        }
      });
    };
    const handleRequestClose = () => {
      setOpen(false);
    };
  
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <span>
        <IconButton aria-label="Delete" onClick={clickButton} color="secondary">
          <DeleteIcon />
        </IconButton>
  
        <Dialog open={open} onClose={handleRequestClose}>
          <DialogTitle>{"Delete Account"}</DialogTitle>
          <DialogContent>
            <DialogContentText>Confirm to delete your account.</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={deleteAccount}
              color="secondary"
              autoFocus="autoFocus"
            >
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
  DeleteUser.propTypes = {
    userId: PropTypes.string.isRequired,
  };
  