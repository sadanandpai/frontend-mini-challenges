import InlineOptions from './InlineOptions';
import styles from './InlineOptions.module.css';
import { OptionType } from './OptionType';

const OPTIONS: OptionType[] = [
  {
    id: '1',
    text: '100ml',
  },
  {
    id: '2',
    text: '200ml',
  },
  {
    id: '3',
    text: '400ml',
  },
  {
    id: '4',
    text: '500ml',
    isDisabled: true,
  },
  {
    id: '5',
    text: '800ml',
  },
];

export default function App() {
  return (
    <div className={styles['main']}>
      <div className={styles['select-dahi']}>
        <h2>Select Size of Dahi</h2>
        <InlineOptions options={OPTIONS} />
      </div>
    </div>
  );
}
