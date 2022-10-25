import { Button, Stack, TextField, Typography, Container } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Index = () => {
  const [isSignin, setISSignin] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email address").required("Required"),
      userName: Yup.string()
        .min(5, "Should be 5 character long")
        .max(15, "should not exceed 15 characters")
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .matches(/^\S+$/, "The password cannot include space"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <React.Fragment>
      <Container
        maxWidth="lg"
        sx={{
          py: 15,
        }}
      >
        <Stack
          direction="column"
          spacing={3}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <Stack spacing={1}>
            <Typography
              align="center"
              sx={{
                fontSize: "3.75rem",
                fontWeight: "bold",
              }}
            >
              {isSignin ? "Log in" : "Sign up"}
            </Typography>
            <Typography
              align="center"
              sx={{
                fontSize: "1.313rem",
              }}
            >
              {isSignin
                ? "Log into your Account"
                : "Create your Account & Enjoy"}
            </Typography>
          </Stack>
          <TextField
            name="email"
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          {!isSignin && (
            <TextField
              name="userName"
              fullWidth
              id="outlined-basic"
              label="User name"
              variant="outlined"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.userName}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
          )}
          <TextField
            name="password"
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          {!isSignin && (
            <Stack direction="row" alignItems={"center"}>
              <Checkbox {...label} />
              <Typography>
                I agree to the{" "}
                <span style={{ color: "blue" }}>Terms & Conditions</span>
              </Typography>
            </Stack>
          )}
          <Button
            variant="outlined"
            sx={{
              border: "solid 1px #c31a12",
              background: "#f04037",
              color: "#fff",
              height: "3.75rem",
              fontWeight: "bold",
              fontSize: "1.313rem",
              borderRadius: "10px",
              "&:hover": {
                backgroundColor: "#f04037",
                color: "#fff",
              },
            }}
            type="submit"
          >
            {isSignin ? "Log in" : "Get Started"}
          </Button>
          {!isSignin && (
            <Typography align="center">
              Already have an account?{" "}
              <span
                style={{
                  color: "blue",
                  cursor: "pointer",
                }}
                onClick={() => setISSignin(!isSignin)}
              >
                Sign in
              </span>
            </Typography>
          )}
        </Stack>
      </Container>
    </React.Fragment>
  );
};

export default Index;
