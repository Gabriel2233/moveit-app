import { createContext, useContext, useState } from "react";
import challenges from "../../challenges.json";

type TChallengesContext = {
  level: number;
  currentXp: number;
  experienceToNextLevel: number;
  completedChallenges: number;
  activeChallenge: TChallenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
};

type TChallenge = {
  type: "eye" | "body";
  description: string;
  amount: number;
};

const ChallengesContext = createContext({} as TChallengesContext);

export const ChallengesContextProvider: React.FC = ({ children }) => {
  const value = useProvideChallenges();

  return (
    <ChallengesContext.Provider value={value}>
      {children}
    </ChallengesContext.Provider>
  );
};

const useProvideChallenges = () => {
  const [level, setLevel] = useState(0);
  const [currentXp, setCurrentXp] = useState(0);
  const [completedChallenges, setCompletedChallenges] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const startNewChallenge = () => {
    const newChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[newChallengeIndex];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return {
    level,
    currentXp,
    experienceToNextLevel,
    completedChallenges,
    activeChallenge,
    levelUp,
    startNewChallenge,
    resetChallenge,
  };
};

export const useChallenges = () => {
  return useContext(ChallengesContext);
};
