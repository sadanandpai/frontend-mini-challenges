import Leaderboard from '@/components/modules/leaderboard/leaderboard';
import Navbar from '@/components/common/navbar/navbar';

function LeaderboardPage() {
  return (
    <>
      <Navbar title="Frontend Mini Challenges" subheading="Leaderboard" />
      <Leaderboard />
    </>
  );
}

export default LeaderboardPage;
