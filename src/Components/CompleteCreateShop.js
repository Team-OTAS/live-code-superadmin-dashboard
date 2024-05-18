import React, { useEffect, useRef, useState } from "react";
import { closeModalA, closeModalB } from "./../redux/feature/modalSlice";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Alert, Box, Button } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import "./../Styles/dialogBox.css";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Swal from "sweetalert2";

export default function CreateComplete() {
  const dispatch = useDispatch();
  const nameref = useRef();
  const passwordref = useRef();
  const resData = useSelector((state) => state.ramdomUser);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    nameref.current.value = resData.data.user_name;
    passwordref.current.value = resData.data.password;
  }, []);

  const handleCopy = async () => {
    const credentialsText = `Username: ${nameref.current.value}\nPassword: ${passwordref.current.value}`;
    console.log(credentialsText);
    try {
      await navigator.clipboard.writeText(credentialsText);
      setAlert(true);
      setTimeout(() => {
        dispatch(closeModalB());
        dispatch(closeModalA());
      }, 1500);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      dispatch(closeModalB());
      dispatch(closeModalA());
      Swal.fire({
        title: "Error",
        text: "can not copy",
        timer: 2000,
      });
    }
  };

  const handleClose = () => {
    dispatch(closeModalA());
  };

  return (
    <>
      {alert && (
        <Alert
          variant="filled"
          severity="success"
          sx={{
            width: "50%",
            margin: "auto",
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Copied!
        </Alert>
      )}
      <Box
        sx={{
          p: 5,
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: "30px",
          borderRadius: "10px",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          // backgroundColor="white"
          sx={{ py: { xs: 3, sm: 0 } }}
        >
          {/* <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton> */}
          <Grid item xs={12}>
            <p className="texthead">User Shop Has Been Created Successfully!</p>
          </Grid>
          <Grid item xs={12}>
            <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              <p className="textBody">
                The temporary user name & password has been created.
                <br />
                You can copy & paste this info and send to the user to login to
                the account.
              </p>
            </Box>
            <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
              <p className="textBody">
                The temporary user name & password has been created.
                <br />
                You can copy & paste this info and send to the user to <br />
                login to the account.
              </p>
            </Box>
          </Grid>
          {/* ---------Form Start  --------------------------------------------------------*/}
          <Grid item xs={12}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "30ch" },
              }}
            >
              <div className="">
                <TextField
                  id="outlined-error-helper-text"
                  label={
                    <div className="input-field-label">
                      <Person2OutlinedIcon color="primary" />
                      <span>Username</span>
                    </div>
                  }
                  color="primary"
                  size="large"
                  inputRef={nameref}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <div>
                <TextField
                  id="outlined-error-helper-text"
                  label={
                    <div className="input-field-label">
                      <PasswordOutlinedIcon color="primary" />
                      <span>Password</span>
                    </div>
                  }
                  color="primary"
                  size="large"
                  inputRef={passwordref}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
            </Box>
          </Grid>
          {/* ---------Form End  --------------------------------------------------------*/}
          <Grid item xs={2}>
            <Button variant="contained" color="primary" onClick={handleCopy}>
              Copy Name & Password
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
