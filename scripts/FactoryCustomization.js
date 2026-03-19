// FactoryCustomization.js

class FactoryCustomization {
    constructor() {
        this.customizations = [];
        this.upgrades = [];
        this.expansions = [];
    }

    handleCustomization(customization) {
        this.customizations.push(customization);
        console.log(`Customization added: ${customization}`);
    }

    upgradeMachine(upgrade) {
        this.upgrades.push(upgrade);
        console.log(`Machine upgraded: ${upgrade}`);
    }

    expandFactory(expansion) {
        this.expansions.push(expansion);
        console.log(`Factory expanded: ${expansion}`);
    }

    getCustomizations() {
        return this.customizations;
    }

    getUpgrades() {
        return this.upgrades;
    }

    getExpansions() {
        return this.expansions;
    }
}

// Example usage:
const factory = new FactoryCustomization();
factory.handleCustomization('Custom paint color');
factory.upgradeMachine('Added robotic arm');
factory.expandFactory('New building for storage');

console.log(factory.getCustomizations());
console.log(factory.getUpgrades());
console.log(factory.getExpansions());
