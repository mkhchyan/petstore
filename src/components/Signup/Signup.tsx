import React, { useEffect, useState } from 'react';
import { Avatar, Button } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import { isDataValid } from '../../config';
import { RegisterUser } from '../../api';

const theme = createTheme(
    {
        palette: {
            primary: {
                main: '#756D60',
            },
            secondary: {
                main: '#A9AB93',
            },
        },
    }
);


const SignUp: React.FC = () => {

    const [error, setError] = useState("");

    const navigate = useNavigate();

    // const isDataValidAdd = (data: any, user: any) => {
    //     const password = data.get("password");
    //     const confirm = data.get("confirm");

    //     if (password !== confirm) {
    //         return;
    //     }

    //     return isDataValid(user);
    // };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const user = ({
            username: data.get('username'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password'),
            phone: data.get('phone'),
        });
        console.log(user);

        // if (!isDataValidAdd(data, user)) {
        //     setError("Wrong Input Parametres");
        //     return;
        // }

        const result = RegisterUser(user);

        if (typeof result === "string") {
            setError(result);
            return;
        }

        navigate("../login");
    };



return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            {error && <Typography>{error}</Typography>}

            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="password"
                            // endAdornment={
                            //     <InputAdornment position="end">
                            //     <IconButton
                            //       aria-label="toggle password visibility"
                            //       onClick={() => setShowPassword(!showPassword)}
                            //     >
                            //       {showPassword ? <Visibility /> : <VisibilityOff />}
                            //     </IconButton>
                            //   </InputAdornment>
                            //   }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                name="confirm"
                                label="Confirm password"
                                type="password"
                                id="confirm"
                                autoComplete="confirm-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Log in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
);
}

export default SignUp;