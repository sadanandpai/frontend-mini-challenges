import { useParams } from "react-router-dom";

import classes from "./leaderboard.module.css";
import { LeaderboardEntry, generateLeaderboardData } from "@/helpers/generate-leaderboard";
import { IChallenge } from "../../../../../shared/data/types/challenge";

export const UserProfile = () => {
    const { githubid } = useParams();
    const userProfileDetails: LeaderboardEntry = generateLeaderboardData().get(githubid as string) as LeaderboardEntry;
    const challenges: IChallenge[] = userProfileDetails.contributions;
    return userProfileDetails && <div className="container">
        <h2 id="user-profile" className={classes.userProfileHeading}>
            User Profile
        </h2>
        <div className={classes.profileDetailsContainer}>
            <div className={classes.profileDetailsContainerLeft}><img src={userProfileDetails.pic} className={classes.userProfileImg} alt={"Contributor image"} /></div>
            <div className={classes.profileDetailsContainerRight}>
                <h3>Name : <span className={classes.fontWeightNormal}>{userProfileDetails.name}</span></h3>
                <h3>Github Id :  <span className={classes.fontWeightNormal}>{userProfileDetails.developer}</span></h3>
                <h3>Total Contributions : <span className={classes.fontWeightNormal}>{userProfileDetails.numberOfContributions}</span></h3>
            </div>
        </div>
        <div className={"challengesCOntainer"}>
            <h2>
                List of Contributions
            </h2>
            <ul>
                {
                    challenges?.map((challenge) =>
                        <a href={`/frontend-mini-challenges/react/#/${challenge.link}`} > <li>{challenge.title}</li></a>

                    )
                }
            </ul>
        </div>
    </div>
}