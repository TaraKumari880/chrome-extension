Voice-Controlled LinkedIn Saved Posts Navigation

Instructions:

1.Setup:
      Ensure the code is integrated into a webpage with access to the LinkedIn interface.
      Include the necessary HTML structure for the navigation elements (e.g., .global-nav__primary-items).
2.Keyboard Shortcut:
       Press Shift + Alt + O to open the saved posts page directly.

3.Voice Recognition:
     
       Start speaking and say "open post" to trigger the navigation to the saved posts page.
       Ensure your browser supports the SpeechRecognition API, and the microphone is enabled.

Code Overview:

Creating Navigation Elements:

  JavaScript code dynamically creates a link (<a>) to the LinkedIn saved posts page and appends it to the navigation menu.

Keyboard Shortcut Event:

     The handleKeyDown function listens for a specific keyboard shortcut (Shift + Alt + O) and triggers a click on the saved posts link.

Speech Recognition: 

      Initializes the SpeechRecognition object and starts continuous speech recognition.

      On speech recognition results, it checks if the transcript includes the phrase "open post" and triggers a click on the saved posts link accordingly.

      The onend event ensures continuous speech recognition even after it stops.

 
Additional Notes:  

    The code utilizes browser-specific features such as webkitSpeechRecognition for speech recognition. Ensure compatibility with the target browser.
    
    Error handling for speech recognition errors can be enabled by uncommenting the provided code block (onerror event).
    
    Customize the voice commands and keyboard shortcuts as needed for better usability.


 Compatibility:   

     The code has been tested on modern browsers that support the SpeechRecognition API, such as Google Chrome.
     
     Ensure compatibility with the target browser environment and LinkedIn's interface.


Disclaimer:

    Use the code responsibly and ensure compliance with LinkedIn's terms of service and API usage policies.Modify the code according to your specific requirements and use case.

Shcreenshort image

![Screenshot (540)](https://github.com/TaraKumari880/chrome-extension/assets/103999593/2a44ec35-fb6d-430d-8bc7-d16c30215ae2)

![Screenshot (539)](https://github.com/TaraKumari880/chrome-extension/assets/103999593/f61b2638-d55b-4dd9-b05d-2b23fb442912)

![Screenshot (541)](https://github.com/TaraKumari880/chrome-extension/assets/103999593/92a88292-7cc7-4586-a4e4-075d9b4b9605)



