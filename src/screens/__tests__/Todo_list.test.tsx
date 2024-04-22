import React from 'react';
import {Provider} from 'react-redux';
import {fireEvent, render} from '@testing-library/react-native';

// import
import {store} from '../../store';
import TodoListScreen from '../Todo_list';

describe('Todo list screen', () => {
  let navigation: {navigate: any};

  beforeEach(() => {
    navigation = {navigate: jest.fn()};
  });

  it('should add tasks to the completed list', () => {
    // Test case for adding tasks to completed list
    const {queryAllByTestId} = render(
      <Provider store={store}>
        <TodoListScreen />
      </Provider>,
    );

    const addToCompleteTodo = queryAllByTestId('addToComplete');

    // Iterate over each element and trigger the press event
    addToCompleteTodo.forEach(element => {
      fireEvent.press(element);
    });
  });

  it('should go to create todo screen', () => {
    // Test case for navigating to create todo screen
    const {getByTestId} = render(
      <Provider store={store}>
        <TodoListScreen navigation={navigation} />
      </Provider>,
    );

    const goNewTodo = getByTestId('addNewTask');
    fireEvent.press(goNewTodo);

    expect(navigation.navigate).toHaveBeenCalledWith('Addtodo');
  });
});
