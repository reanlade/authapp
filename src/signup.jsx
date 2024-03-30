import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Container, CssBaseline, Typography, Link } from '@mui/material';

const Signup = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would perform your signup logic (send data to an API, etc.)
    console.log('Signup submitted:', firstName, lastName, email, password); // Example log
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
        <Typography variant="h4" style={{ marginBottom: 30 }}> Signup Form </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            value={lastName}
            onChange={handleLastNameChange}
          />
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
            Signup
          </Button>
          <Typography align="center" style={{ marginTop: 15 }}>
            Already a member?{' '} 
            <Link href="#" onClick={() => navigate('/')}>
              Log in
            </Link>
          </Typography> 
        </form>
      </div>
    </Container>
  );
};

export default Signup;
