const outputCode = document.getElementById('css-code');

const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function (slider) {
  slider.addEventListener('input', createBlob);
});

const inputs = document.querySelectorAll("input[type='number']");
inputs.forEach(function (inp) {
  inp.addEventListener('change', createBlob);
});

function createBlob() {
  const radiusOne = sliders[0].value;
  const radiusTwo = sliders[1].value;
  const radiusThree = sliders[2].value;
  const radiusFour = sliders[3].value;

  const blobHeight = inputs[0].value;
  const blobWidth = inputs[1].value;

  const borderRadius = `${radiusOne}% ${100 - radiusOne}% ${
    100 - radiusThree
  }% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

  document.getElementById(
    'blob'
  ).style.cssText = `border-radius: ${borderRadius}; height: ${blobHeight}px; width: ${blobWidth}px`;

  outputCode.value = `border-radius: ${borderRadius};`;
}

document.getElementById('copy').addEventListener('click', function () {
  outputCode.select();
  document.execCommand('copy');
  alert('Code copied!');
});
