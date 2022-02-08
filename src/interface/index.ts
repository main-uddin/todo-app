export interface TodoItem {
  id: string;
  text: string;
  createdAt: string;
  status?: string;
}
export interface FinalState {
  data: TodoItem[];
}
