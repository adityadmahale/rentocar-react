import { Button, Grid, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import Input from "../../components/common/input";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = ({ currentTarget: input }) => {
    const account = { ...user };
    account[input.name] = input.value;
    setUser(account);
  };

  const validate = () => {
    const allErrors = {};

    // TODO: Validate Email
    if (user.email === "") {
      allErrors.email = "Email cannot be empty";
    } else if (!user.email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
      allErrors.email = "Email format is not valid";
    }

    // TODO: Validate Password
    if (user.password.length < 8) {
      allErrors.password =
        "Password should contain minimum of eight characters";
    } else if (!user.password.match(/^[a-zA-Z0-9!@#$&()\\-`.+,/"]*$/)) {
      allErrors.password =
        "Password can only contain alpha-numeric and special characters";
    }

    return allErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = validate();
    setErrors(allErrors);
    if (Object.keys(allErrors).length !== 0) {
      return;
    }

    toast.success("Login successfuly");

    navigate("/userlist");
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: "40px" }}
    >
      <Grid item xs={3} width={{ xs: "80%", md: "60%", lg: "35%" }}>
        <Box component="form" autoComplete="off" onSubmit={handleSubmit}>
          <Stack spacing={1.5} alignItems="center">
            <Input
              label="Email"
              name="email"
              type="email"
              value={user.email}
              onChange={handleChange}
              errors={errors}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              value={user.password}
              onChange={handleChange}
              errors={errors}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ minHeight: "40px", backgroundColor: "#00d2d3" }}
            >
              Sign In
            </Button>
            <Typography variant="span" component="span" style={{}}>
              <Link
                to="/registration"
                style={{ textDecoration: "none", color: "#00d2d3" }}
              >
                New User?
              </Link>
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
