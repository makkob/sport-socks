"use client";

import React, { useState } from "react";
import {
  TextField,
  Paper,
  Typography,
  TextareaAutosize,
  Button,
  Snackbar,
} from "@mui/material";
import { sendTelegram } from "./FormAction.js";

import styles from "./ContactForm.sass";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    sendTelegram(formData);

    // Show Snackbar for 0.5 seconds
    setIsSnackbarOpen(true);
    setTimeout(() => {
      setIsSnackbarOpen(false);
    }, 3000);

    // Clear form data
    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  const formStyle = {
    color: "#white",
    // textShadow: "0px 0px 0px #f61aba",
  };

  const paperStyle = {
    minHeight: "px",
    padding: "20px",
    borderRadius: "20px",
    background: "rgb(186,154,187)",
    background:
      "linear-gradient(43deg, rgba(255,233,255,0.85) 0%, rgba(255,255,255,0.85) 30%)",
    border: "2px solid #740d58",
    boxShadow: "3px 3px 3px #000000",
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Typography
        variant="h5"
        fontFamily="var(--font-montserrat)"
        textAlign="center"
        gutterBottom
        fontWeight={600}
      >
        Напишіть нам
      </Typography>
      <div className={styles.border}>
        <TextField
          type="text"
          name="name"
          label="Ім'я"
          variant="standard"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: {
              color: "white",
              "&.muiFocused?": {
                color: "white",
              },
            },
          }}
       
          onChange={handleChange}
          value={formData.name}
          required
        />

        <TextField
          type="tel"
          name="phone"
          label="Телефон"
          variant="standard"
          fullWidth
          margin="normal"
          InputLabelProps={{
            style: { color: "white" },
          }}
          InputProps={{
            style: {
              color: "white",
              "&.muiFocused?": {
                color: "white",
              },
            },
          }}
       
          onChange={handleChange}
          value={formData.phone}
          required
        />

        <TextareaAutosize
          name="message"
          placeholder="Повідомлення"
          minRows={8}
          style={{
            width: "99%",
            // padding: "8px",
            margin: "8px auto",
            // borderRadius: "10px",
            border: "1px solid white",
          }}
          onChange={handleChange}
          value={formData.message}
          fontFamily="var(--font-montserrat)"
        />
<Button
  type="submit"
  variant="outlined"
  color="primary"
  style={{
    borderColor: 'white',  // Set the border color to white
    color: 'white',        // Set the text color to white
    fontSize: '16px',      // Adjust the font size as needed
    fontFamily: 'var(--font-montserrat)',
    margin:"auto",
    width:"100%"
  }}
>
  Відправити
</Button>


        {/* Snackbar for success message */}
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={6000}
          onClose={() => setIsSnackbarOpen(false)}
          message="Відправлено! Очікуйте зворотнього звінка"
        />
      </div>
    </form>
  );
}
