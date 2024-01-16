import React from "react";
import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import LiveCodeLogo from "./../assets/images/logo.png";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";

function Loading() {
  return (
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
          <img src={LiveCodeLogo} alt="live_code_logo" className="logo" />
        </Grid>
        <Grid item xs={12}>
          <p className="textheader">Creating Your Shop</p>
        </Grid>
        <Grid item xs={12}>
          <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
            <p className="textbody">
              Please wait for a minute. This process may be a little <br />{" "}
              longer than you think if the connection is not stable...
            </p>
          </Box>
          <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
            <p className="textbody">
              Please wait for a minute. This process may be a little <br />{" "}
              longer than you think if the connection is not stable...
            </p>
          </Box>
        </Grid>
        <Grid item xs={12}>
          1
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChangeCircleOutlinedIcon />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Loading;
