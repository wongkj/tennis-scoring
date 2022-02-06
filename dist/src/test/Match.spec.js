"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match_1 = require("../app/Match");
describe('Test Tennis Match', function () {
    test('check names assigned to players.', function () {
        var match = new Match_1.default({
            player1Name: 'James',
            player2Name: 'Sam'
        });
        var playerNames = match.startTennisMatch();
        expect(playerNames).toBe('Set starts. James and Sam are playing.');
        match = new Match_1.default({
            player1Name: 'Sally',
            player2Name: 'Jane'
        });
        playerNames = match.startTennisMatch();
        expect(playerNames).toBe('Set starts. Sally and Jane are playing.');
    });
    test('Set initialized to [0,0] and Game initialized to [0,0]', function () {
        var match = new Match_1.default({
            player1Name: 'James',
            player2Name: 'Sam'
        });
        match.startTennisMatch();
        var initialMatchScore = match.getScore();
        expect(initialMatchScore).toBe('[0,0] - [0,0]');
    });
    test('gameOver set to false at the start of the set.', function () {
        var match = new Match_1.default({
            player1Name: 'James',
            player2Name: 'Sam'
        });
        match.startTennisMatch();
        var gameOverVar = match.getGameOver();
        expect(gameOverVar).toBeFalsy();
    });
    test('The winner is set to an empty string at beginning.', function () {
        var match = new Match_1.default({
            player1Name: 'James',
            player2Name: 'Sam'
        });
        match.startTennisMatch();
        var winner = match.getWinner();
        expect(winner).toBe('');
    });
    test('Player scores should be correct.', function () {
        var match = new Match_1.default({
            player1Name: 'James',
            player2Name: 'Sam'
        });
        match.startTennisMatch();
        match.player1Scores();
        var gameScore = match.getGameScore();
        expect(gameScore).toEqual([1, 0]);
        match.player1Scores();
        gameScore = match.getGameScore();
        expect(gameScore).toEqual([2, 0]);
        match.player2Scores();
        gameScore = match.getGameScore();
        expect(gameScore).toEqual([2, 1]);
        match.player2Scores();
        match.player2Scores();
        gameScore = match.getGameScore();
        expect(gameScore).toEqual([2, 3]);
        match.player1Scores();
        match.player1Scores();
        gameScore = match.getGameScore();
        expect(gameScore).toEqual([4, 3]);
        // The reason the score should now be [0,0] is because
        // Player 2 won the game and therefore the game scores 
        // were reset to [0,0]
        match.player2Scores();
        match.player2Scores();
        match.player2Scores();
        gameScore = match.getGameScore();
        expect(gameScore).toEqual([0, 0]);
    });
    test('Player 1 should have Advantage', function () {
        var match = new Match_1.default({
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
        var gameScore = match.getScore();
        expect(gameScore).toBe('[0,0] - [Adv,40]');
    });
    test('Game score should be Deuce.', function () {
        var match = new Match_1.default({
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
        var gameScore = match.getScore();
        expect(gameScore).toBe('[0,0] - [Deuce,Deuce]');
        match.player1Scores();
        match.player2Scores();
        expect(gameScore).toBe('[0,0] - [Deuce,Deuce]');
    });
    test('Set score should be correct.', function () {
        var match = new Match_1.default({
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
        var score = match.getScore();
        expect(score).toBe('[1,0] - [0,30]');
        match.player2Scores();
        match.player2Scores();
        score = match.getScore();
        expect(score).toBe('[1,1] - [0,0]');
    });
    test('Player 1 wins the set. The gameOver variable should be true', function () {
        var match = new Match_1.default({
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
        var score = match.getScore();
        expect(score).toBe('Match is over. James is the winner. [6,0] - [Game,0]');
        var gameOverVar = match.getGameOver();
        expect(gameOverVar).toBeTruthy();
        var player1Scores = match.player1Scores();
        expect(player1Scores).toBe('Match is over. James is the winner.');
        var player2Scores = match.player1Scores();
        expect(player2Scores).toBe('Match is over. James is the winner.');
    });
});
