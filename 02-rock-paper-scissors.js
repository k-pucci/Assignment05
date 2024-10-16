function playRockPaperScissors() {
    const choices = ['rock', 'paper', 'scissors'];
    
    // Get user's choice
    let userChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    
    // Validate user input
    while (!choices.includes(userChoice)) {
        userChoice = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }
    
    // Get computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Determine the winner
    let result;
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }
    
    // Display the result
    alert(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`);
}

// Run the game
playRockPaperScissors();