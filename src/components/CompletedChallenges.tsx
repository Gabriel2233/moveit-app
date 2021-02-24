import { useChallenges } from "../contexts/ChallengesContext";
import styles from "../styles/components/CompletedChallenges.module.css";

export const CompletedChallenges = () => {
  const { completedChallenges } = useChallenges();

  return (
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{completedChallenges}</span>
    </div>
  );
};
