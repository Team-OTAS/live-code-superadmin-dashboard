import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { openAlert } from "../redux/feature/alertSlice";
import { closeModalA, openModalB } from "./../redux/feature/modalSlice";
import { resdata } from "../redux/feature/randomUserSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import "../Styles/dialogBox.css";
import axios from "axios";
import Loading from "./Loading";

export default function CreateShop() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // --------------Modal function start ------------------------------------------------------------------------
  const handleClose = () => {
    dispatch(closeModalA());
  };

  // --------------Modal function end ------------------------------------------------------------------------

  // --------------form submit function start ------------------------------------------------------------------------
  const nameref = useRef();
  const phoneref = useRef();
  const [packageid, setPackage] = useState(1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameref.current.value,
      phone: phoneref.current.value,
      subscription_plan_id: packageid,
    };
    submitData(data);
    setLoading(true);
  };

  const submitData = async (data) => {
    try {
      const res = await axios.post("/api/shops", data);
      if (res) {
        dispatch(openModalB());
        dispatch(resdata(res.data.data));
        setLoading(false);
        console.log("Its Work");
      }
      console.log("response", res.data.data);
      return res.data;
    } catch (error) {
      if (error instanceof SyntaxError) {
        dispatch(
          openAlert({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question",
          })
        );
        dispatch(closeModalA());
      } else if (error) {
        dispatch(
          openAlert({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error",
          })
        );
        dispatch(closeModalA());
      }

      setLoading(false);
    }
  };
  // --------------form submit function end ------------------------------------------------------------------------
  return (
    <div className="dialog-box">
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Box
            component="form"
            sx={{
              "& > :not(style)": { my: 3, mx: 2 },
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/*-------- form header start ----------------------------------------------------------*/}
            <h1 className="formHeader">Create A New Shop</h1>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 0,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            {/*-------- form header end ----------------------------------------------------------*/}
            {/*-------- form input start----------------------------------------------------------*/}
            <TextField
              id="outlined-basic"
              label={
                <div className="input-field-label">
                  <StorefrontIcon color="primary" />
                  <span style={{ marginLeft: "10px" }}>Shop Name</span>
                </div>
              }
              color="primary"
              variant="outlined"
              sx={{ display: "block" }}
              inputRef={nameref}
            />
            <TextField
              id="outlined-basic"
              label={
                <div className="input-field-label">
                  <CallOutlinedIcon color="primary" />
                  <span style={{ marginLeft: "10px" }}>Phone</span>
                </div>
              }
              variant="outlined"
              color="primary"
              sx={{ display: "block" }}
              inputRef={phoneref}
            />
            {/*-------- form input end----------------------------------------------------------*/}
            {/*-------- form package start----------------------------------------------------------*/}
            <div className="package-form-container">
              <h3 style={{ paddingBottom: "10px" }}>
                <div className="input-field-label">
                  <SellOutlinedIcon color="primary" />
                  <span style={{ marginLeft: "10px" }}>Package Plans</span>
                </div>
              </h3>
              <div className="package">
                {/* card 1 */}
                <Card
                  sx={{
                    backgroundColor: packageid === 1 ? "black" : "white",
                    color: packageid === 1 ? "white" : "black",
                    transform:
                      packageid === 1 ? "translateY(-10px)" : "translateY(0)",
                    borderRadius: "10px",
                    border: "1px solid #000",
                    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.80)",
                    transition: "0.5s",
                  }}
                  onClick={() => setPackage(1)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/assets/images/logo.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Package 1
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: packageid === 1 ? "white" : "text.secondary",
                        }}
                      >
                        LPlease add your content here. Keep it short and simple.
                        And smile
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* card 2 */}
                <Card
                  sx={{
                    backgroundColor: packageid === 2 ? "black" : "white",
                    color: packageid === 2 ? "white" : "black",
                    transform:
                      packageid === 2 ? "translateY(-10px)" : "translateY(0)",
                    borderRadius: "10px",
                    border: "1px solid #000",
                    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.80)",
                    marginX: "10px",
                    transition: "0.5s",
                  }}
                  value="1"
                  onClick={() => setPackage(2)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/assets/images/logo.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Package 2
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: packageid === 2 ? "white" : "text.secondary",
                        }}
                      >
                        LPlease add your content here. Keep it short and simple.
                        And smile
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                {/* card 3 */}
                <Card
                  sx={{
                    backgroundColor: packageid === 3 ? "black" : "white",
                    color: packageid === 3 ? "white" : "black",
                    transform:
                      packageid === 3 ? "translateY(-10px)" : "translateY(0)",
                    borderRadius: "10px",
                    border: "1px solid #000",
                    boxShadow: "4px 4px 0px 0px rgba(0, 0, 0, 0.80)",
                    transition: "0.5s",
                  }}
                  onClick={() => setPackage(3)}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/assets/images/logo.png"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Package 3
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: packageid === 3 ? "white" : "text.secondary",
                        }}
                      >
                        LPlease add your content here. Keep it short and simple.
                        And smile
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
            {/*-------- form package end----------------------------------------------------------*/}
            {/*-------- form button start----------------------------------------------------------*/}
            <div className="btnContainer">
              <Button type="submit" variant="contained" color="primary">
                Set up a shop
              </Button>
            </div>
            {/*-------- form button start----------------------------------------------------------*/}
          </Box>
        )}
      </div>
    </div>
  );
}
