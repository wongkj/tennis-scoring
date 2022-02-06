import Match from './Match';


describe('Test Tennis Match', () => {

  test('check names assigned to players.', () => {
    let match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });    
    let playerNames = match.startTennisMatch();
    expect(playerNames).toBe('Set starts. James and Sam are playing.');
    
    match = new Match({
      player1Name: 'Sally',
      player2Name: 'Jane'
    });    
    playerNames = match.startTennisMatch();
    expect(playerNames).toBe('Set starts. Sally and Jane are playing.');
  })

  test('Set initialized to [0,0] and Game initialized to [0,0]', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    const initialMatchScore = match.getScore();
    expect(initialMatchScore).toBe('Score: [0,0] - [0,0]')
  })

  test('gameOver set to false at the start of the set.', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    const gameOverVar = match.getGameOver();
    expect(gameOverVar).toBeFalsy();
  })

  test('The winner is set to an empty string at beginning.', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    const winner = match.getWinner();
    expect(winner).toBe('');
  })

  test('Player scores should be correct.', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    match.player1Scores();
    let gameScore = match.getGameScore();
    expect(gameScore).toEqual([1,0]);

    match.player1Scores();
    gameScore = match.getGameScore();
    expect(gameScore).toEqual([2,0])

    match.player2Scores();
    gameScore = match.getGameScore();
    expect(gameScore).toEqual([2,1])

    match.player2Scores();
    match.player2Scores();
    gameScore = match.getGameScore();
    expect(gameScore).toEqual([2,3])

    match.player1Scores();
    match.player1Scores();
    gameScore = match.getGameScore();
    expect(gameScore).toEqual([4,3])  

    // The reason the score should now be [0,0] is because
    // Player 2 won the game and therefore the game scores 
    // were reset to [0,0]
    match.player2Scores();
    match.player2Scores();
    match.player2Scores();
    gameScore = match.getGameScore();
    expect(gameScore).toEqual([0,0])  
  })

  test('Player 1 should have Advantage', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player2Scores();
    match.player2Scores();
    match.player2Scores();
    match.player1Scores();
    const gameScore = match.getScore();
    expect(gameScore).toBe('Score: [0,0] - [Adv,40]');

  })

  test('Game score should be Deuce.', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player2Scores();
    match.player2Scores();
    match.player2Scores();
    let gameScore = match.getScore();
    expect(gameScore).toBe('Score: [0,0] - [Deuce,Deuce]');

    match.player1Scores();
    match.player2Scores();
    expect(gameScore).toBe('Score: [0,0] - [Deuce,Deuce]');
  })

  test('Set score should be correct.', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player2Scores();
    match.player2Scores();
    let score = match.getScore();
    expect(score).toBe('Score: [1,0] - [0,30]');

    match.player2Scores();
    match.player2Scores();
    score = match.getScore();
    expect(score).toBe('Score: [1,1] - [0,0]');
  })

  test('Player 1 wins the set. The gameOver variable should be true', () => {
    const match = new Match({
      player1Name: 'James',
      player2Name: 'Sam'
    });
    match.startTennisMatch();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    match.player1Scores();
    let score = match.getScore();
    expect(score).toBe('Match is over. James is the winner. [6,0] - [Game,0]');

    const gameOverVar = match.getGameOver();
    expect(gameOverVar).toBeTruthy();

    const player1Scores = match.player1Scores();
    expect(player1Scores).toBe('Match is over. James is the winner.')

    const player2Scores = match.player1Scores();
    expect(player2Scores).toBe('Match is over. James is the winner.')
  })

})