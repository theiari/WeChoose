export interface Idea {
  id: number;
  tenderId: number;
  author: string;
  title: string;
  description: string;
  dateCreated: Date;
  votes: number;
  approved: boolean;
  link: string;
}
