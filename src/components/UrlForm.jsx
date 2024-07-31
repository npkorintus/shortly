import React, { useState } from 'react';

import bgShortenMobile from '../../public/bg-shorten-mobile.svg';
import bgShortenDesktop from '../../public/bg-shorten-desktop.svg';

import styles from '../styles/UrlForm.module.css';

export default function UrlForm(props) {
  const { isMobile, setUrlList } = props;
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log('form: ', form)
    const formData = new FormData(form);
    console.log('formData: ', formData)
    console.log('input: ', input)

    // if (!input) {
    //   setError('Please add a link');
    //   throw new Error('Input field is empty')
    // }

    fetch('/api/v1/shorten', { method: form.method, body: formData })
      .then(response => {
        if (!response.ok) {
          if (input && response.status === 400) {
            const message = `An error has occured: ${response.status}`;
            setError('Please include http(s):// in your URL');
            throw new Error(message)
          }
          else {
            const message = `An error has occured: ${response.status}`;
            setError(`An error has occured: ${response.status}`)
            throw new Error(message);
          }
        }

        console.log('response: ', response)
        return response.json();
      })
      .then(data => {
        console.log(data)
        setUrlList((prevUrls) => [...prevUrls, { longUrl: input, shortUrl: data.result_url }]);
        setError();
      })
      .catch(error => console.error('Error: ', error));
  }

  return (
    <section className={`${styles.formContainer} narrowWidth`} style={{ background: `url(${isMobile ? bgShortenMobile : bgShortenDesktop})`, backgroundColor: 'hsl(257, 27%, 26%)' }}>
      <form method='post' className={styles.urlForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.urlInput}
            type='text'
            name='url'
            value={input}
            placeholder='Shorten a link here...'
            required
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className={styles.submitContainer}>
          <button className={styles.btnSubmit} type='submit'>Shorten It!</button>
        </div>
      </form>
        {error ? <small className={styles.errorText}>{error}</small> : null}
    </section>
  );
}
