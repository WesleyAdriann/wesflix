import { StyledComponent } from 'styled-components';

interface LinkExtra {
  text: string,
  url: string,
}

interface Video {
  titulo: string,
  url: string,
}

interface Category {
  titulo: string,
  link?: string,
  cor: string,
  link_extra?: LinkExtra,
  videos: Video[]
};

export interface VideoCardGroupProps {
  ignoreFirstVideo? : boolean,
  category: Category,
};

export interface TitleProps {
  backgroundColor?: string,
}
