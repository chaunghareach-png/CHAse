export interface LightingPalette {
  light: string;
  bloom: string;
  contrast: string;
}

export interface CameraAndFocus {
  camera: string;
  lens: string;
  focus: string;
  motion: string;
}

export interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  colorPalette: string;
  cinematicStyle: string;
  lightingPalette: LightingPalette;
  cameraAndFocus: CameraAndFocus;
  audioDesign: string;
}
