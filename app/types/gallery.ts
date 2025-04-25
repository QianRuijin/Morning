export interface GalleryData {
  id: number;
  nationality: string;
  name: string;
  birth: string;
  avatar: { url: string; width: number; height: number };
  works: string;
  cases: string;
  links: string | string[];
}

export interface Position {
  left: number;
  top: number;
}