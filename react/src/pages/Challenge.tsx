import Accordion from '@/machine-coding/accordion/App';
import Autocomplete from '@/machine-coding/autocomplete-offline/autocomplete';
import AutocompleteOnline from '@/machine-coding/autocomplete-offline/autocompleteOnline';
import Counter from '@/machine-coding/counter/counter';
import FileExplorer from '@/machine-coding/file-explorer/App';
import GuessNumber from '@/machine-coding/guess-number/App';
import Header from '@/components/header/header';
import InfiniteScrolling from '@/machine-coding/infinite-scrolling';
import InvestmentCalc from '@/machine-coding/investment-calculator/App';
import LightDarkMode from '@/machine-coding/light-dark-mode/App';
import PasswordStrength from '@/machine-coding/password-strength/passwordStrength';
import Stack from '@/machine-coding/stack-implementation/Stack';
import ProgressBar from '@/machine-coding/progressbar/App';
import StarRating from '@/machine-coding/star-rating/App';
import Stopwatch from '@/machine-coding/stopwatch/App';
import TelephoneFormatter from '@/machine-coding/telephone-formatter';
import Toast from '@/machine-coding/toast-popup/toast';
import TodoList from '@/machine-coding/todo-list/todo';
import TicTacToe from '@/machine-coding/tic-tac-toe/App';
import { useParams } from 'react-router-dom';

const reactChallenges = [
  <Counter />,
  <Accordion />,
  <StarRating />,
  <LightDarkMode />,
  <GuessNumber />,
  <TelephoneFormatter />,
  <Toast />,
  <PasswordStrength />,
  <TodoList />,
  <InvestmentCalc />,
  <Stopwatch />,
  <ProgressBar />,
  <InfiniteScrolling />,
  <FileExplorer />,
  <Autocomplete />,
  <AutocompleteOnline />,
  <TicTacToe />,
  <Stack />
];

function Challenge() {
  const params = useParams();
  const level = params?.level ?? 0;

  return (
    <div className="container">
      <Header heading={params.name} />
      {reactChallenges[+level]}
    </div>
  );
}

export default Challenge;
