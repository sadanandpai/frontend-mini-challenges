import Navbar from '@/common/navbar/Navbar';
import ScrollBtn from '@/common/scroll-to-top/ScrollBtn';
import ChallengeGrid from '@/modules/challenges/challenge-grid/challenge-grid';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { jsChallenges, vueChallenges, reactChallenges, angularChallenges } from '@fmc/data/content';
import { useEffect } from 'react';

const techMap = new Map([
  ['javascript', { challenges: jsChallenges, link: '/javascript/src/challenges/' }],
  ['react', { challenges: reactChallenges, link: '/react/#/' }],
  ['vue', { challenges: vueChallenges, link: '/vue/#/' }],
  ['angular', { challenges: angularChallenges, link: '/angular/#/' }],
]);

const techs = Array.from(techMap.keys());

function Challenges() {
  const { tech: techParam } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!techParam || !techs.includes(techParam)) {
      navigate('/');
    }
  }, [navigate, techParam]);

  if (!techParam || !techMap.get(techParam)) {
    return null;
  }

  const links = techs
    .filter((tech) => tech !== techParam)
    .map((tech) => (
      <Link to={`/${tech}`} key={tech} className="nav-switch-link">
        {tech} Mini Challenges
      </Link>
    ));

  return (
    <>
      <Navbar>{links}</Navbar>

      <div className="container text-center">
        <ChallengeGrid
          challenges={techMap.get(techParam)!.challenges}
          linkPrefix={techMap.get(techParam)!.link}
        />
        <ScrollBtn />
      </div>
    </>
  );
}

export default Challenges;
