import React, { useState } from 'react';
import styles from './main.module.css';

function Main() {
  const [textUploaded, setTextUploaded] = useState(false);
  const [audioUploaded, setAudioUploaded] = useState(false);

  const handleTextUpload = () => {
    setTextUploaded(true);
  };

  const handleAudioUpload = () => {
    setAudioUploaded(true);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.heading}>Upload Your Speech Transcript</h1>
      <p className={styles.subHeading}>
        Here you can upload your speech transcript and audio file to get started with the voice projection analysis!
      </p>

      {/* Text Upload Section */}
      <div className={styles.uploadBox}>
        <label htmlFor="textUpload">Upload Text Transcript</label>
        <input
          type="file"
          id="textUpload"
          onChange={handleTextUpload}
          className={styles.uploadInput}
          accept=".txt, .doc, .docx"
        />
      </div>

      {/* Audio Upload Section */}
      <div className={styles.uploadBox}>
        <label htmlFor="audioUpload">Upload Audio File</label>
        <input
          type="file"
          id="audioUpload"
          onChange={handleAudioUpload}
          className={styles.uploadInput}
          accept=".mp3, .wav"
        />
      </div>

      {/* Submit Buttons */}
      <div className={styles.buttonBox}>
        <button
          className={styles.submitButton}
          onClick={handleTextUpload}
          disabled={textUploaded}
        >
          {textUploaded ? 'Text Submitted' : 'Submit Text'}
        </button>
        <button
          className={styles.submitButton}
          onClick={handleAudioUpload}
          disabled={audioUploaded}
        >
          {audioUploaded ? 'Audio Submitted' : 'Submit Audio'}
        </button>
      </div>

      {/* Get Feedback Button */}
      <div className={styles.feedbackBox}>
        <button
          className={styles.feedbackButton}
          disabled={!(textUploaded && audioUploaded)}
        >
          Get Feedback
        </button>
      </div>
    </div>
  );
}

export default Main;
