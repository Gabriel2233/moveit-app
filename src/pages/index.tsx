import React from "react";
import Head from "next/head";

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { Profile } from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

function App() {
  return (
    <>
      <Head>
        <title>Home | move.it</title>
      </Head>
      <div className={styles.container}>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
