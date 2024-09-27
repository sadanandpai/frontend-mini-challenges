export const initialCommentState = {
  username: 'John Doe',
  time: 1727458711867,
  text: 'Welcome to comment box challenge!',
  counter: 1,
  parentCounter: 0,
  comments: {
    '0': {
      username: 'User 1',
      text: 'You can reply to the comments or edit the existing comments',
      counter: 1,
      parentCounter: 0,
      comments: {
        '0': {
          username: 'User 2',
          text: 'You can reply nested or delete any comment. Refresh & see the changes persist',
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
  : {
      initialCommentState,
      comments: { ...initialCommentState.comments },
    };
