export type PhotoAsset = {
  src: string;
  alt: string;
};

export type GalleryGroup = {
  slug: string;
  title: string;
  description: string;
  cover: PhotoAsset;
};
