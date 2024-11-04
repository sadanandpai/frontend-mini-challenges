import { Meeting } from '../types';
import { getNextNonOverlappingMeeting, sortMeetings, sortMeetingsByColumn } from './helper';

export function getOVerlappingMeetings(meetings: Meeting[]) {
  meetings.forEach((m) => (m.column = 0));
  const sortedMeetings = sortMeetings(meetings);

  let columnIdx = 1;
  while (sortedMeetings.some((m) => !m.column)) {
    placeMeetingsByColumn(meetings, columnIdx++);
  }

  return sortMeetingsByColumn(meetings);
}

function placeMeetingsByColumn(meetings: Meeting[], column: number) {
  let meeting: Meeting | null = getNextNonOverlappingMeeting(meetings, null);

  while (meeting) {
    meeting.column = column;
    meeting = getNextNonOverlappingMeeting(meetings, meeting);
  }
}
