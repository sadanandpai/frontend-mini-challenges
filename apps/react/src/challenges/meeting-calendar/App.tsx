import { useState } from 'react';
import { Layout } from './types';
import { hours } from './config';
import { getMeetings } from './utils/helper';
import { DayView } from './components/day-view';
import { HourView } from './components/hour-view';
import { getSlottedMeetings } from './utils/slotted-meetings-algo';
import { getOVerlappingMeetings } from './utils/overlapping-meetings-algo';
import classes from './styles.module.scss';

export default function Calendar() {
  const [layout, setLayout] = useState(Layout.Slotted);
  const [meetings, setMeetings] = useState(getSlottedMeetings(getMeetings()));

  function onLayoutChange(layout: Layout) {
    setLayout(layout);
    setMeetings(
      layout === Layout.Overlapping
        ? getOVerlappingMeetings(meetings)
        : getSlottedMeetings(meetings)
    );
  }

  function resetMeetings() {
    const randomMeetings = getMeetings();
    setMeetings(
      layout === Layout.Overlapping
        ? getOVerlappingMeetings(randomMeetings)
        : getSlottedMeetings(randomMeetings)
    );
  }

  return (
    <>
      <div className={classes.layout}>
        <label>
          <input
            type="radio"
            name="layout"
            value="overlapping"
            checked={layout === Layout.Overlapping}
            onChange={() => onLayoutChange(Layout.Overlapping)}
          />
          Overlapping
        </label>
        <label>
          <input
            type="radio"
            name="layout"
            value="slotted"
            checked={layout === Layout.Slotted}
            onChange={() => onLayoutChange(Layout.Slotted)}
          />
          Slotted
        </label>

        <button onClick={resetMeetings}>Randomize</button>
      </div>

      <div className={classes.holder}>
        <HourView hours={hours} />
        <DayView hours={hours} meetings={meetings} layout={layout} />
      </div>
    </>
  );
}
