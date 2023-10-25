import Accordion from '@/machine-coding/accordion/App';
import Autocomplete from '@/machine-coding/autocomplete-offline/autocomplete';
import AutocompleteOnline from '@/machine-coding/autocomplete-offline/autocompleteOnline';
import BMICalculator from '@/machine-coding/bmi-calculator/App';
import ChallengeNavbar from '@/components/challenge-navbar/ChallengeNavbar';
import Background from '@/machine-coding/background-changer/Background';
import ColorMixer from '@/machine-coding/color-mixer';
import ColumnTable from '@/machine-coding/column-table/ColumnTable';
import Counter from '@/machine-coding/counter/counter';
import EmailTemplates from '@/machine-coding/email-templates/EmailTemplates';
import ExpenseTracker from '@/machine-coding/expense-tracker/App';
import FileExplorer from '@/machine-coding/file-explorer/App';
import FoodRecipe from '@/machine-coding/food-recipe/App';
import GuessNumber from '@/machine-coding/guess-number/App';
import ImageGallery from '@/machine-coding/image-gallery/App.tsx';
import InfiniteScrolling from '@/machine-coding/infinite-scrolling';
import InvestmentCalc from '@/machine-coding/investment-calculator/App';
import LightDarkMode from '@/machine-coding/light-dark-mode/App';
import MatchPair from '@/machine-coding/match-pair/MatchPair';
import Pagination from '@/machine-coding/pagination/App';
import PasswordGenerator from '@/machine-coding/password-generator/App';
import PasswordStrength from '@/machine-coding/password-strength/passwordStrength';
import ProgressBar from '@/machine-coding/progressbar/App';
import QRCodeGenerator from '@/machine-coding/qr-code-generator/App.jsx';
import QouteGenerator from '@/machine-coding/quote-generator/App.tsx';
import Stack from '@/machine-coding/stack-implementation/Stack';
import StarRating from '@/machine-coding/star-rating/App';
import Stopwatch from '@/machine-coding/stopwatch/App';
import StringTransformers from '@/machine-coding/string-transformers';
import TableColorizer from '@/machine-coding/table-colorizer/TableColorizer';
import TelephoneFormatter from '@/machine-coding/telephone-formatter';
import TemperatureConverter from '@/machine-coding/temperature-converter';
import TicTacToe from '@/machine-coding/tic-tac-toe/App';
import Toast from '@/machine-coding/toast-popup/toast';
import TodoList from '@/machine-coding/todo-list/todo';
import TwentyfiveFiveClock from '@/machine-coding/25-5-clock';
import WordCounter from '@/machine-coding/word-count';
import YourSport from '@/machine-coding/your-sport';
import { challenges } from '@/helpers/challenges';
import { useParams } from 'react-router-dom';

const reactChallenges = {
  counter: <Counter />,
  accordion: <Accordion />,
  'background-changer': <Background />,
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
  'bmi-calculator': <BMICalculator />,
  'email-templates': <EmailTemplates />,
  'expense-tracker': <ExpenseTracker />,
  pagination: <Pagination />,
  'qr-code-generator': <QRCodeGenerator />,
  'quote-generator': <QouteGenerator />,
  'image-gallery': <ImageGallery />,
  'word-count': <WordCounter />,
  'temperature-converter': <TemperatureConverter />,
  'color-mixer': <ColorMixer />,
  'string-transformers': <StringTransformers />,
  'your-sport': <YourSport />,
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
