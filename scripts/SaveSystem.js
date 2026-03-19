// SaveSystem.js

class SaveSystem {
    constructor() {
        this.saves = {};
    }

    saveGame(mode, data) {
        this.saves[mode] = data;
        console.log(`Game saved for mode: ${mode}`);
    }

    loadGame(mode) {
        if (this.saves[mode]) {
            console.log(`Loading game for mode: ${mode}`);
            return this.saves[mode];
        } else {
            console.log(`No save found for mode: ${mode}`);
            return null;
        }
    }
}

// Example usage:
const saveSystem = new SaveSystem();
saveSystem.saveGame('adventure', { level: 5, score: 1200 });
const loadedData = saveSystem.loadGame('adventure');
