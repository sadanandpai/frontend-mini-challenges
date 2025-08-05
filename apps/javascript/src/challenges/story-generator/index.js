import { STORY_TEMPLATES } from './stories.js';

// DOM Elements
const storyForm = document.getElementById('story-form');
const storyOutput = document.getElementById('story-output');
const storyDiv = document.getElementById('story');
const playAgainButton = document.getElementById('play-again');
const shareStoryTwitterButton = document.getElementById('share-story-twitter');

// Form inputs
const nounInput = document.getElementById('noun');
const verbInput = document.getElementById('verb');
const adjectiveInput = document.getElementById('adjective');
const adverbInput = document.getElementById('adverb');

// Button elements
const generateButton = document.getElementById('generate');
const buttonText = generateButton.querySelector('.button-text');

// Get a random story template
function getRandomStoryTemplate() {
  const randomIndex = Math.floor(Math.random() * STORY_TEMPLATES.length);
  return STORY_TEMPLATES[randomIndex];
}

// Generate story from form inputs
function generateStory(event) {
  event.preventDefault();

  // Show loading state
  generateButton.disabled = true;
  generateButton.classList.add('loading');
  buttonText.textContent = 'Creating your story...';

  // Get form values
  const words = {
    noun: nounInput.value.trim(),
    verb: verbInput.value.trim(),
    adjective: adjectiveInput.value.trim(),
    adverb: adverbInput.value.trim(),
  };

  // Simple validation
  if (Object.values(words).some((word) => !word)) {
    showError('Please fill in all fields');
    generateButton.disabled = false;
    generateButton.classList.remove('loading');
    buttonText.textContent = 'Generate Story';
    return;
  }

  try {
    // Get a random story template and generate the story
    const storyTemplate = getRandomStoryTemplate();
    const story = storyTemplate(words);

    // Display the story
    storyDiv.textContent = story;
    storyForm.reset();

    // Show the story and action buttons
    storyOutput.hidden = false;
    storyOutput.setAttribute('aria-hidden', 'false');

    // Scroll to the story
    storyOutput.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Set focus to the story for screen readers
    storyDiv.focus();
  } catch (error) {
    console.error('Error generating story:', error);
    showError('Oops! Something went wrong. Please try again.');
  } finally {
    // Reset button state
    generateButton.disabled = false;
    generateButton.classList.remove('loading');
    buttonText.textContent = 'Generate Story';
  }
}

// Show error message
function showError(message) {
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.setAttribute('role', 'alert');
  errorElement.setAttribute('aria-live', 'assertive');
  errorElement.textContent = message;

  // Remove any existing errors
  const existingError = document.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }

  // Insert error after the form
  storyForm.insertAdjacentElement('afterend', errorElement);

  // Focus the first input with an error
  const firstEmptyInput = [nounInput, verbInput, adjectiveInput, adverbInput].find(
    (input) => !input.value.trim()
  );

  if (firstEmptyInput) {
    firstEmptyInput.focus();
  }

  // Remove error after 5 seconds
  setTimeout(() => {
    errorElement.classList.add('fade-out');
    setTimeout(() => errorElement.remove(), 300);
  }, 5000);
}

// Reset the form and show the input fields again
function resetForm() {
  storyForm.reset();
  storyOutput.hidden = true;
  storyOutput.setAttribute('aria-hidden', 'true');

  // Focus the first input field
  nounInput.focus();

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Share story on Twitter
function shareOnTwitter() {
  try {
    const story = storyDiv.textContent;
    if (!story) {
      showError('No story to share. Please generate a story first.');
      return;
    }

    const maxLength = 280 - 25; // Leave room for URL and some padding
    let shareText = story;

    // Truncate the story if it's too long for a tweet
    if (shareText.length > maxLength) {
      shareText = `${shareText.substring(0, maxLength - 3)}...`;
    }

    const encodedText = encodeURIComponent(shareText);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&hashtags=MadLibs,StoryTime`;

    // Open in a new window with proper dimensions
    const width = 600;
    const height = 400;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    window.open(
      twitterUrl,
      'twitter-share',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  } catch (error) {
    console.error('Error sharing to Twitter:', error);
    showError('Could not share to Twitter. Please try again.');
  }
}

// Event Listeners
storyForm.addEventListener('submit', generateStory);
playAgainButton.addEventListener('click', resetForm);
shareStoryTwitterButton.addEventListener('click', shareOnTwitter);

// Add keyboard navigation to form
storyForm.addEventListener('keydown', (e) => {
  // Allow form submission with Enter key when focus is on a button
  if (e.target.tagName === 'BUTTON' && e.key === 'Enter') {
    e.preventDefault();
    e.target.click();
  }
});

// Add input validation on blur
[nounInput, verbInput, adjectiveInput, adverbInput].forEach((input) => {
  input.addEventListener('blur', () => {
    if (input.required && !input.value.trim()) {
      input.setAttribute('aria-invalid', 'true');
    } else {
      input.removeAttribute('aria-invalid');
    }
  });
});

nounInput.focus();
document.documentElement.classList.add('js-enabled');
