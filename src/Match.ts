
export interface PlayerProps {
  player1Name: string;
  player2Name: string;
}

export default class Match {

    private player1Name: string;
    private player2Name: string;
    private gameScore: Array<number>;
    private gameOver: boolean;
    private setScore: Array<number>;
    private winner: string;

    constructor(props: PlayerProps) {
      this.player1Name = props.player1Name;
      this.player2Name = props.player2Name;
      this.gameScore = [0,0];
      this.setScore = [0,0];
      this.gameOver = false;
      this.winner = '';      
    }

  /**
   * Starting the match and initailizing all the variables to their
   * default values.
   * @return {String}      Announcing the start of the Set. Who the players are.
   */
    public startTennisMatch = (): string => {
      try {
        this.gameScore = [0,0];
        this.setScore = [0,0];
        this.gameOver = false;
        this.winner = '';
        console.log(`Set starts. ${this.player1Name} and ${this.player2Name} are playing.`)
        return `Set starts. ${this.player1Name} and ${this.player2Name} are playing.`
      } catch (error) {
        console.log('There was an error starting the match.')
        return 'There was an error starting the match.'
      }
    }

  /**
   * Executes player 1 scoring.
   * @return {String}      Player 1 scores announcement.
   */
    public player1Scores = (): string => {
      try {
        if (this.gameOver) {
          return `Match is over. ${this.winner} is the winner.`
        }
        this.gameScore[0]++
        this.checkGameScore();
        console.log(`${this.player1Name} scores.`)
        return `${this.player1Name} scores.`;
      } catch (error) {
        console.log('There wasn an error with scoring for player 1.')
        return 'There wasn an error with scoring for player 1.'
      }

    }

  /**
   * Executes player 2 scoring.
   * @return {String}      Player 2 scores announcement.
   */
    public player2Scores = (): string => {
      try {
        if (this.gameOver) {
          return `Match is over. ${this.winner} is the winner.`
        }      
        this.gameScore[1]++
        this.checkGameScore();
        console.log(`${this.player2Name} scores.`)
        return `${this.player2Name} scores.`;
      } catch (error) {
        console.error('There was an error with scoring for player 2.')
        return 'There was an error with scoring for player 2.'
      }

    }

  /**
   * Checks the current score of the current game to see if a player
   * has won. It also calls the checSetWin() function to see if 
   * someone has won the set.
   * @return {String}      The name of the player that was won the game.
   */
    private checkGameScore = (): string | undefined => {
      try {
        let player1Score = this.gameScore[0];
        let player2Score = this.gameScore[1];
  
        if (player1Score > 3 || player2Score > 3) {
          if (player1Score - player2Score > 1) {
            this.setScore[0]++;
            this.checkSetWin();
            if (!this.gameOver) {
              this.gameScore[0] = 0;
              this.gameScore[1] = 0;
            }
            return `${this.player1Name} has won the game.`;
          } else if (player2Score - player1Score > 1) {
            this.setScore[1]++;
            this.checkSetWin();
            if (!this.gameOver) {
              this.gameScore[0] = 0;
              this.gameScore[1] = 0;
            }
            return `${this.player2Name} has won the game.`;
          }
        }
      } catch (error) {
        console.error('There was an error with checking the score of the game.')
        return 'There was an error with checking the score of the game.'
      }

    }

  /**
   * Checks to see if a player has won the set.
   * @return {String}      The name of the player that has won the set.
   */
    private checkSetWin = (): string | undefined => {
      try {
        let player1SetScore = this.setScore[0];
        let player2SetScore = this.setScore[1];
        let setDiff = Math.abs(player1SetScore - player2SetScore)
  
        if ((player1SetScore > 5 || player2SetScore > 5) && setDiff > 1) {
          if (player1SetScore > player2SetScore) {
            this.winner = `${this.player1Name}`;
            this.gameOver = true;
            console.log(`${this.player1Name} has won the set.`)
            return `${this.player1Name} has won the set.`;
          } else {
            this.winner = `${this.player2Name}`;
            this.gameOver = true;
            console.log(`${this.player2Name} has won the set.`)
            return `${this.player2Name} has won the set.`;
          }
        }
      } catch (error) {
        console.log('There was an error with checking who won the set.')
        return 'There was an error with checking who won the set.'
      }

    }

  /**
   * Converts the game score (which are numerical integers) into their Tennis equivalent
   * in string.
   * @param  {number} diff The absolute difference between Player 1 and Player 2 game score.
   * @param  {number} gameScore The current game score of the player.
   * @return {String}      The .
   */
    private getGameScoreInText = (diff: number, gameScore: number): string | undefined => {
      try {
        if (gameScore === 0) {
          return "0";
        } else if (gameScore === 1) {
          return "15";
        } else if (gameScore === 2) {
          return "30";
        } else if (gameScore >= 3 && diff === 0) {
          return "Deuce";
        } else if (gameScore >= 3 && [-1,-2].find(num => num === diff)) {
          return "40";
        } else if (gameScore >= 3 && diff === 1) {
          return "Adv";
        } else if (gameScore >= 3 && diff > 1) {
          return "Game";
        }
      } catch (error) {
        console.log('There was with getting the Game Score in text.')
        return 'There was with getting the Game Score in text.'
      }

    }

  /**
   * Returns the current game score and set score.
   * @return {String}      The current game score and name score. Also, returns the 
   *                       winner if there is one.
   */
    public getScore = (): string => {
      try {
        const diff = this.gameScore[0] - this.gameScore[1];
        if (this.gameOver) {
          console.log(`Match is over. ${this.winner} is the winner. [${this.setScore}] - [${this.getGameScoreInText(diff, this.gameScore[0])},${this.getGameScoreInText(diff * -1, this.gameScore[1])}]`)
          return `Match is over. ${this.winner} is the winner. [${this.setScore}] - [${this.getGameScoreInText(diff, this.gameScore[0])},${this.getGameScoreInText(diff * -1, this.gameScore[1])}]`
        }
        console.log(`Score: [${this.setScore}] - [${this.getGameScoreInText(diff, this.gameScore[0])},${this.getGameScoreInText(diff * -1, this.gameScore[1])}]`)
        return `Score: [${this.setScore}] - [${this.getGameScoreInText(diff, this.gameScore[0])},${this.getGameScoreInText(diff * -1, this.gameScore[1])}]`
      } catch (error) {
        console.log('There wasn an error getting the score.')
        return 'There wasn an error getting the score.'
      }
    }

  /**
   * Returns the gameOver variable.
   * @return {boolean}      Whether the game is over or still active.
   */

    public getGameOver = (): boolean => {
      return this.gameOver;
    }

  /**
   * Returns the name of the winner.
   * @return {String}      The name of the winner of the match.
   */
    public getWinner = (): string => {
      return this.winner;
    }

  /**
   * Returns the game score.
   * @return {Array<number>}      The current game score.
   */
    public getGameScore = (): Array<number> => {
      return this.gameScore;
    }

  /**
   * Returns the set score.
   * @return {Array<number>}      The current set score.
   */
    public getSetScore() {
      return this.getScore();
    }

}