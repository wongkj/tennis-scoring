"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match = /** @class */ (function () {
    function Match(props) {
        var _this = this;
        /**
         * Starting the match and initailizing all the variables to their
         * default values.
         * @return {String}      Announcing the start of the Set. Who the players are.
         */
        this.startTennisMatch = function () {
            try {
                _this.gameScore = [0, 0];
                _this.setScore = [0, 0];
                _this.gameOver = false;
                _this.winner = '';
                return "Set starts. " + _this.player1Name + " and " + _this.player2Name + " are playing.";
            }
            catch (error) {
                return 'There was an error starting the match.';
            }
        };
        /**
         * Executes player 1 scoring.
         * @return {String}      Player 1 scores announcement.
         */
        this.player1Scores = function () {
            try {
                if (_this.gameOver) {
                    return "Match is over. " + _this.winner + " is the winner.";
                }
                _this.gameScore[0]++;
                _this.checkGameScore();
                return "Player 1 scores";
            }
            catch (error) {
                return 'There wasn an error with scoring for player 1.';
            }
        };
        /**
         * Executes player 2 scoring.
         * @return {String}      Player 2 scores announcement.
         */
        this.player2Scores = function () {
            try {
                if (_this.gameOver) {
                    return "Match is over. " + _this.winner + " is the winner.";
                }
                _this.gameScore[1]++;
                _this.checkGameScore();
                return "Player 2 scores";
            }
            catch (error) {
                return 'There was an error with scoring for player 2.';
            }
        };
        /**
         * Checks the current score of the current game to see if a player
         * has won. It also calls the checSetWin() function to see if
         * someone has won the set.
         * @return {String}      The name of the player that was won the game.
         */
        this.checkGameScore = function () {
            try {
                var player1Score = _this.gameScore[0];
                var player2Score = _this.gameScore[1];
                if (player1Score > 3 || player2Score > 3) {
                    if (player1Score - player2Score > 1) {
                        _this.setScore[0]++;
                        _this.checkSetWin();
                        if (!_this.gameOver) {
                            _this.gameScore[0] = 0;
                            _this.gameScore[1] = 0;
                        }
                        return _this.player1Name + " has won the game.";
                    }
                    else if (player2Score - player1Score > 1) {
                        _this.setScore[1]++;
                        _this.checkSetWin();
                        if (!_this.gameOver) {
                            _this.gameScore[0] = 0;
                            _this.gameScore[1] = 0;
                        }
                        return _this.player2Name + " has won the game.";
                    }
                }
            }
            catch (error) {
                return 'There was an error with checking the score of the game.';
            }
        };
        /**
         * Checks to see if a player has won the set.
         * @return {String}      The name of the player that has won the set.
         */
        this.checkSetWin = function () {
            try {
                var player1SetScore = _this.setScore[0];
                var player2SetScore = _this.setScore[1];
                var setDiff = Math.abs(player1SetScore - player2SetScore);
                if ((player1SetScore > 5 || player2SetScore > 5) && setDiff > 1) {
                    if (player1SetScore > player2SetScore) {
                        _this.winner = "" + _this.player1Name;
                        _this.gameOver = true;
                        return _this.player1Name + " has won the set.";
                    }
                    else {
                        _this.winner = "" + _this.player2Name;
                        _this.gameOver = true;
                        return _this.player2Name + " has won the set.";
                    }
                }
            }
            catch (error) {
                return 'There was an error with checking who won the set.';
            }
        };
        /**
         * Converts the game score (which are numerical integers) into their Tennis equivalent
         * in string.
         * @param  {number} diff The absolute difference between Player 1 and Player 2 game score.
         * @param  {number} gameScore The current game score of the player.
         * @return {String}      The .
         */
        this.getGameScoreInText = function (diff, gameScore) {
            try {
                if (gameScore === 0) {
                    return "0";
                }
                else if (gameScore === 1) {
                    return "15";
                }
                else if (gameScore === 2) {
                    return "30";
                }
                else if (gameScore >= 3 && diff === 0) {
                    return "Deuce";
                }
                else if (gameScore >= 3 && [-1, -2].find(function (num) { return num === diff; })) {
                    return "40";
                }
                else if (gameScore >= 3 && diff === 1) {
                    return "Adv";
                }
                else if (gameScore >= 3 && diff > 1) {
                    return "Game";
                }
            }
            catch (error) {
                return 'There was with getting the Game Score in text.';
            }
        };
        /**
         * Returns the current game score and set score.
         * @return {String}      The current game score and name score. Also, returns the
         *                       winner if there is one.
         */
        this.getScore = function () {
            try {
                var diff = _this.gameScore[0] - _this.gameScore[1];
                if (_this.gameOver) {
                    return "Match is over. " + _this.winner + " is the winner. [" + _this.setScore + "] - [" + _this.getGameScoreInText(diff, _this.gameScore[0]) + "," + _this.getGameScoreInText(diff * -1, _this.gameScore[1]) + "]";
                }
                return "[" + _this.setScore + "] - [" + _this.getGameScoreInText(diff, _this.gameScore[0]) + "," + _this.getGameScoreInText(diff * -1, _this.gameScore[1]) + "]";
            }
            catch (error) {
                return 'There wasn an error getting the score.';
            }
        };
        /**
         * Returns the gameOver variable.
         * @return {boolean}      Whether the game is over or still active.
         */
        this.getGameOver = function () {
            return _this.gameOver;
        };
        /**
         * Returns the name of the winner.
         * @return {String}      The name of the winner of the match.
         */
        this.getWinner = function () {
            return _this.winner;
        };
        /**
         * Returns the game score.
         * @return {Array<number>}      The current game score.
         */
        this.getGameScore = function () {
            return _this.gameScore;
        };
        this.player1Name = props.player1Name;
        this.player2Name = props.player2Name;
        this.gameScore = [0, 0];
        this.setScore = [0, 0];
        this.gameOver = false;
        this.winner = '';
    }
    /**
     * Returns the set score.
     * @return {Array<number>}      The current set score.
     */
    Match.prototype.getSetScore = function () {
        return this.setScore;
    };
    return Match;
}());
exports.default = Match;
