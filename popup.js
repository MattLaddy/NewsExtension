document.addEventListener("DOMContentLoaded", function () {
    const bubbles = document.querySelectorAll('.bubble');
    const thankYouMessage = document.getElementById('thank-you');
    
    bubbles.forEach(bubble => {
      bubble.addEventListener('click', function () {
        const skew = this.getAttribute('data-value');
        
        // Send the skew result to the background script
        chrome.runtime.sendMessage({ action: "submitSurvey", skew: skew }, function(response) {
          // Handle response if needed
          console.log('Survey submitted:', response);
          
          // Display thank you message and hide the survey
          thankYouMessage.classList.remove('hidden');
          document.querySelector('.survey-container').classList.add('hidden');
        });
      });
    });
  });
  