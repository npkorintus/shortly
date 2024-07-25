import React, { useEffect, useState } from 'react';
import styles from '../styles/UrlList.module.css';

function copyText(text) {
  navigator.clipboard.writeText(text);
}

export default function UrlList(props) {
  const { urlList, isMobile } = props;
  const [copiedUrl, setCopiedUrl] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
     isClient ? <div className={`${styles.urlList} narrowWidth`}>
      {urlList?.length > 0 && urlList.map((url, index) => (
        <div key={index} className={styles.urlCard}>
          <div className={styles.longUrl}>{url.longUrl}</div>
          <hr className={styles.horizontalLine} />
          <div className={styles.shortUrl} style={{ width: '40%', textAlign: 'right' }}>{url.shortUrl}</div>
          <div className={styles.copyBtnContainer}>
            <button
              style={{ width: isMobile ? '100%' : '120px' }}
              className={copiedUrl === index ? styles.btnCopied : styles.btnCopy}
              onClick={() => {
                copyText(url.shortUrl);
                setCopiedUrl(index);
              }}
            >
              {copiedUrl === index ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      ))}
    </div> : <div>Loading...</div>
  );
}
