import { Meeting } from '../types';

const MIN_MEETINGS = window.innerWidth < 768 ? 3 : 5;

export function getMeetings() {
  // create a random number of meetings
  const meetings: Meeting[] = [];
  const numMeetings = Math.floor(Math.random() * MIN_MEETINGS) + MIN_MEETINGS;

  for (let i = 1; i <= numMeetings; i++) {
    const startHr = Math.floor(Math.random() * 12) + 8;
    const startMin = Math.floor(Math.random() * 12) * 5;

    // end hr should be be same or later than start hr
    const endHr = startHr + Math.floor(Math.random() * (20 - startHr));
    let endMin: number;
    if (endHr === startHr) {
      endMin = startMin + Math.floor((Math.random() * (60 - startMin)) / 5) * 5;
    } else {
      endMin = Math.floor(Math.random() * 12) * 5;
    }

    const start = `${startHr}:${startMin.toString().padStart(2, '0')}`;
    const end = `${endHr}:${endMin.toString().padStart(2, '0')}`;

    if (getDuration(start, end) < 15) {
      i--;
      continue;
    }

    meetings.push({
      id: i,
      title: `Meeting ${i}`,
      start,
      end,
    } as Meeting);
  }

  return meetings;
}

export function sortMeetings(meetings: Meeting[]) {
  meetings.sort((m1, m2) => {
    const [m1StartHr, m1StartMin] = m1.start.split(':').map((x) => parseInt(x));
    const [m1EndHr, m1EndMin] = m1.end.split(':').map((x) => parseInt(x));
    const [m2StartHr, m2StartMin] = m2.start.split(':').map((x) => parseInt(x));
    const [m2EndHr, m2EndMin] = m2.end.split(':').map((x) => parseInt(x));

    const m1Duration = (m1EndHr - m1StartHr) * 60 + (m1EndMin - m1StartMin);
    const m2Duration = (m2EndHr - m2StartHr) * 60 + (m2EndMin - m2StartMin);

    // earliest start time first
    if (m1StartHr < m2StartHr) {
      return -1;
    } else if (m1StartHr > m2StartHr) {
      return 1;
    }

    // earliest start minute first
    if (m1StartMin < m2StartMin) {
      return -1;
    } else if (m1StartMin > m2StartMin) {
      return 1;
    }

    // longest duration first
    if (m1Duration > m2Duration) {
      return -1;
    } else if (m1Duration < m2Duration) {
      return 1;
    }

    return 0;
  });

  return meetings;
}

export function sortMeetingsByColumn(meetings: Meeting[]) {
  meetings.sort((m1, m2) => {
    if (m1.column && m2.column) {
      return m1.column - m2.column;
    }

    return 0;
  });

  return meetings;
}

export function getDuration(start: string, end: string) {
  const [startHr, startMin] = start.split(':').map(Number);
  const [endHr, endMin] = end.split(':').map(Number);

  return (endHr - startHr) * 60 + (endMin - startMin);
}

export function getNextNonOverlappingMeeting(meetings: Meeting[], currentMeeting: Meeting | null) {
  if (!currentMeeting) {
    return meetings.find((m) => !m.column) ?? null;
  }

  const currentMeetingIdx = meetings.findIndex((m) => m.id === currentMeeting.id);

  for (let i = currentMeetingIdx + 1; i < meetings.length; i++) {
    const nextMeeting = meetings[i];
    if (!nextMeeting.column && !checkOverlap(currentMeeting, nextMeeting)) {
      return nextMeeting;
    }
  }

  return null;
}

export function checkOverlap(m1: Meeting, m2: Meeting): boolean {
  const toMinutes = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const m1Start = toMinutes(m1.start);
  const m1End = toMinutes(m1.end);
  const m2Start = toMinutes(m2.start);
  const m2End = toMinutes(m2.end);

  return m1Start < m2End && m1End > m2Start;
}
