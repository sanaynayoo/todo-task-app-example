export type todoType = {
  id: string;
  status: boolean;
  title: string;
};

export type todoState = {
  todoList: todoType[];
};
