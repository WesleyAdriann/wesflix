interface linkExtra {
  text: string,
  url: string,
}

interface video {
  titulo: string,
  url: string,
}

interface category {
  cor: string,
  link_extra?: linkExtra,
  titulo?: string,
  videos: video[],
};

export interface CarouselProps {
  category: category,
  ignoreFirstVideo: boolean,
};

export interface TitleProps {
  backgroundColor: string,
}
