import React, { useState } from 'react';

import styles from '../styles/UrlList.module.css';

export default function UrlList(props) {
  const { urlList, isMobile } = props;
  const [copiedUrl, setCopiedUrl] = useState(null);

  return (
    <section className={styles.urlList}>
      {urlList?.length > 0 && urlList.map((url, index) => (
        <div key={index} className={styles.urlCard}>
          <div className={styles.longUrl}>{url.longUrl}</div>
          {isMobile && <hr />}
          <div className={styles.shortUrl} style={{ width: '40%', textAlign: 'right' }}>{url.shortUrl}</div>
          <div className={styles.copyBtnContainer}>
            <button
              style={{
                width: isMobile ? '100%' : '120px',
              }}
              className={copiedUrl === index ? styles.btnCopied : styles.btnCopy}
              onClick={() => {
                navigator.clipboard.writeText(url.shortenedUrl);
                setCopiedUrl(index);
              }}
            >
              {copiedUrl === index ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
