export enum BookType {
  READ = 'READ',
  READING = 'READING',
}

export interface Book {
  id: number;
  name: string;
  type: BookType;
  isFavorite: boolean;
}
