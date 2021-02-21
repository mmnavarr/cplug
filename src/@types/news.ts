
export interface Reference {
  name: string;
  url: string;
}

export interface Author {
  name: string;
}

export interface News {
  id: string;
  title: string;
  content: string;
  references: Reference[];
  reference_title: string;
  published_at: Date;
  author: Author;
  tags: string[];
  url: string;
}

export type NewsArticles = Array<News>;