class Horde {
    constructor() {
        this.zombies = [];
    }

    addZombies(num) {
        for (let i = 0; i < num; i++) {
            this.zombies.push(new Zombie(random(width), random(height)));
        }
    }

    drawZombies() {
        for (let zombie of this.zombies) {
            zombie.draw();
        }
    }

    checkZombies(mx, my) {
        for (let i = this.zombies.length - 1; i >= 0; i--) {
            this.zombies[i].clicked(mx, my);
            if (this.zombies[i].health <= 0) {
                this.zombies.splice(i, 1);
                this.addZombies(1); // Add a new zombie when one is killed
            }
        }
    }
}