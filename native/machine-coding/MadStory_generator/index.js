
document.addEventListener("DOMContentLoaded", function () {
    const nounInput = document.getElementById("noun");
    const verbInput = document.getElementById("verb");
    const adjectiveInput = document.getElementById("adjective");
    const adverbInput = document.getElementById("adverb");
    const generateButton = document.getElementById("generate");
    const playAgainButton = document.getElementById("play-again");
    const shareStoryTwitterButton = document.getElementById("share-story-twitter");
    
    const storyDiv = document.getElementById("story");
    const shareWhatsAppButton = document.getElementById("share-whatsapp");

    function generateStory() {
        const noun = nounInput.value;
        const verb = verbInput.value;
        const adjective = adjectiveInput.value;
        const adverb = adverbInput.value;

        const storyTemplate = `
        In a fantastical realm, there resided a ${noun} of incredible bravery.
        From a young age, this ${noun} aspired to ${verb} ${adjective}ly, diligently honing their skills ${adverb}.
        One magical day, while ${verb}ing near the ancient ${noun}, they stumbled upon an enchanted ${noun}.
        Within the depths of the ${noun}, they discovered a wondrous ${adjective} ${noun} that could ${verb} ${adverb}.
        Empowered by this artifact, they embarked on an epic journey, ${verb}ing through enchanted ${adjective} landscapes and ${noun}-filled kingdoms.
        Along their path, they encountered a wise ${noun} who imparted the secret of ${verb}ing ${adjective}ly.
        Finally, after countless ${noun}-filled days, they reached their destination and ${verb}ed ${adverb} to fulfill their destiny!
        Thus, our ${noun} became a legend, living ${adverb} ever after, proving that even in the realm of fantasy, dreams can become reality.
        
        `;

        storyDiv.textContent = storyTemplate;
    }

    generateButton.addEventListener("click", generateStory);

   
    playAgainButton.addEventListener("click", function () {
       
        nounInput.value = "";
        verbInput.value = "";
        adjectiveInput.value = "";
        adverbInput.value = "";
        storyDiv.textContent = "";
    });

    shareStoryTwitterButton.addEventListener("click", function () {
        const story = storyDiv.textContent;
        const encodedStory = encodeURIComponent(story);
        const twitterURL = `https://twitter.com/intent/tweet?text=${encodedStory}`;
        
        window.open(twitterURL, "_blank");
    });
    
    shareWhatsAppButton.addEventListener("click", shareOnWhatsApp);
    function shareOnWhatsApp() {
        const storyText = storyDiv.textContent;
    
        // Encode the story text for sharing
        const encodedStory = encodeURIComponent(storyText);
    
        // WhatsApp sharing URL (replace with your actual URL)
        const whatsappShareURL = `whatsapp://send?text=${encodedStory}`;
    
        // Check if WhatsApp is available
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.open(whatsappShareURL);
        } else {
            alert("WhatsApp sharing is only available on mobile devices with WhatsApp installed.");
        }
    }
    
    // Add an event listener for the "Share on WhatsApp" button
    
    
  
});
