import React from 'react';
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleMainBody = () => {
        navigate('/main');
      };
    
    const handleFAQs = () => {
      navigate('/faq');
    };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.musicNotes}></div>
        <div className={styles.content}>
          <h1>Rhythm Voice Trainer</h1>
          <p>Welcome to Rhythm, your all-in-one voice projection trainer! <br />
             We make you sound confident, happy, and awesome!</p>
          
          <div className={styles.buttonBox}>
            <button onClick={() => handleMainBody()}>Start by uploading a speech text (transcript)</button>
            <button onClick={() => handleFAQs()}>See some general tips to prepare for your next amazing speech!</button>
          </div>
        </div>
        <div className={styles.wavyBg}></div>
      </div>
    </>
  );
}

export default Home;
