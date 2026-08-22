const $form = document.querySelector('form'),
  $fileInput = document.querySelector('#file-input'),
  $selectedFileArea = document.querySelector('#selected-file-area');

$form.addEventListener('click', () => {
  $fileInput.click();
});

$fileInput.onchange = ({ target }) => {
  const file = target.files[0]; // getting file [0] this means if user has selected multiple files then get first one only
  let fileName = file.name;
  if (file) {
    const fileNameWithoutExt = getFileNameWithoutExtension(fileName);
    // if file name length is greater than 12 then split it and add ...
    if (fileNameWithoutExt.length > 12) {
      fileName = fileNameWithoutExt.substring(0, 12) + '... ' + getExtension(fileName);
    }
  }
  showSelectedFile(fileName);
};

function getFileNameWithoutExtension(fileName) {
  // Get the index of the last .
  const lastIndex = fileName.lastIndexOf('.');
  return fileName.substr(0, lastIndex);
}

function getExtension(fileName) {
  // Get the index of the last .
  const lastIndex = fileName.lastIndexOf('.');
  return fileName.slice(lastIndex);
}

function showSelectedFile(fileName) {
  $selectedFileArea.replaceChildren();

  const row = document.createElement('div');
  row.className = 'row';
  row.innerHTML = `<i class="fas fa-file-alt"></i>
    <div class="content">
      <div class="details">
        <span class="name"></span>
      </div>
    </div>`;
  row.querySelector('.name').textContent = fileName;
  $selectedFileArea.appendChild(row);
}
