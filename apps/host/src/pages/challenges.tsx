import { Link, useNavigate, useParams } from 'react-router-dom';
import { jsChallenges, vueChallenges, reactChallenges } from '@fmc/data/content';
import { useEffect } from 'react';
import ChallengeGrid from '@/components/modules/challenges/challenge-grid/challenge-grid';
import ScrollBtn from '@/components/common/scroll-to-top/scroll-btn';
import Navbar from '@/components/common/navbar/navbar';

const techMap = new Map([
  ['javascript', { title: 'JS', challenges: jsChallenges, link: '/javascript/src/challenges/' }],
  ['react', { title: 'React', challenges: reactChallenges, link: '/react/#/' }],
  ['vue', { title: 'Vue', challenges: vueChallenges, link: '/vue/#' }],
  // ['angular', { title: 'Angular', challenges: angularChallenges, link: '/angular/#/challenges/' }],
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
        {techMap.get(tech)!.title} Mini Challenges
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
