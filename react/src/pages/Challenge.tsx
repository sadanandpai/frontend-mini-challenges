import Accordion from '@/machine-coding/accordion/App';
import Autocomplete from '@/machine-coding/autocomplete-offline/autocomplete';
import AutocompleteOnline from '@/machine-coding/autocomplete-offline/autocompleteOnline';
import ChallengeNavbar from '@/components/challenge-navbar/ChallengeNavbar';
import ColumnTable from '@/machine-coding/column-table/ColumnTable';
import Counter from '@/machine-coding/counter/counter';
import FileExplorer from '@/machine-coding/file-explorer/App';
import FoodRecipe from '@/machine-coding/food-recipe/App';
import GuessNumber from '@/machine-coding/guess-number/App';
import InfiniteScrolling from '@/machine-coding/infinite-scrolling';
import InvestmentCalc from '@/machine-coding/investment-calculator/App';
import LightDarkMode from '@/machine-coding/light-dark-mode/App';
import MatchPair from '@/machine-coding/match-pair/MatchPair';
import PasswordGenerator from '@/machine-coding/password-generator/App';
import PasswordStrength from '@/machine-coding/password-strength/passwordStrength';
import ProgressBar from '@/machine-coding/progressbar/App';
import Stack from '@/machine-coding/stack-implementation/Stack';
import StarRating from '@/machine-coding/star-rating/App';
import Stopwatch from '@/machine-coding/stopwatch/App';
import TableColorizer from '@/machine-coding/table-colorizer/TableColorizer';
import TelephoneFormatter from '@/machine-coding/telephone-formatter';
import TicTacToe from '@/machine-coding/tic-tac-toe/App';
import Toast from '@/machine-coding/toast-popup/toast';
import TodoList from '@/machine-coding/todo-list/todo';
import TwentyfiveFiveClock from '@/machine-coding/25-5-clock';
import { challenges } from '@/helpers/challenges';
import { useParams } from 'react-router-dom';

const reactChallenges = {
  counter: <Counter />,
  accordion: <Accordion />,
  'star-Rating': <StarRating />,
  'light-dark-mode': <LightDarkMode />,
  'Guess-the-number': <GuessNumber />,
  'telephone-formatter': <TelephoneFormatter />,
  'toast-popup': <Toast />,
  'password-strength': <PasswordStrength />,
  'todo-list': <TodoList />,
  'investment-calculator': <InvestmentCalc />,
  stopwatch: <Stopwatch />,
  progressbar: <ProgressBar />,
  'infinite-scrolling': <InfiniteScrolling />,
  'file-explorer': <FileExplorer />,
  'autocomplete-offline': <Autocomplete />,
  'autocomplete-online': <AutocompleteOnline />,
  'tic-tac-toe': <TicTacToe />,
  stack: <Stack />,
  'food-recipe': <FoodRecipe />,
  'match-pair': <MatchPair />,
  'password-generator': <PasswordGenerator />,
  'column-table': <ColumnTable />,
  'table-colorizer': <TableColorizer />,
  '25-5-clock': <TwentyfiveFiveClock />,
};

function Challenge() {
  const params = useParams();
  const id = params?.id ?? '';

  return (
    <>
      <ChallengeNavbar title={challenges.get(id)?.title} />
      <div className="container">{reactChallenges[id]}</div>
    </>
  );
}

export default Challenge;
