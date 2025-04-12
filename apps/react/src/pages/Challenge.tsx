import { useParams } from 'react-router-dom';
import { reactChallenges } from '@fmc/data/content';
import ChallengeNavbar from '@/components/challenge-navbar/ChallengeNavbar';

import FifteenPuzzle from '@/challenges/15puzzle/App.tsx';
import Accordion from '@/challenges/accordion/App';
import AutocompleteOffline from '@/challenges/autocomplete/autocompleteOffline';
import AutocompleteOnline from '@/challenges/autocomplete/autocompleteOnline';
import AnagramChecker from '@/challenges/anagram-checker/App';
import BMICalculator from '@/challenges/bmi-calculator/App';
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
import InfiniteScroll from '@/challenges/infinite-scroll';
import InvestmentCalc from '@/challenges/investment-calculator/App';
import LightDarkMode from '@/challenges/light-dark-mode/App';
import MatchPair from '@/challenges/match-pair/MatchPair';
import NestedDropdown from '@/challenges/nested-dropdown/App';
import Pagination from '@/challenges/pagination/App';
import PasswordGenerator from '@/challenges/password-generator/App';
import PasswordStrength from '@/challenges/password-strength/passwordStrength';
import ProgressBar from '@/challenges/progressbar/App';
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
import ProgrammingMultiverse from '@/challenges/programming-multiverse';
import Otp from '@/challenges/otp/App';
import TrafficLights from '@/challenges/traffic-lights/App';
import QuizApp from '@/challenges/quiz-app/App';
import ChessBoard from '@/challenges/chess-board/App';
import Calculator from '@/challenges/calculator/App';
import WaterBalancer from '@/challenges/water-balancer/App';
import TransferListApp from '@/challenges/transfer-list/TransferListApp';
import WordConnect from '@/challenges/word-connect/App';
import Stepper from '@/challenges/stepper/App';
import InlineOptions from '@/challenges/inline-options/App';
import DigitalClock from '@/challenges/7-segment-digital-clock/DigitalClock';
import NestedComments from '@/challenges/nested-comments/App';
import MemoryGame from '@/challenges/memory-game';
import ChipsInput from '@/challenges/chip-input/App';
import Tab from '@/challenges/tab/App';
import DraggableList from '@/challenges/drag-drop/DraggableList';
import Circles from '@/challenges/circles/circles';
import AnalogClock from '@/challenges/analog-clock/analog-clock';
import AdvancedCounter from '@/challenges/advanced-counter/advanced-counter';
import NestedCheckbox from '@/challenges/nested-checkbox/App';
import MeetingCalendar from '@/challenges/meeting-calendar/App';
import GridLights from '@/challenges/grid-lights/App';

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
  'programming-multiverse': <ProgrammingMultiverse />,
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
