export interface Book {
  id: number;
  name: string;
  type: BookType;
  isFavorite: boolean;
}

export enum BookType {
  READ = 'READ',
  READING = 'READING',
}
