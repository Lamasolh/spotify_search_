import React from 'react';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Home = (props) => {


  const handleLogin = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=4329eda12d5549939aba5fea1db22b0e&redirect_uri=http://localhost:3000/redirect&response_type=token&show_dialog=true`;
  };

  const { isValidSession, location } = props;
  const { state } = location;
  const sessionExpired = state && state.session_expired;

  return (
    <React.Fragment>
      {isValidSession() ? (
        <Redirect to="/dashboard" />
      ) : (
        <div className="login">
          {sessionExpired && (
            <Alert variant="info">Session expired. Please login again.</Alert>
          )}
          <Button variant="info" type="submit" onClick={handleLogin}>
            Login <img className="img" src="https://img.icons8.com/fluency/50/000000/spotify.png" alt="spotify"/> 
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

export default connect()(Home);
