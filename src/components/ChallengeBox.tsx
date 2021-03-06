import { useChallenges } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge } = useChallenges();

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo Desafio</strong>

            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>

          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
};
