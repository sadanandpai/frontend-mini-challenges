import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/common/navbar/navbar';
import ScrollBtn from '@/components/common/scroll-to-top/scroll-btn';
import ChallengeGrid from '@/components/modules/challenges/challenge-grid/challenge-grid';
import { angularImg, jsImg, reactImg, cssImg, vueImg } from '@fmc/assets/images';
import {
  angularChallenges,
  jsChallenges,
  reactChallenges,
  cssChallenges,
  vueChallenges,
} from '@fmc/data/content';

const {
  VITE_PATH,
  VITE_CSS_APP_URL,
  VITE_JS_APP_URL,
  VITE_REACT_APP_URL,
  VITE_VUE_APP_URL,
  VITE_NG_APP_URL,
  DEV,
} = import.meta.env;

const cssLinkPrefix = DEV ? `${VITE_CSS_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;
const jsLinkPrefix = DEV ? `${VITE_JS_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;
const reactLinkPrefix = DEV ? `${VITE_REACT_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;
const vueLinkPrefix = DEV ? `${VITE_VUE_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;
const angularPrefix = DEV ? `${VITE_NG_APP_URL}${VITE_PATH}` : `/${VITE_PATH}`;

const techMap = new Map([
  [
    'css',
    {
      title: 'CSS',
      challenges: cssChallenges,
      link: cssLinkPrefix + '/css/src/challenges/',
      imgSrc: cssImg,
    },
  ],
  [
    'javascript',
    {
      title: 'JS',
      challenges: jsChallenges,
      link: jsLinkPrefix + '/javascript/src/challenges/',
      imgSrc: jsImg,
    },
  ],
  [
    'react',
    {
      title: 'React',
      challenges: reactChallenges,
      link: reactLinkPrefix + '/react/#/',
      imgSrc: reactImg,
    },
  ],
  [
    'vue',
    {
      title: 'Vue',
      challenges: vueChallenges,
      link: vueLinkPrefix + '/vue/#',
      imgSrc: vueImg,
    },
  ],
  [
    'angular',
    {
      title: 'Angular',
      challenges: angularChallenges,
      link: angularPrefix + '/angular/#',
      imgSrc: angularImg,
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
          techImg={techMap.get(techParam)!.imgSrc}
        />
        <ScrollBtn />
      </div>
    </>
  );
}

export default Challenges;
