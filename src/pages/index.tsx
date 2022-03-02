/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard";

import { RocketDraw } from "../styles/rocketDraw";
import { Filter } from "../components/Filter";

export default function App() {
  return (
    <>
      <Header />
      <Dashboard />
      {/* <Filter /> */}

      {/* Rocket Draw background */}
      <RocketDraw>
        <div>
          <span>
            <img src="assets/creating.png" alt="character" />
          </span>
        </div>
        <div>
          <img src="assets/rocket.png" alt="rocket" />
        </div>
      </RocketDraw>
    </>
  );
}