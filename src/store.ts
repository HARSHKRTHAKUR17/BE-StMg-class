interface Game {
    id: string; 
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

export class GameManager {
    private games: Game[] = [];

    public addGame(game: Game) {
        this.games.push(game);
    }

    public getGames() {
        return this.games;
    }

    public logState(){
        console.log(this.games);
    }

    // e5e7
    public addMove(gameId: string, move: string) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
}

export const gameManager = new GameManager();
