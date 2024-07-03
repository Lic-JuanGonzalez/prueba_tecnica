// import styles from '../styles/modules/Tecnologies.module.css';

// const Interests = () => {
//   return (
//     <section className={styles.interests}>
//       <div className={styles.category}>
//         <h3>Front-End</h3>
//         <div className={styles.icons}>
//           <img src="/img/HTML5.png" alt="HTML5" />
//           <img src="/img/CSS.png" alt="CSS3" />
//           <img src="/img/js.png" alt="JavaScript" />
//         </div>
//       </div>
//       <div className={styles.category}>
//         <h3>Back-End</h3>
//         <div className={styles.icons}>
//           <img src="/img/python.png" alt="Python" />
//           <img src="/img/java.png" alt="Java" />
//           <img src="/img/mysql.png" alt="MySQL" />
//         </div>
//       </div>
//       <div className={styles.category}>
//         <h3>Diseño</h3>
//         <div className={styles.icons}>
//           <img src="/img/Springboot.png" alt="Springboot" />
//           <img src="/img/Git.png" alt="Git" />
//         </div>
//       </div>
//       <div className={styles.category}>
//         <h3>Otras tecnologias</h3>
//         <div className={styles.icons}>
//           <img src="/img/photoshop.png" alt="Git" />
//           <img src="/img/figma.png" alt="SpringBoot" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Interests;

import styles from '../styles/modules/Tecnologies.module.css';

const Tecnologies = () => {
  return (
    <section className={styles.tecnologies}>
      <div className={styles.category}>
        <h3>Front-End</h3>
        <div className={styles.icons}>
          <img src="/img/HTML5.png" alt="HTML5" />
          <img src="/img/CSS.png" alt="CSS3" />
          <img src="/img/js.png" alt="JavaScript" />
        </div>
      </div>
      <div className={styles.category}>
        <h3>Back-End</h3>
        <div className={styles.icons}>
          <img src="/img/python.png" alt="Python" />
          <img src="/img/java.png" alt="Java" />
          <img src="/img/mysql.png" alt="MySQL" />
        </div>
      </div>
      <div className={styles.category}>
        <h3>Diseño</h3>
        <div className={styles.icons}>
          <img src="/img/Springboot.png" alt="Springboot" />
          <img src="/img/Git.png" alt="Git" />
        </div>
      </div>
      <div className={styles.category}>
        <h3>Otras tecnologias</h3>
        <div className={styles.icons}>
          <img src="/img/photoshop.png" alt="Photoshopt" />
          <img src="/img/figma.png" alt="Figma" />
        </div>
      </div>
    </section>
  );
};

export default Tecnologies;
