// import styles from '../styles/modules/Header.module.css';

// const Header = () => (
//   <header className={styles.header}>
//     <h1 className={styles.name}>\GonzDev/</h1>
//     <img src="../img/profile.png" alt="Profile" className={styles.profileImage} />
//   </header>
// );

// export default Header;

// Header.js
import styles from '../styles/modules/Header.module.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Header = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Front-End Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false,
      showCursor: false,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.profileImage}>
        <img src="/img/profile.png" alt="Profile" className={styles.profileImage} />
      </div>
      <div className={styles.textContainer}>
        <h1>GonzDev</h1>
        <h2 ref={typedElement}></h2>
      </div>
    </header>
  );
};

export default Header;

