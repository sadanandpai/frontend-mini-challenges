import { useNavigate, useParams } from 'react-router-dom';
import { jsChallenges, vueChallenges, reactChallenges, angularChallenges } from '@fmc/data/content';
import { useEffect } from 'react';
import ChallengeGrid from '@/components/modules/challenges/challenge-grid/challenge-grid';
import ScrollBtn from '@/components/common/scroll-to-top/scroll-btn';
import Navbar from '@/components/common/navbar/navbar';
import assets from '@fmc/assets/images';

const { VITE_PATH, VITE_JS_APP_URL, VITE_REACT_APP_URL, VITE_VUE_APP_URL, VITE_NG_APP_URL, DEV } =
  import.meta.env;
const jsLinkPrefix = DEV ? `${VITE_JS_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;
const reactLinkPrefix = DEV ? `${VITE_REACT_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;
const vueLinkPrefix = DEV ? `${VITE_VUE_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;
const angularPrefix = DEV ? `${VITE_NG_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;

const techMap = new Map([
  [
    'javascript',
    {
      title: 'JS',
      challenges: jsChallenges,
      link: jsLinkPrefix + '/javascript/src/challenges/',
      imgSrc: assets.jsImg,
    },
  ],
  [
    'react',
    {
      title: 'React',
      challenges: reactChallenges,
      link: reactLinkPrefix + '/react/#/',
      imgSrc: assets.reactImg,
    },
  ],
  [
    'vue',
    {
      title: 'Vue',
      challenges: vueChallenges,
      link: vueLinkPrefix + '/vue/#',
      imgSrc: assets.vueImg,
    },
  ],
  [
    'angular',
    {
      title: 'Angular',
      challenges: angularChallenges,
      link: angularPrefix + '/angular/#',
      imgSrc: assets.angularImg,
    },
  ],
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

  const links = techs.map((tech) => ({
    tech,
    imgSrc: techMap.get(tech)!.imgSrc,
    active: tech === techParam,
  }));

  return (
    <>
      <Navbar />

      <div className="container text-center">
        <ChallengeGrid
          challenges={[...techMap.get(techParam)!.challenges.values()]}
          linkPrefix={techMap.get(techParam)!.link}
          links={links}
        />
        <ScrollBtn />
      </div>
    </>
  );
}

export default Challenges;
