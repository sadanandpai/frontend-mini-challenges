import { MeetingView } from './meeting-view';
import classes from '../styles.module.scss';
import { Layout, Meeting } from '../types';

interface Props {
  hours: string[];
  meetings: Meeting[];
  layout: Layout;
}

export function DayView({ hours, meetings, layout }: Props) {
  return (
    <div className={classes.day}>
      {hours.slice(1).map((hour) => (
        <div className={classes.hourSlot} key={hour}></div>
      ))}

      <MeetingView meetings={meetings} layout={layout} />
    </div>
  );
}
