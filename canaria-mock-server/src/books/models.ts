export interface Book {
  id: number;
  name: string;
  status: BookStatus;
  isFavorite: boolean;
}

export enum BookStatus {
  NONE = 'NONE',
  READ = 'READ',
  READING = 'READING',
}
