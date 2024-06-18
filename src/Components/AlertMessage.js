import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { closeAlert } from "../redux/feature/alertSlice";
import Swal from "sweetalert2";

const AlertMessage = () => {
  const alert = useSelector((state) => state.alert);

  useEffect(() => {
    // This effect runs when the component mounts
    Swal.fire({
      title: alert.message.title,
      text: alert.message.text,
      icon: alert.message.icon,
    });
  }, [alert]);

  return;
};

export default AlertMessage;
