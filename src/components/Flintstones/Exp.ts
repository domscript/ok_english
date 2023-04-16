import { Game } from "./game";

export enum PerksE {
  barrel = "barrel",
  burger = "burger",
  lives = "lives",
  live = "live",
  newLive = "new_live",
  shield = "shield",
  piggy = "piggy",
  star = "star",
  mac = "mac",
  program = "program",
  graduate = "graduate",
  perfolenta = "perfolenta",
  radiolamp = "radiolamp",
  teamwin = "teamwin",
  lochman = "lochman",
  rocket = "rocket",
  atlantis = "atlantis",
}

abstract class Exp {
  abstract name: string;
  abstract image: HTMLImageElement;
  sizeX = 40;
  sizeY = 40;

  x = 700;
  y: number;
  startY = 0;

  collisionRadius = 20;
  markedForDeletion = false;

  ready = false;
  time = 1000;

  coef = 26;
  va = 5;
  angle = 0;

  constructor(public game: Game) {
    this.y =
      this.game.height - this.game.groundMarginMain - this.sizeY + this.coef;
    this.startY = this.y;

    setTimeout(() => {
      this.ready = true;
    }, this.time);
  }
  draw(context: CanvasRenderingContext2D) {
    this.x -= this.game.speed;
    this.angle += 5;

    if (this.y <= this.startY && !this.ready) {
      this.y -= Math.sin((this.angle / 180) * Math.PI) * this.va;
    } else this.y = this.startY;
    context.drawImage(
      this.image,
      this.x - this.sizeX / 2,
      this.y - this.sizeY / 2,
      this.sizeX,
      this.sizeY
    );
    if (this.game.debug) {
      context.beginPath();
      context.arc(this.x, this.y, this.collisionRadius, 0, Math.PI * 2);
      context.save();
      context.globalAlpha = 0.3;
      context.fill();
      context.restore();
      context.stroke();
    }
  }

  update(): string {
    // check if off screen
    if (this.x + this.sizeX < 0) {
      this.markedForDeletion = true;
    }
    return this.name;
  }
}

export class Barrel extends Exp {
  image = new Image();
  x = Math.random() * 200 + 1400;
  y = 425;
  name = PerksE.barrel;
  constructor(game: Game) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.barrel}.png`;
  }
}

export class Live extends Exp {
  image = new Image();
  name = PerksE.live;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/live_new.png`;
  }
}

export class Burger extends Exp {
  image = new Image();
  name = PerksE.burger;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.burger}.png`;
  }
}
export class Shield extends Exp {
  image = new Image();
  name = PerksE.shield;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.shield}.png`;
  }
}
export class Lives extends Exp {
  image = new Image();
  name = PerksE.lives;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.newLive}.png`;
  }
}

export class Mac extends Exp {
  image = new Image();
  name = PerksE.mac;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.mac}.png`;
  }
}

export class Piggy extends Exp {
  image = new Image();
  name = PerksE.piggy;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.piggy}.png`;
  }
}

export class Program extends Exp {
  image = new Image();
  name = PerksE.program;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.program}.png`;
  }
}

export class Graduate extends Exp {
  image = new Image();
  name = PerksE.graduate;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.graduate}.png`;
  }
}

export class Perfolenta extends Exp {
  image = new Image();
  name = PerksE.perfolenta;
  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.perfolenta}.png`;
  }
}

export class Lamp extends Exp {
  image = new Image();
  name = PerksE.radiolamp;

  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.radiolamp}.png`;
  }
}

export class Team extends Exp {
  image = new Image();
  name = PerksE.teamwin;
  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.teamwin}.png`;
  }
}
export class Lochman extends Exp {
  image = new Image();
  name = PerksE.lochman;
  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.lochman}.png`;
  }
}
export class Rocket extends Exp {
  image = new Image();
  name = PerksE.rocket;
  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.rocket}.png`;
  }
}
export class Atlantis extends Exp {
  image = new Image();
  name = PerksE.atlantis;
  constructor(game: Game, public x: number, public y: number) {
    super(game);
    this.image.src = `/flintstones/images/${PerksE.atlantis}.png`;
  }
}
