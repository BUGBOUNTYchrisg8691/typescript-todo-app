interface Todo {
  todo: string;
  completed: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (todo: string) => void;

type ClearCompleted = () => void;
