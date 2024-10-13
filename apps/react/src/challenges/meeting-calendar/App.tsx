import { DayView } from './components/day-view';
import { HourView } from './components/hour-view';
import { getMeetings, sortMeetings, getColumnSortedMeetings } from './utils/helper';
import classes from './styles.module.scss';

const hours = [
  '8 am',
  '9 am',
  '10 am',
  '11 am',
  '12 pm',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
  '6 pm',
  '7 pm',
  '8 pm',
];
const randomMeetings = getMeetings();
const sortedMeetings = sortMeetings(randomMeetings);
const meetings = getColumnSortedMeetings(sortedMeetings);

export default function Calendar() {
  return (
    <div className={classes.holder}>
      <HourView hours={hours} />
      <DayView hours={hours} meetings={meetings} />
    </div>
  );
}
