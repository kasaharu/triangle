export interface Book {
  id: number;
  name: string;
  type: BookType;
  isFavorite: boolean;
}

export enum BookType {
  NONE = 'NONE',
  READ = 'READ',
  READING = 'READING',
}
