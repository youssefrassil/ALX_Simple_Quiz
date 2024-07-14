function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Retrieve the user's answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (!selectedOption) {
        alert("Please select an answer.");
        return;
    }
    const userAnswer = selectedOption.value;
    
    // Compare user's answer with correct answer and provide feedback
    const feedbackElement = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}
// Add event listener to the submit button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);
