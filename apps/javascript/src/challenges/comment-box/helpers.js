const commentTemplate = document.querySelector('#comment-template');

export function cloneAddCommentTemplate({ username, text }) {
  const commentEl = commentTemplate.content.cloneNode(true);
  commentEl.querySelector('.username').textContent = username;
  commentEl.querySelector('.comment-text').innerText = text;
  commentEl.querySelector('.user-info').classList.remove('hide');
  setDefaultControls(commentEl);

  return commentEl;
}

export function cloneNewCommentTemplate() {
  const commentEl = commentTemplate.content.cloneNode(true);
  commentEl.querySelector('.username-input').classList.remove('hide');
  setNewCommentControls(commentEl);
  return commentEl;
}

export function setDefaultControls(commentEl) {
  const commentTextEl = commentEl.querySelector('.comment-text');
  commentTextEl.contentEditable = false;
  commentTextEl.classList.remove('editable');
  commentEl.querySelector('.reply').classList.remove('hide');
  commentEl.querySelector('.delete').classList.remove('hide');
  commentEl.querySelector('.edit').classList.remove('hide');
  commentEl.querySelector('.submit').classList.add('hide');
  commentEl.querySelector('.cancel').classList.add('hide');
}

export function setEditControls(commentEl) {
  const commentTextEl = commentEl.querySelector('.comment-text');
  commentTextEl.contentEditable = true;
  commentTextEl.classList.add('editable');
  commentTextEl.focus();

  commentEl.querySelector('.reply').classList.add('hide');
  commentEl.querySelector('.delete').classList.add('hide');
  commentEl.querySelector('.edit').classList.add('hide');
  commentEl.querySelector('.submit').classList.remove('hide');
  commentEl.querySelector('.cancel').classList.remove('hide');
}

export function setNewCommentControls(commentEl) {
  commentEl.querySelector('.comment-text').contentEditable = true;
  commentEl.querySelector('.comment-text').classList.add('editable');
  commentEl.querySelector('.comment-text').focus();

  commentEl.querySelector('.username-input').classList.remove('hide');
  commentEl.querySelector('.cancel').classList.remove('hide');
  commentEl.querySelector('.submit').classList.remove('hide');
}
