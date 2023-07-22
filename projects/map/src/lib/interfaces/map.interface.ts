export interface IL {
  options: any;
  extends: () => void;
  include: () => void;
  initialize: (options: IOptions) => void;
}

export interface IControl extends IL {
  onAdd: (map: IMap) => HTMLElement;
  onRemove: (map: IMap) => void;
}

export interface IHandler extends IL {
  addHook: () => void;
  removeHook: () => void;
}

export interface IMap extends IL {
  layers: ILayer[];
  addHandler?: () => IMap;
  addControl?: () => IMap;
  removeControl?: () => IMap;
  addLayer?: () => IMap;
  removeLayer?: () => IMap;
}

export interface IEventMap {
  [key: string]: Function;
}

export interface IEvented extends IL {
  on: (type: string | IEventMap, fn?: Function, context?: Object) => this;
  off: (type?: string | IEventMap, fn?: Function, context?: Object) => this;
  fire: () => void;
}

export interface ILayer extends IEvented {
  onAdd?: () => void;
  onRemove?: (map: IMap) => void;
  getEvent?: () => void;
  getAttribution?: () => void;
  beforeAdd?: (map: IMap) => void;
}

export interface ILayerGroup extends ILayer {}

export interface IOptions {}

export interface IGridOptions extends IOptions {
  // @option tileSize: Number|Point = 256
  // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
  tileSize?: number;
  // @option opacity: Number = 1.0
  // Opacity of the tiles. Can be used in the `createTile()` function.
  opacity?: number;
  // @option updateWhenIdle: Boolean = (depends)
  // Load new tiles only when panning ends.
  // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
  // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
  // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
  updateWhenIdle?: any;
  // @option updateWhenZooming: Boolean = true
  // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
  updateWhenZooming?: boolean;
  // @option updateInterval: Number = 200
  // Tiles will not update more than once every `updateInterval` milliseconds when panning.
  updateInterval?: number;
  // @option zIndex: Number = 1
  // The explicit zIndex of the tile layer.
  zIndex?: number;
  // @option bounds: LatLngBounds = undefined
  // If set, tiles will only be loaded inside the set `LatLngBounds`.
  bounds?: null;
  // @option minZoom: Number = 0
  // The minimum zoom level down to which this layer will be displayed (inclusive).
  minZoom?: number;
  // @option maxZoom: Number = undefined
  // The maximum zoom level up to which this layer will be displayed (inclusive).
  maxZoom?: undefined;
  // @option maxNativeZoom: Number = undefined
  // Maximum zoom number the tile source has available. If it is specified,
  // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
  // from `maxNativeZoom` level and auto-scaled.
  maxNativeZoom?: undefined;
  // @option minNativeZoom: Number = undefined
  // Minimum zoom number the tile source has available. If it is specified,
  // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
  // from `minNativeZoom` level and auto-scaled.
  minNativeZoom?: undefined;
  // @option noWrap: Boolean = false
  // Whether the layer is wrapped around the antimeridian. If `true`, the
  // GridLayer will only be displayed once at low zoom levels. Has no
  // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
  // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
  // tiles outside the CRS limits.
  noWrap?: boolean;
  // @option pane: String = 'tilePane'
  // `Map pane` where the grid layer will be added.
  pane?: string;
  // @option className: String = ''
  // A custom class name to assign to the tile layer. Empty by default.
  className?: string;
  // @option keepBuffer: Number = 2
  // When panning the map, keep this many rows and columns of tiles before unloading them.
  keepBuffer?: number;
}

export interface IPoint {
  x: number;
  y: number;
}

export interface ICoords {
  x: number;
  y: number;
  z: number;
}

export interface IGridLayer extends ILayer {
  // @section
  // @aka GridLayer options
  options: IGridOptions;
  initialize: (options: IGridOptions) => void;
  // @method bringToFront: this
  // Brings the tile layer to the top of all tile layers.
  bringToFront: () => any;
  // @method bringToBack: this
  // Brings the tile layer to the bottom of all tile layers.
  bringToBack: () => any;
  // @method getContainer: HTMLElement
  // Returns the HTML element that contains the tiles for this layer.
  getContainer: () => any;
  // @method setOpacity(opacity: Number): this
  // Changes the [opacity](#gridlayer-opacity) of the grid layer.
  setOpacity: (opacity: any) => any;
  // @method setZIndex(zIndex: Number): this
  // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
  setZIndex: (zIndex: any) => any;
  // @method isLoading: Boolean
  // Returns `true` if any tile in the grid layer has not finished loading.
  isLoading: () => any;
  // @method redraw: this
  // Causes the layer to clear all the tiles and request them again.
  redraw: () => any;
  getEvents: () => {
    viewprereset: any;
    viewreset: any;
    zoom: any;
    moveend: any;
  };
  // @section Extension methods
  // Layers extending `GridLayer` shall reimplement the following method.
  // @method createTile(coords: Object, done?: Function): HTMLElement
  // Called only internally, must be overridden by classes extending `GridLayer`.
  // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
  // is specified, it must be called when the tile has finished loading and drawing.
  createTile: (coords: any) => HTMLElement;
  // @section
  // @method getTileSize: Point
  // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
  getTileSize: () => IPoint;
}

export interface ICanvasLayer extends IGridLayer {
  createTile: (crd: any) => HTMLCanvasElement;
  getTileSize: () => IPoint;
}

export interface ITileLayer extends IGridLayer {
  getTileUrl: () => IMap;
}
