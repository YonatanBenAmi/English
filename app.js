const sentenceData = {
    A1: [
        {
            base: "I go to school.",
            tenses: {
                "Simple Present": "I go to school.",
                "Simple Past": "I went to school.",
                "Simple Future": "I will go to school.",
                "Present Continuous": "I am going to school.",
                "Past Continuous": "I was going to school.",
                "Future Continuous": "I will be going to school.",
                "Present Perfect": "I have gone to school.",
                "Past Perfect": "I had gone to school.",
                "Future Perfect": "I will have gone to school.",
                "Present Perfect Continuous": "I have been going to school.",
                "Past Perfect Continuous": "I had been going to school.",
                "Future Perfect Continuous": "I will have been going to school."
            }
        },
        {
            base: "I go to school.",
            tenses: {
                "Simple Present": "I go to school.",
                "Simple Past": "I went to school.",
                "Simple Future": "I will go to school.",
                "Present Continuous": "I am going to school.",
                "Past Continuous": "I was going to school.",
                "Future Continuous": "I will be going to school.",
                "Present Perfect": "I have gone to school.",
                "Past Perfect": "I had gone to school.",
                "Future Perfect": "I will have gone to school.",
                "Present Perfect Continuous": "I have been going to school.",
                "Past Perfect Continuous": "I had been going to school.",
                "Future Perfect Continuous": "I will have been going to school."
            }
        },
        {
            base: "I go to school.",
            tenses: {
                "Simple Present": "I go to school.",
                "Simple Past": "I went to school.",
                "Simple Future": "I will go to school.",
                "Present Continuous": "I am going to school.",
                "Past Continuous": "I was going to school.",
                "Future Continuous": "I will be going to school.",
                "Present Perfect": "I have gone to school.",
                "Past Perfect": "I had gone to school.",
                "Future Perfect": "I will have gone to school.",
                "Present Perfect Continuous": "I have been going to school.",
                "Past Perfect Continuous": "I had been going to school.",
                "Future Perfect Continuous": "I will have been going to school."
            }
        },
        {
            base: "I go to school.",
            tenses: {
                "Simple Present": "I go to school.",
                "Simple Past": "I went to school.",
                "Simple Future": "I will go to school.",
                "Present Continuous": "I am going to school.",
                "Past Continuous": "I was going to school.",
                "Future Continuous": "I will be going to school.",
                "Present Perfect": "I have gone to school.",
                "Past Perfect": "I had gone to school.",
                "Future Perfect": "I will have gone to school.",
                "Present Perfect Continuous": "I have been going to school.",
                "Past Perfect Continuous": "I had been going to school.",
                "Future Perfect Continuous": "I will have been going to school."
            }
        },
        {
            base: "I go to school.",
            tenses: {
                "Simple Present": "I go to school.",
                "Simple Past": "I went to school.",
                "Simple Future": "I will go to school.",
                "Present Continuous": "I am going to school.",
                "Past Continuous": "I was going to school.",
                "Future Continuous": "I will be going to school.",
                "Present Perfect": "I have gone to school.",
                "Past Perfect": "I had gone to school.",
                "Future Perfect": "I will have gone to school.",
                "Present Perfect Continuous": "I have been going to school.",
                "Past Perfect Continuous": "I had been going to school.",
                "Future Perfect Continuous": "I will have been going to school."
            }
        },
        {
            base: "I go to school.",
            tenses: {
                "Simple Present": "I go to school.",
                "Simple Past": "I went to school.",
                "Simple Future": "I will go to school.",
                "Present Continuous": "I am going to school.",
                "Past Continuous": "I was going to school.",
                "Future Continuous": "I will be going to school.",
                "Present Perfect": "I have gone to school.",
                "Past Perfect": "I had gone to school.",
                "Future Perfect": "I will have gone to school.",
                "Present Perfect Continuous": "I have been going to school.",
                "Past Perfect Continuous": "I had been going to school.",
                "Future Perfect Continuous": "I will have been going to school."
            }
        },
        // Add more A1 sentences
    ],
    A2: [
        {
            base: "They study English every day.",
            tenses: {
                "Simple Present": "They study English every day.",
                "Simple Past": "They studied English every day.",
                "Simple Future": "They will study English every day.",
                "Present Continuous": "They are studying English today.",
                "Past Continuous": "They were studying English yesterday.",
                "Future Continuous": "They will be studying English next week.",
                "Present Perfect": "They have studied English for years.",
                "Past Perfect": "They had studied English before moving abroad.",
                "Future Perfect": "They will have studied English by next year.",
                "Present Perfect Continuous": "They have been studying English continuously.",
                "Past Perfect Continuous": "They had been studying English before the course.",
                "Future Perfect Continuous": "They will have been studying English for a decade."
            }
        },
        // Add more A2 sentences
    ],
    B1: [
        {
            base: "We have visited Paris twice.",
            tenses: {
                "Simple Present": "We visit Paris occasionally.",
                "Simple Past": "We visited Paris twice.",
                "Simple Future": "We will visit Paris next summer.",
                "Present Continuous": "We are visiting Paris this week.",
                "Past Continuous": "We were visiting Paris when it rained.",
                "Future Continuous": "We will be visiting Paris during the festival.",
                "Present Perfect": "We have visited Paris twice.",
                "Past Perfect": "We had visited Paris before going to Nice.",
                "Future Perfect": "We will have visited Paris by next month.",
                "Present Perfect Continuous": "We have been visiting European cities.",
                "Past Perfect Continuous": "We had been visiting museums all day.",
                "Future Perfect Continuous": "We will have been visiting Paris for a week."
            }
        },
        // Add more B1 sentences
    ]
    // Add other levels
};

document.addEventListener('DOMContentLoaded', () => {
    const levelButtons = document.querySelectorAll('.level-button');
    const sentencesContainer = document.getElementById('sentences-container');
    const backToLevelsButton = document.getElementById('back-to-levels');
    const tensesModal = document.getElementById('tenses-modal');
    const modalSentenceOriginal = document.getElementById('modal-sentence-original');
    const tensesContent = document.getElementById('tenses-content');

    // Level selection event listeners
    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            levelButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const level = button.dataset.level;
            showLevelSentences(level);
        });
    });

    // Back to levels button
    backToLevelsButton.addEventListener('click', () => {
        sentencesContainer.style.display = 'none';
        document.getElementById('level-selection').style.display = 'flex';
        backToLevelsButton.style.display = 'none';
        
        // Remove active class from level buttons
        levelButtons.forEach(btn => btn.classList.remove('active'));
    });

    function showLevelSentences(level) {
        // Clear previous sentences
        sentencesContainer.innerHTML = '';

        // Hide level selection buttons
        document.getElementById('level-selection').style.display = 'none';

        // Show back to levels button
        backToLevelsButton.style.display = 'block';

        // Create sentence list container
        const sentenceList = document.createElement('div');
        sentenceList.classList.add('sentence-list');

        // Add sentences for selected level
        sentenceData[level].forEach(sentenceObj => {
            const sentenceElement = document.createElement('div');
            sentenceElement.classList.add('sentence');
            sentenceElement.textContent = sentenceObj.base;
            
            // Add click event to show tenses
            sentenceElement.addEventListener('click', () => {
                showTensesModal(sentenceObj);
            });

            sentenceList.appendChild(sentenceElement);
        });

        // Add sentence list to container
        sentencesContainer.appendChild(sentenceList);
        sentencesContainer.style.display = 'block';
    }

    function showTensesModal(sentenceObj) {
        // Set original sentence
        modalSentenceOriginal.textContent = sentenceObj.base;

        // Clear previous tenses
        tensesContent.innerHTML = '';

        // Add tenses to table
        Object.entries(sentenceObj.tenses).forEach(([tense, sentence]) => {
            const row = document.createElement('tr');
            
            const tenseCell = document.createElement('td');
            tenseCell.textContent = tense;
            
            const sentenceCell = document.createElement('td');
            sentenceCell.textContent = sentence;
            
            row.appendChild(tenseCell);
            row.appendChild(sentenceCell);
            
            tensesContent.appendChild(row);
        });

        // Show modal
        tensesModal.style.display = 'flex';
    }

    function closeTensesModal() {
        tensesModal.style.display = 'none';
    }

    // Close modal when clicking outside
    tensesModal.addEventListener('click', (e) => {
        if (e.target === tensesModal) {
            closeTensesModal();
        }
    });
});