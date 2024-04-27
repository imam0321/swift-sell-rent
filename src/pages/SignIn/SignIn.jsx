import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Google } from "@mui/icons-material";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}
const defaultTheme = createTheme();

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    signIn(email, password)
    .then(()=> {
      navigate('/');
    })
    .catch((error) => console.log(error))
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h3">
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  variant="outlined"
                  color="warning"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  variant="outlined"
                  color="warning"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                backgroundColor: "#424242",
                color: "white",
                "&:hover": {
                  backgroundColor: "#616161",
                },
              }}
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<Google />}
              sx={{
                mt: 1,
                mb: 2,
                backgroundColor: "#e53935",
                color: "white",
                "&:hover": {
                  backgroundColor: "#f44336",
                },
              }}
            >
              Continue with Google
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signIn" variant="body2">
                  New Here? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;