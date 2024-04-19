export interface Comment {
  id: number;
  text: string;
  replies: Comment[];
}

const initialData: Comment[] = [
  {
    id: 1,
    text: 'Hello world! How are you?',
    replies: [
      {
        id: 2,
        text: 'Hey, I am fine, wau?',
        replies: [],
      },
    ],
  },
];

export default initialData;
