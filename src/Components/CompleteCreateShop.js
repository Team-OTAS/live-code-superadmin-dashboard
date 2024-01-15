import React, { useEffect, useRef } from "react";
import { closeModalA, closeModalB } from "./../redux/feature/modalSlice";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import "./../Styles/dialogBox.css";
import { useDispatch, useSelector } from "react-redux";

export default function CreateComplete() {
  const dispatch = useDispatch();
  const nameref = useRef();
  const passwordref = useRef();
  const resData = useSelector((state) => state.ramdomUser);

  useEffect(() => {
    nameref.current.value = resData.data.user_name;
    passwordref.current.value = resData.data.password;
  }, []);

  const handleCopy = async () => {
    const credentialsText = `Username: ${nameref.current.value}\nPassword: ${passwordref.current.value}`;
    try {
      await navigator.clipboard.writeText(credentialsText);
      dispatch(closeModalB());
      dispatch(closeModalA());
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      dispatch(closeModalB());
      dispatch(closeModalA());
      alert("TUnable to copy to clipboard");
    }
  };

  return (
    <>
      <Box
        sx={{
          p: 5,
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ py: { xs: 3, sm: 0 } }}
        >
          <Grid item xs={2}>
            <p className="textheader">User Shop Has Been Created!</p>
          </Grid>
          <Grid item xs={12}>
            <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              <p className="textbody">
                The temporary user name & password has been created.
                <br />
                You can copy & paste this info and send to the user to <br />
                login to the account.
              </p>
            </Box>
            <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
              <p className="textbody">
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
              <div className="input-field">
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
                />
              </div>
              <div className="input-field">
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
