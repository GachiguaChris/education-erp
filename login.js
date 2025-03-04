// src/components/Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, Card, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  card: {
    padding: theme.spacing(4),
    width: '400px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
}));

const Login = () => {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      history.push('/home');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Typography variant="h5">Log In</Typography>
        <form className={classes.form} onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <Typography className={classes.error}>{error}</Typography>}
          <Button type="submit" variant="contained" color="primary" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </Button>
        </form>
        <Link href="/reset-password">Forgot Password?</Link>
        <Typography>
          Don't have an account? <Link href="/register">Sign Up</Link>
        </Typography>
      </Card>
    </div>
  );
};

export default Login;