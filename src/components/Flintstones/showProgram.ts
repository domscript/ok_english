import { Game } from "./game";

export class ShowProgram {
  image: HTMLImageElement = new Image();
  markedForDeletion = false;
  sizeX = 250;
  sizeY = 150;

  x = 0;
  y = 0;

  constructor(public game: Game, public name: string) {
    this.image.src = `/flintstones/images/${this.name}.png`;
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(this.image, this.x, this.y, this.sizeX, this.sizeY);
  }

  update() {
    this.markedForDeletion = true;
  }
}
