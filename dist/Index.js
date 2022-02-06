"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayMatch = void 0;
var Match_1 = require("./Match");
var PlayMatch = function (props) {
    var match = new Match_1.default(props);
    match.startTennisMatch();
    match.player1Scores();
    match.player1Scores();
    match.player2Scores();
    match.player1Scores();
    match.player1Scores();
    match.player2Scores();
    match.getScore();
};
exports.PlayMatch = PlayMatch;
exports.PlayMatch({
    player1Name: 'James',
    player2Name: 'Sam'
});
