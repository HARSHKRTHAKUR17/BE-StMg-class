"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
    }
    addGame(game) {
        this.games.push(game);
    }
    getGames() {
        return this.games;
    }
    logState() {
        console.log(this.games);
    }
    // e5e7
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        if (game) {
            game.moves.push(move);
        }
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
