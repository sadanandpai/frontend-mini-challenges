import { ETag } from '@fmc/data/types';
import styles from './tags.module.scss';

interface Props {
  tag: ETag;
  setTag: React.Dispatch<React.SetStateAction<ETag>>;
  setSelectedChallengesByTags: React.Dispatch<React.SetStateAction<ETag[] | []>>;
}

function Tags({ tag, setTag, setSelectedChallengesByTags }: Props) {
  return (
    <div className={styles.segment}>
      {Object.entries(ETag).map(([key, value]) => (
        <button
          data-active={tag === value}
          className={styles.segmentBtn}
          key={key}
          onClick={() => {
            setTag(value);
            setSelectedChallengesByTags([value]);
          }}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

export default Tags;
