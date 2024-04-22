import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';

// import
import {store} from '../../store';
import CreateTodoScreen from '../Create_todo';

describe('create todo screen', () => {
  let navigation: {navigate: any};

  beforeEach(() => {
    navigation = {navigate: jest.fn()};
  });

  it('should create new task', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <CreateTodoScreen navigation={navigation} />
      </Provider>,
    );

    const addNewTodo = getByTestId('addNewTask');
    fireEvent.press(addNewTodo);
  });
});
