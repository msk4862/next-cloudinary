export interface CloudinaryVideoPlayer {
  on: Function
}

export interface CloudinaryVideoPlayerOptions {
  autoplayMode?: string;
  cloud_name?: string;
  colors?: CloudinaryVideoPlayerOptionsColors;
  controls?: boolean;
  fontFace?: string;
  loop?: boolean;
  muted?: boolean;
  publicId: string;
  secure?: boolean;
  transformation?: Array<object> | object;
  showLogo?: boolean;
  logoImageUrl?: string;
  logoOnclickUrl?: string;
}

export interface CloudinaryVideoPlayerOptionsColors {
  accent?: string;
  base?: string;
  text?: string;
}

export interface CloudinaryVideoPlayerOptionsLogo {
  logoImageUrl?: string;
  logoOnclickUrl?: string;
  showLogo?: boolean;
}