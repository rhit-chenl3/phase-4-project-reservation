import React from "react";
import "../index.css";
import ArbiterContainer from "./ArbiterContainer";
import CourtContainer from "./CourtContainer";
import TeamContainer from "./TeamContainer";

export default function HomePage() {

    return (
        <div className="Home">
            <div className="lander">
                <h1>ArbiterSports</h1>
                <p className="text-muted">Streamline your game scheduling process!</p>
                <CourtContainer />
                <ArbiterContainer />
                <TeamContainer />
            </div>
        </div>
    )
}
