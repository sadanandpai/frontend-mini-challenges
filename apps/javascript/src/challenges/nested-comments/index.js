import { initialCommentState, initialState } from './config';
import {
  cloneAddCommentTemplate,
  cloneNewCommentTemplate,
  setDefaultControls,
  setEditControls,
} from './helpers';

const commentContainer = document.querySelector('#commentContainer');
const commentTemplate = document.querySelector('#comment-template');
const resetButton = document.querySelector('#reset');
let rootState;

function addComment(parentEl, commentState, parentState) {
  parentEl.querySelector(':scope > .sub-comments').appendChild(
    cloneAddCommentTemplate({
      username: commentState.username,
      text: commentState.text,
    })
  );
  const commentEl = parentEl.querySelector(':scope > .sub-comments > .comment-wrapper:last-child');

  commentEl.querySelector('.profile-pic').src =
    `https://i.pravatar.cc/32?u=${commentState.username}`;

  commentEl.querySelector('.reply').addEventListener('click', () => {
    if (!commentEl.querySelector(':scope > .sub-comments > .new-comment')) {
      newComment(commentEl, commentState);
    }
  });

  if (!parentState) {
    return commentEl;
  }

  commentEl.querySelector('.delete').addEventListener('click', () => {
    commentEl.remove();
    delete parentState.comments[commentState.parentCounter];
  });

  commentEl.querySelector('.edit').addEventListener('click', () => {
    setEditControls(commentEl);
  });

  commentEl.querySelector('.cancel').addEventListener('click', () => {
    commentEl.querySelector('.comment-text').innerText = commentState.text;
    setDefaultControls(commentEl);
  });

  commentEl.querySelector('.submit').addEventListener('click', () => {
    const innerText = commentEl.querySelector('.comment-text').innerText;
    if (!innerText) {
      return;
    }

    commentState.text = innerText;
    commentEl.querySelector('.comment-text').innerText = innerText;
    setDefaultControls(commentEl);
  });

  return commentEl;
}

function newComment(parentEl, parentState) {
  parentEl.querySelector(':scope > .sub-comments').appendChild(cloneNewCommentTemplate());
  const commentEl = parentEl.querySelector(':scope > .sub-comments > .comment-wrapper:last-child');
  commentEl.classList.add('new-comment');

  commentEl.querySelector('.cancel').addEventListener('click', () => {
    commentEl.remove();
  });

  commentEl.querySelector('.submit').addEventListener('click', () => {
    const username = commentEl.querySelector('.username-input').value;
    const text = commentEl.querySelector('.comment-text').innerText;

    if (!username || !text) {
      return;
    }

    const commentState = {
      username: username,
      text: text,
      counter: 0,
      parentCounter: parentState.counter,
      comments: {},
    };

    addComment(parentEl, commentState, parentState);
    parentState.comments[parentState.counter++] = commentState;
    commentEl.remove();
  });
}

function init(parentEl, parentState) {
  for (const commentState of Object.values(parentState.comments)) {
    const commentEl = addComment(parentEl, commentState, parentState);

    if (commentState.comments) {
      init(commentEl, commentState);
    }
  }
}

function loadState(state = initialCommentState) {
  commentContainer.querySelector('.sub-comments').innerHTML = '';
  rootState = state;
  const rootEl = addComment(commentContainer, rootState);
  init(rootEl, rootState);
}

resetButton.addEventListener('click', () => loadState());

window.addEventListener('beforeunload', () => {
  localStorage.setItem('state', JSON.stringify(rootState));
});

loadState(initialState);
