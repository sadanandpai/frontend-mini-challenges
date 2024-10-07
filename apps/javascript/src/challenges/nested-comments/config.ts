export const initialCommentState = {
  username: 'John Doe',
  time: 1727458711867,
  text: "Welcome! You can reply to the comments. But you can't delete the initial comment.",
  counter: 1,
  parentCounter: 0,
  comments: {
    '0': {
      username: 'User 1',
      text: 'You can reply nested or delete any comment. You can edit the existing comments.',
      counter: 1,
      parentCounter: 0,
      comments: {
        '0': {
          username: 'User 2',
          text: 'Refresh & see the changes persist. You can reset the comments to the initial state',
          counter: 0,
          parentCounter: 0,
          comments: {},
        },
      },
    },
  },
};

const storage = localStorage.getItem('state');
export const initialState = storage
  ? JSON.parse(storage)
  : JSON.parse(JSON.stringify(initialCommentState));
