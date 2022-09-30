import styles from '../styles/Home.module.css';
import { useState } from 'react';

import data from '../data';

export default function Home() {
  const [number, setNumber] = useState(0);

  const [text, setText] = useState([]);

  const getNumber = (event) => {
    setNumber(event.target.value);
  };

  const generateParagraph = (event) => {
    event.preventDefault();

    let numOfPragraphs = parseInt(number);

    if (numOfPragraphs <= 0) numOfPragraphs = 0;

    setText([data.slice(0, numOfPragraphs)]);

    console.log(text);

    console.log(typeof numOfPragraphs, number);
  };

  return (
    <section className={`${styles.main} ${styles.spacing}`}>
      <h1 className={styles.heading}>tired of boring lorem ipsum?</h1>
      <form onSubmit={generateParagraph}>
        <label htmlFor="number">Paragraphs:</label>
        <input
          type="number"
          id="number"
          name="number"
          value={number}
          onChange={getNumber}
        />
        <button>Generate</button>
      </form>
      <article className={styles.paragraphContainer}>
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}
