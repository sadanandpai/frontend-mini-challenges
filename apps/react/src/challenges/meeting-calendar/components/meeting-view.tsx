import { Meeting } from '../types';
import classes from '../styles.module.scss';
import { getDuration } from '../utils/helper';

const oneUnit = 100 / (12 * 60);

interface Props {
  meetings: Meeting[];
}

export function MeetingView({ meetings }: Props) {
  return (
    <div>
      {meetings.map((meeting) => {
        const duration = getDuration(meeting.start, meeting.end);
        const [startHr, startMin] = meeting.start.split(':').map((x) => parseInt(x));

        return (
          <div
            key={meeting.id}
            className={classes.meeting}
            style={{
              width: `${100 / (meeting.totalConflicts + 1)}%`,
              height: `${duration * oneUnit}%`,
              top: `${((startHr - 8) * 60 + startMin) * oneUnit}%`,
              left: `${(100 / (meeting.totalConflicts + 1)) * (meeting.column - 1)}%`,
            }}
          >
            {meeting.title}
          </div>
        );
      })}
    </div>
  );
}
