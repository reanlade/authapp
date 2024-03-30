import React from 'react';
import { Button, TextField, Typography, Container, CssBaseline } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would perform your login logic (send data to an API, etc.)
    alert('Login form submitted!'); 
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5vh',
        minHeight: '100vh'
      }}>
        <Typography variant="h4" style={{ marginBottom: 30 }}> Login Form </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            style={{ marginTop: 20 }}
            onClick={() => navigate('/signup')}
          >
            Signup
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
