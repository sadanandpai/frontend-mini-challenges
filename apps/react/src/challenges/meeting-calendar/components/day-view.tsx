import { MeetingView } from './meeting-view';
import classes from '../styles.module.scss';
import { Meeting } from '../types';

interface Props {
  hours: string[];
  meetings: Meeting[];
}

export function DayView({ hours, meetings }: Props) {
  return (
    <div className={classes.day}>
      {hours.slice(1).map((hour) => (
        <div className={classes.hourSlot} key={hour}></div>
      ))}

      <MeetingView meetings={meetings} />
    </div>
  );
}
