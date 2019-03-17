export enum BookStatus {
  NONE = 'NONE',
  READ = 'READ',
  READING = 'READING',
}

export interface Book {
  id?: number;
  name: string;
  status: BookStatus;
  isFavorite: boolean;
}
