import { Game } from "./game";
// import { CANVAS_IMAGES } from "./Canvas";

abstract class Collision {
  image: HTMLImageElement = new Image();
  spriteWidth = 80;
  spriteHeight = 80;
  width: number;
  height: number;
  sizeModifier = 2;
  frameX = 0;
  maxFrame = 4;
  fps = Math.random() * 10 + 5;
  frameInterval = 1000 / this.fps;
  frameTimer = 0;
  markedForDeletion = false;

  constructor(public game: Game, public x: number, public y: number) {
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteHeight * this.sizeModifier;

    this.x = x - this.width * 0.5;
    this.y = y - this.height * 0.5;
  }
  draw(context: CanvasRenderingContext2D) {
    context.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  update(deltaTime: number) {
    this.x -= this.game.speed;
    if (this.frameTimer > this.frameInterval) {
      this.frameX++;
      this.frameTimer = 0;
    } else {
      this.frameTimer += deltaTime;
    }
    if (this.x < 0 - this.width) {
      this.markedForDeletion = true;
    }
  }
}

export class CollisionAnimation extends Collision {
  // image = CANVAS_IMAGES["boom"];
  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.image.src = "/flintstones/images/boom.png";
  }
}

export class HitAnimation extends Collision {
  // image = CANVAS_IMAGES["hit"];

  constructor(game: Game, x: number, y: number) {
    super(game, x, y);
    this.image.src = "/flintstones/images/hit.png";
  }
}
