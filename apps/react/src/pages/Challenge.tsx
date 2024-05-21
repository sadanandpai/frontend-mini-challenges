import FifteenPuzzle from '@/challenges/15puzzle/App.tsx';
import Accordion from '@/challenges/accordion/App';
import AutocompleteOffline from '@/challenges/autocomplete/autocompleteOffline';
import AutocompleteOnline from '@/challenges/autocomplete/autocompleteOnline';
import AnagramChecker from '@/challenges/anagram-checker/App';
import BMICalculator from '@/challenges/bmi-calculator/App';
import ChallengeNavbar from '@/components/challenge-navbar/ChallengeNavbar';
import Background from '@/challenges/background-changer/Background';
import ColorMixer from '@/challenges/color-mixer';
import ColumnTable from '@/challenges/column-table/ColumnTable';
import Counter from '@/challenges/counter/counter';
import EmailTemplates from '@/challenges/email-templates/EmailTemplates';
import ExpenseTracker from '@/challenges/expense-tracker/App';
import FeedbackModal from '@/challenges/feedback-modal/App';
import FileExplorer from '@/challenges/file-explorer/App';
import FoodRecipe from '@/challenges/food-recipe/App';
import GuessNumber from '@/challenges/guess-number/App';
import ImageGallery from '@/challenges/image-gallery/App';
import InfiniteScrolling from '@/challenges/infinite-scrolling';
import InvestmentCalc from '@/challenges/investment-calculator/App';
import LightDarkMode from '@/challenges/light-dark-mode/App';
import MatchPair from '@/challenges/match-pair/MatchPair';
import NestedDropdown from '@/challenges/nested-dropdown/App';
import Pagination from '@/challenges/pagination/App';
import PasswordGenerator from '@/challenges/password-generator/App';
import PasswordStrength from '@/challenges/password-strength/passwordStrength';
import ProgressBar from '@/challenges/progressbar/App';
import QRCodeGenerator from '@/challenges/qr-code-generator/App.jsx';
import QouteGenerator from '@/challenges/quote-generator/App';
import Stack from '@/challenges/stack-implementation/Stack';
import StarRating from '@/challenges/star-rating/App';
import Stopwatch from '@/challenges/stopwatch/App';
import StringTransformers from '@/challenges/string-transformers';
import TableColorizer from '@/challenges/table-colorizer/TableColorizer';
import TelephoneFormatter from '@/challenges/telephone-formatter';
import TemperatureConverter from '@/challenges/temperature-converter';
import TicTacToe from '@/challenges/tic-tac-toe/App';
import Toast from '@/challenges/toast-popup/toast';
import TodoList from '@/challenges/todo-list/todo';
import TwentyfiveFiveClock from '@/challenges/25-5-clock';
import WordCounter from '@/challenges/word-count';
import YourSport from '@/challenges/your-sport';
import ModalPopup from '@/challenges/modal-popup/App';
import EmojiPicker from '@/challenges/emoji-picker/App';
import ProgrammingLanguageMultiverse from '@/challenges/programming-languages-multiverse';
import Otp from '@/challenges/otp/App';
import TrafficLights from '@/challenges/traffic-light/App';
import QuizApp from '@/challenges/quiz-app/App';
import ChessBoard from '@/challenges/chess-board/App';
import { reactChallenges } from '@fmc/data/content';
import { useParams } from 'react-router-dom';
import Calculator from '@/challenges/calculator/App';
import WaterBalancer from '@/challenges/water-balancer/App';
import TransferListApp from '@/challenges/transfer-list/TransferListApp';
import Timeline from '@/challenges/timeline/App';
import WordConnect from '@/challenges/word-connect/App';
import Stepper from '@/challenges/stepper/App';
import InlineOptions from '@/challenges/inline-options/App';
import DigitalClock from '@/challenges/7-segment-digital-clock/DigitalClock';
import NestedComments from '@/challenges/nested-comments/App';
import MemoryGame from '@/challenges/memory-game';
import ChipsInput from '@/challenges/chip-input/App';
import Tab from '@/challenges/tab/App';
import DraggableList from '@/challenges/drag-drop/DraggableList';

const reactChallengesMap = {
  'transfer-list': <TransferListApp />,
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
  'feedback-modal': <FeedbackModal />,
  'file-explorer': <FileExplorer />,
  'autocomplete-offline': <AutocompleteOffline />,
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
  'modal-popup': <ModalPopup />,
  'emoji-picker': <EmojiPicker />,
  'programming-languages-multiverse': <ProgrammingLanguageMultiverse />,
  otp: <Otp />,
  'traffic-lights': <TrafficLights />,
  'quiz-app': <QuizApp />,
  'chess-board': <ChessBoard />,
  'nested-dropdown': <NestedDropdown />,
  'anagram-checker': <AnagramChecker />,
  calculator: <Calculator />,
  'water-balancer': <WaterBalancer />,
  timeline: <Timeline />,
  'word-connect': <WordConnect />,
  stepper: <Stepper />,
  'inline-options': <InlineOptions />,
  'digital-clock': <DigitalClock />,
  'nested-comments': <NestedComments />,
  '15puzzle': <FifteenPuzzle />,
  'memory-game': <MemoryGame />,
  'chip-input': <ChipsInput />,
  tabs: <Tab />,
  'drag-drop': <DraggableList />,
};

function Challenge() {
  const params = useParams();
  const id = params?.id ?? '';

  return (
    <>
      <ChallengeNavbar title={reactChallenges.get(id)?.title} />
      <div className="container">{reactChallengesMap[id]}</div>
    </>
  );
}

export default Challenge;
