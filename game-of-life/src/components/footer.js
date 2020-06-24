import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    paddingBottom: '10px',
  },
  container: {
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkedInLink: {
      color: '#424242',
  },
  gitHubLink: {
    color: '#424242',
  },
  twitterLink: {
      color: '#424242',
  },
}));

const Foot = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container className={classes.container} maxWidth='lg'>
        <a
          href='https://www.linkedin.com/in/michael-sinnema/'
          className={classes.linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          alt="LinkedIn"
        >
          <LinkedInIcon fontSize='large' />
        </a>

        <a
          href='https://github.com/msinnema33'
          className={classes.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          alt="Github"
        >
          <GitHubIcon fontSize='large' />
        </a>
        
        <a
          href='https://twitter.com/mike_sinnema'
          className={classes.twitterLink}
          target="_blank"
          rel="noopener noreferrer"
          alt="Twitter"
        >
          <TwitterIcon fontSize='large' />
        </a>
      </Container>
    </div>
  );
};

export default Foot;