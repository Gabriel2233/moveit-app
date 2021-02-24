import { useChallenges } from "../contexts/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export const ExperienceBar = () => {
  const { currentXp, experienceToNextLevel } = useChallenges();
  const currentLevelPercentage = (currentXp * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0xp</span>
      <div>
        <div style={{ width: `${currentLevelPercentage}%` }}></div>
        <span
          className={styles.currentExperience}
          style={{ left: `${currentLevelPercentage}%` }}
        >
          {" "}
          {currentXp} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};
