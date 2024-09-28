import React from 'react';
import styles from './faq.module.css'; // Create a new CSS module for styling

function FAQ() {
  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.heading}>Frequently Asked Questions</h1>
      <p className={styles.subHeading}>Here are some general tips and FAQs to help you prepare for your next amazing speech!</p>

      <div className={styles.tipSection}>
        <div className={styles.tip}>
          <h2>Tip 1: Understand Your Audience</h2>
          <p>Knowing who you're speaking to allows you to tailor your message and better connect with them.</p>
        </div>

        <div className={styles.tip}>
          <h2>Tip 2: Practice Your Speech</h2>
          <p>Rehearse your speech multiple times before delivering it. This builds confidence and helps identify areas for improvement.</p>
        </div>

        <div className={styles.tip}>
          <h2>Tip 3: Control Your Breathing</h2>
          <p>Good breath control helps maintain a steady voice. Practice breathing exercises to improve this.</p>
        </div>

        <div className={styles.tip}>
          <h2>Tip 4: Use Vocal Variety</h2>
          <p>Vary your pitch, pace, and volume to keep the audience engaged and avoid a monotone delivery.</p>
        </div>

        <div className={styles.tip}>
          <h2>Tip 5: Make Eye Contact</h2>
          <p>Establish a connection with your audience by making eye contact. It shows confidence and helps engage listeners.</p>
        </div>

        <div className={styles.tip}>
          <h2>Tip 6: Use Pauses Effectively</h2>
          <p>Pauses emphasize key points and give the audience time to absorb your message.</p>
        </div>

        <div className={styles.tip}>
          <h2>Tip 7: Stay Positive and Relaxed</h2>
          <p>Nervousness affects your voice. Stay relaxed, and remember that the audience is there to hear what you have to say.</p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
