export type BookType = 'READ' | 'READING';

export interface Book {
  id: number;
  name: string;
  type: BookType;
}
