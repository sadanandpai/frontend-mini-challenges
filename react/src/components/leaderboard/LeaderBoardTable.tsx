import { useEffect } from 'react'
import styles from './leaderboard.module.scss'
import { generateLeaderboardData } from '@/helpers/leaderboard'


export const LeaderBoardTable = () => {

    useEffect(() => {
        const leaderBoardData = generateLeaderboardData()
        console.log(leaderBoardData)
    }, [])

    return (

        <h1 className={styles.comingSoon}>Coming soon !</h1>
    )

}