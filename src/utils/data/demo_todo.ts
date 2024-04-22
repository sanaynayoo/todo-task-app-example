import 'react-native-get-random-values';
import {todoType} from '../types/todo_list';
import {nanoid} from 'nanoid';

const todoDemo: todoType[] = [
  {
    id: nanoid(),
    status: false,
    title: 'Task 1',
  },
  {
    id: nanoid(),
    status: false,
    title: 'Task 2',
  },
  {
    id: nanoid(),
    status: false,
    title: 'Task 3',
  },
];

export default todoDemo;
