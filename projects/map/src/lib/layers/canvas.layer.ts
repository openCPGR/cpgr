import { ICoords, IGridOptions } from '../interfaces/map.interface';

declare var L: { GridLayer: any };

export class CanvasLayer extends L.GridLayer {
  debugGrid: boolean = false;
  constructor(options?: IGridOptions) {
    super(options);
  }

  createTile(coords: ICoords): HTMLCanvasElement {
    var tile = document.createElement('canvas');
    var tileSize = super.getTileSize();
    tile.setAttribute('width', tileSize.x);
    tile.setAttribute('height', tileSize.y);
    tile.style.outline = '1px solid red';
    tile.style.opacity = '0';

    var ctx = tile.getContext('2d');
    ctx?.beginPath();
    ctx?.arc(
      tileSize.x / 2,
      tileSize.x / 2,
      4 + coords.z * 4,
      0,
      2 * Math.PI,
      false
    );
    ctx?.fill();
    ctx?.beginPath();
    ctx?.fillText('' + coords.x + ',' + coords.y + ',' + coords.z, 5, 10);
    return tile;
  }
}
