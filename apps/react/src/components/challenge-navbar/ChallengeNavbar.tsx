import '@fmc/components';
import { useEffect, useRef } from 'react';

const { VITE_PATH, VITE_HOST_URL, DEV } = import.meta.env;

const backURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/#/react` : `/${VITE_PATH}/#/react/`;
const homeURL = DEV ? `${VITE_HOST_URL}${VITE_PATH}/` : `/${VITE_PATH}/`;

interface ChallengeModalElement extends HTMLElement {
  showModal: (options: { title: string; description: string }) => void;
}

interface Props {
  title?: string;
  description?: string;
  sourceCodeLink?: string;
}

const reactSourceCodeBaseURL =
  'https://github.com/sadanandpai/frontend-mini-challenges/tree/main/apps/react/src/challenges/';

function ChallengeNavbar({ title, description, sourceCodeLink }: Props) {
  const modalRef = useRef<{
    showModal: (options: { title: string; description: string }) => void;
  } | null>(null);

  useEffect(() => {
    // Initialize modal once
    if (!modalRef.current) {
      const modal =
        document.querySelector('challenge-modal') || document.createElement('challenge-modal');
      document.body.appendChild(modal);
      modalRef.current = modal as ChallengeModalElement;
    }
  }, []);

  useEffect(() => {
    const openBtn = document.querySelector('.open-modal-btn');
    if (!openBtn || !modalRef.current?.showModal) return;

    const handleClick = () => {
      modalRef.current?.showModal({
        title: title ?? '',
        description: description ?? '',
      });
    };

    openBtn.addEventListener('click', handleClick);
    return () => {
      openBtn.removeEventListener('click', handleClick);
    };
  }, [title, description]);

  return (
    <nav-bar
      backURL={backURL}
      homeURL={homeURL}
      titleText={title}
      sourceCodeLink={reactSourceCodeBaseURL + sourceCodeLink}
    ></nav-bar>
  );
}

export default ChallengeNavbar;
