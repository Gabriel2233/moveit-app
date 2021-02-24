import styles from '../styles/components/Profile.module.css';

export const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Gabriel2233.png" alt="" />
      <div>
        <strong>Gabriel Tiso</strong>
        <p>
          <img src="/icons/level.svg" alt="Green Level Arrow" />
          Level 2
        </p>
      </div>
    </div>
  );
};
