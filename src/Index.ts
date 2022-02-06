import Match, { PlayerProps } from './Match';

export const PlayMatch = (props: PlayerProps) => {
    
    const match = new Match(props)
    match.startTennisMatch();
    match.player1Scores();
    match.player1Scores();
    match.player2Scores();
    match.player1Scores();
    match.player1Scores();
    match.player2Scores();
    match.getScore();    

}

PlayMatch({
    player1Name: 'James',
    player2Name: 'Sam'
});