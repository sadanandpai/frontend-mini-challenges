import Accordion from '@/challenges/accordion/App';
import AdvancedCounter from '@/challenges/advanced-counter/advanced-counter';
import AnagramChecker from '@/challenges/anagram-checker/App';
import AnalogClock from '@/challenges/analog-clock/analog-clock';
import Anuvadak from '@/challenges/anuvadak/App';
import AutocompleteOffline from '@/challenges/autocomplete/autocompleteOffline';
import AutocompleteOnline from '@/challenges/autocomplete/autocompleteOnline';
import BMICalculator from '@/challenges/bmi-calculator/App';
import Background from '@/challenges/background-changer/Background';
import Calculator from '@/challenges/calculator/App';
import ChallengeNavbar from '@/components/challenge-navbar/ChallengeNavbar';
import ChessBoard from '@/challenges/chess-board/App';
import ChipsInput from '@/challenges/chip-input/App';
import Circles from '@/challenges/circles/circles';
import ColorMixer from '@/challenges/color-mixer';
import ColumnTable from '@/challenges/column-table/ColumnTable';
import Counter from '@/challenges/counter/counter';
import DigitalClock from '@/challenges/7-segment-digital-clock/DigitalClock';
import DraggableList from '@/challenges/drag-drop/DraggableList';
import EmailTemplates from '@/challenges/email-templates/EmailTemplates';
import EmojiPicker from '@/challenges/emoji-picker/App';
import ExpenseTracker from '@/challenges/expense-tracker/App';
import FeedbackModal from '@/challenges/feedback-modal/App';
import FifteenPuzzle from '@/challenges/15puzzle/App.tsx';
import FileExplorer from '@/challenges/file-explorer/App';
import FoodRecipe from '@/challenges/food-recipe/App';
import GridLights from '@/challenges/grid-lights/App';
import GuessNumber from '@/challenges/guess-number/App';
import ImageGallery from '@/challenges/image-gallery/App';
import InfiniteScroll from '@/challenges/infinite-scroll';
import InlineOptions from '@/challenges/inline-options/App';
import InvestmentCalc from '@/challenges/investment-calculator/App';
import LightDarkMode from '@/challenges/light-dark-mode/App';
import MatchPair from '@/challenges/match-pair/MatchPair';
import MeetingCalendar from '@/challenges/meeting-calendar/App';
import MemoryGame from '@/challenges/memory-game';
import ModalPopup from '@/challenges/modal-popup/App';
import NestedCheckbox from '@/challenges/nested-checkbox/App';
import NestedComments from '@/challenges/nested-comments/App';
import NestedDropdown from '@/challenges/nested-dropdown/App';
import Otp from '@/challenges/otp/App';
import Pagination from '@/challenges/pagination/App';
import PasswordGenerator from '@/challenges/password-generator/App';
import PasswordStrength from '@/challenges/password-strength/passwordStrength';
import ProgressBar from '@/challenges/progressbar/App';
import QuizApp from '@/challenges/quiz-app/App';
import ShapeDrawer from '@/challenges/shape-drawer/App';
import Stack from '@/challenges/stack-implementation/Stack';
import StarRating from '@/challenges/star-rating/App';
import Stepper from '@/challenges/stepper/App';
import Stopwatch from '@/challenges/stopwatch/App';
import StringTransformers from '@/challenges/string-transformers';
import Tab from '@/challenges/tab/App';
import TableColorizer from '@/challenges/table-colorizer/table-colorizer';
import TelephoneFormatter from '@/challenges/telephone-formatter';
import TemperatureConverter from '@/challenges/temperature-converter';
import TicTacToe from '@/challenges/tic-tac-toe/App';
import Toast from '@/challenges/toast-popup/toast';
import TodoList from '@/challenges/todo-list/todo';
import TrafficLights from '@/challenges/traffic-lights/App';
import TransferListApp from '@/challenges/transfer-list/TransferListApp';
import Reversi from '@/challenges/reversi/App';
import TwentyfiveFiveClock from '@/challenges/25-5-clock';
import WaterBalancer from '@/challenges/water-balancer/App';
import WordConnect from '@/challenges/word-connect/App';
import WordCounter from '@/challenges/word-count';
import YourSport from '@/challenges/your-sport';
import { reactChallenges } from '@fmc/data/content';
import { useParams } from 'react-router-dom';

const reactChallengesMap = {
  'transfer-list': <TransferListApp />,
  counter: <Counter />,
  'advanced-counter': <AdvancedCounter />,
  accordion: <Accordion />,
  'background-changer': <Background />,
  'star-rating': <StarRating />,
  'light-dark-mode': <LightDarkMode />,
  'guess-number': <GuessNumber />,
  'telephone-formatter': <TelephoneFormatter />,
  'toast-popup': <Toast />,
  'password-strength': <PasswordStrength />,
  'todo-list': <TodoList />,
  'investment-calculator': <InvestmentCalc />,
  stopwatch: <Stopwatch />,
  progressbar: <ProgressBar />,
  'infinite-scroll': <InfiniteScroll />,
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
  reversi: <Reversi />,
  'expense-tracker': <ExpenseTracker />,
  pagination: <Pagination />,
  'image-gallery': <ImageGallery />,
  'word-count': <WordCounter />,
  'temperature-converter': <TemperatureConverter />,
  'color-mixer': <ColorMixer />,
  'string-transformers': <StringTransformers />,
  'your-sport': <YourSport />,
  'modal-popup': <ModalPopup />,
  'emoji-picker': <EmojiPicker />,
  otp: <Otp />,
  'traffic-lights': <TrafficLights />,
  'quiz-app': <QuizApp />,
  'chess-board': <ChessBoard />,
  'nested-dropdown': <NestedDropdown />,
  'anagram-checker': <AnagramChecker />,
  calculator: <Calculator />,
  'water-balancer': <WaterBalancer />,
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
  circles: <Circles />,
  'analog-clock': <AnalogClock />,
  'nested-checkbox': <NestedCheckbox />,
  'meeting-calendar': <MeetingCalendar />,
  'grid-lights': <GridLights />,
  anuvadak: <Anuvadak />,
  'shape-drawer': <ShapeDrawer />,
};

function Challenge() {
  const params = useParams();
  const id = params?.id ?? '';

  return (
    <>
      <ChallengeNavbar
        title={reactChallenges.get(id)?.title}
        description={reactChallenges.get(id)?.description}
        sourceCodeLink={reactChallenges.get(id)?.sourceCodeLink ?? reactChallenges.get(id)?.link}
      />
      <div className="container">{reactChallengesMap[id]}</div>
    </>
  );
}

export default Challenge;
