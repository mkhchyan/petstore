import React, { useState, useContext } from "react";
import { Button, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from '@mui/material/TextField';
import Typography from "@mui/material/Typography";
import { AccountActive } from "../../App";
import { UpdateUser } from "../../api";
import { StyledInnerHeader } from "./styles";

export const ProfileForm = () => {

  const { activeAccount, setActiveAccount } = useContext(AccountActive);

  const [error, setError] = useState("");

  const [usernameValue, setUsernameValue] = useState("");

  const [submitDone, setSubmitDone] = useState(false);

//   const onChangeUsername = (e: React.FormEvent<HTMLFormElement>, value: any): void => setUsernameValue((e.target as any).value);

//   const names = [usernameValue];
//   const handlers = [onChangeUsername];
//   const labels = ["Phone", "E-mail", "Phone", "Password"];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user = {
      username: data.get("username"),
      id: activeAccount.user.username,
    };

    const result = UpdateUser(user);

    if (typeof result === "string") {
      setError(result);
      return;
    }

    setSubmitDone(true);
    setUsernameValue("");
  };

  return (
    <Box flex={4} p={1}>
      {error && <Typography>{error}</Typography>}
      {submitDone && <Typography>Changes Have Been Made</Typography>}
      <Paper sx={{ minHeight: "80vh" }}>
        <Container
          sx={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <StyledInnerHeader>Profile</StyledInnerHeader>
          <Typography component="h1" variant="h5" sx={{ fontSize: 16, mb: 3 }}>
            Name: {activeAccount.user.firstName}
          </Typography>
          <Typography component="h1" variant="h5" sx={{ fontSize: 16, mb: 3 }}>
           Surname: {activeAccount.user.lastName}
          </Typography>
          <Typography component="h1" variant="h5" sx={{ fontSize: 16, mb: 3 }}>
            Email: {activeAccount.user.email}
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              id="username"
              autoComplete="username"
              onChange={e => setUsernameValue((e.target as any).value)}
              value={usernameValue}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              SUBMIT
            </Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};