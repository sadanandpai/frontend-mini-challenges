const commentContainer = document.querySelector('#commentContainer');

const createElement = (elementType = 'div', properties, ...children) => {
  const element = document.createElement(elementType);
  for (let key in properties) {
    element[key] = properties[key];
  }

  children.forEach(child => element.appendChild(child));
  return element;
};

const createComment = (name, text, settings) => {
  text = text.replaceAll('\n', '<br>');
  const p1 = createElement('p', { textContent: name, className: 'text-bold name' });
  const p2 = createElement('p', { innerHTML: text, className: 'comment-text' });

  const buttons = [];
  buttons.push(createElement('button', { textContent: 'Reply', className: 'btn btn-primary small reply' }));
  if (!settings?.hasNoEdit)
    buttons.push(createElement('button', { textContent: 'Edit', className: 'btn btn-primary small edit' }));
  if (!settings?.hasNoDelete)
    buttons.push(createElement('button', { textContent: 'Delete', className: 'btn btn-primary small delete' }));

  const btnHolder = createElement('div', { className: 'btn-holder' }, ...buttons);
  const mainComment = createElement('div', { className: 'main-comment' }, p1, p2, btnHolder);
  const subComments = createElement('div', { className: 'sub-comments' });

  return createElement('div', { className: 'comment' }, mainComment, subComments);
};

const createCommentInput = () => {
  const nameInput = createElement('input', { placeholder: 'Your name', className: 'text-bold name ' });
  const commentInput = createElement('textarea', {
    placeholder: 'comment',
    className: 'comment-text',
    rows: 2,
    cols: 30,
  });
  const postBtn = createElement('button', { textContent: 'Post', className: 'btn btn-primary small post' });
  const cancelBtn = createElement('button', { textContent: 'Cancel', className: 'btn btn-primary small cancel' });
  const btnHolder = createElement('div', { className: 'btn-holder' }, postBtn, cancelBtn);

  return createElement('div', { className: 'comment' }, nameInput, commentInput, btnHolder);
};

const toggleNeighbours = target => {
  target.nextElementSibling.disabled = !target.nextElementSibling.disabled;
  target.previousElementSibling.disabled = !target.previousElementSibling.disabled;
};

const comment = createComment('Sadanand', 'Hello, world', { hasNoDelete: true, hasNoEdit: true });
commentContainer.appendChild(comment);

let isCommentOn = false;
commentContainer.addEventListener('click', e => {
  const target = e.target;
  if (target.tagName.toLowerCase() === 'button') {
    if (target.classList.contains('reply') && !isCommentOn) {
      target.closest('.main-comment').nextElementSibling.appendChild(createCommentInput());
      isCommentOn = true;
      return;
    }

    if (target.classList.contains('edit')) {
      target.textContent = 'Save';
      target.className = 'btn btn-primary small save';
      toggleNeighbours(target);
      target.closest('.main-comment').children[1].contentEditable = true;
      return;
    }

    if (target.classList.contains('save')) {
      const commentText = target.closest('.main-comment').children[1];

      if (!commentText.textContent) return;
      target.textContent = 'Edit';
      target.className = 'btn btn-primary small edit';

      commentText.contentEditable = false;
      toggleNeighbours(target);
      return;
    }

    if (target.classList.contains('delete')) {
      target.closest('.comment').remove();
      return;
    }

    if (target.classList.contains('cancel')) {
      target.closest('.comment').remove();
      isCommentOn = false;
      return;
    }

    if (target.classList.contains('post')) {
      const comment = target.closest('.comment');
      const name = comment.children[0].value;
      const text = comment.children[1].value;

      if (!name || !text) return;

      target.closest('.sub-comments').appendChild(createComment(name, text));
      comment.remove();
      isCommentOn = false;
      return;
    }
  }
});
