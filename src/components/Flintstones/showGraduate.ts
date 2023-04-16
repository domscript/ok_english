import { Game } from "./game";

export class ShowGraduate {
  image: HTMLImageElement = new Image();
  markedForDeletion = false;
  sizeX = 100;
  sizeY = 45;

  x = 0;
  y = 0;

  constructor(public game: Game, public name: string) {
    this.image.src = `/flintstones/images/${this.name}.png`;
    this.x = this.game.player.x;
    this.y = this.game.player.y;
  }

  draw(context: CanvasRenderingContext2D) {
    context.drawImage(
      this.image,
      this.x - this.sizeX / 2,
      this.y - this.sizeY / 2,
      this.sizeX,
      this.sizeY
    );
  }
  update() {
    this.markedForDeletion = true;
  }
}
