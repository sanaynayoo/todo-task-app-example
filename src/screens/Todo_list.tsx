import React, {useState, useEffect, useCallback, useMemo, memo} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// redux
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store';
import {addTodo, addCompleteTodo} from '../store/reducers/todoReducers';

// demo data
import todoDemo from '../utils/data/demo_todo';

// components
import ListToDo from '../components/todo_list';
import FloatingAction from '../components/floating_action';

// types
import {todoType} from '../utils/types/todo_list';

const Todo_list = ({navigation}: any) => {
  const todoList = useSelector((state: RootState) => state.todo.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    const datalist = dispatch(addTodo(todoDemo));
    return () => {
      datalist;
    };
  }, []);

  const onChangeTaskStatus = useCallback((data: todoType) => {
    dispatch(addCompleteTodo(data));
  }, []);

  return (
    <View style={styles.container}>

      {/* Todo tasks list  */}
      <View style={styles.todoList}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {todoList.map(
            (item, index) =>
              !item.status && (
                <ListToDo
                  title={item.title}
                  disabled={false}
                  statusValue={item.status}
                  onChangeStatus={() => onChangeTaskStatus(item)}
                  key={index}
                  testID='addToComplete'
                />
              ),
          )}
        </ScrollView>
      </View>

      {/* completed tasks list  */}
      <View style={[styles.todoList, styles.completeContainer]}>
        <Text style={styles.completeText}>Completed</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {todoList.map(
            (item, index) =>
              item.status && (
                <ListToDo
                  title={item.title}
                  disabled={false}
                  statusValue={item.status}
                  onChangeStatus={() => onChangeTaskStatus(item)}
                  key={index}
                  testID='addToComplete'
                />
              ),
          )}
        </ScrollView>
      </View>

      {/* floating action  */}
      <FloatingAction testID="addNewTask" onAction={() => navigation.navigate('Addtodo')} />
    </View>
  );
};

export default Todo_list;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  completeContainer: {
    width: wp(100),
    paddingHorizontal: wp(2),
    paddingTop: hp(0.5),
    backgroundColor: '#ECF4FF',
  },
  completeText: {
    fontSize: wp(6),
    color: '#3C87EB',
  },
  todoList: {
    width: wp(95),
    height: hp(50),
  },
});