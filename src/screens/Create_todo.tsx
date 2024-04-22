import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import 'react-native-get-random-values';
import {nanoid} from 'nanoid';

// Redux
import {useDispatch, useSelector} from 'react-redux';

// Reducers
import {addTodo} from '../store/reducers/todoReducers';

// components
import AddTodo from '../components/inputTodo';

const Create_todo = ({navigation}: any) => {
  const [title, setTitle] = useState('');
  const [validStatus, setValidStatus] = useState(false);

  const dispatch = useDispatch();

  console.log('Hello create::');

  const addNewTodo = () => {
    if (title !== '') {
      let newTodo = {
        id: nanoid(),
        status: false,
        title: title,
      };
      dispatch(addTodo([newTodo]));
      navigation.goBack();
    } else {
      setValidStatus(true);
      setTimeout(() => {
        setValidStatus(false);
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <AddTodo
        validError={validStatus}
        value={title}
        onChangeTitle={value => setTitle(value)}
      />

      {/* submit action  */}
      <TouchableOpacity
        style={styles.addContainer}
        activeOpacity={0.5}
        onPress={addNewTodo}>
        <Text style={styles.addTitle}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Create_todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  addContainer: {
    marginTop: hp(10),
    paddingHorizontal: wp(12),
    paddingVertical: hp(1.2),
    backgroundColor: '#3C87EB',
    borderRadius: wp(1.5),
  },
  addTitle: {
    color: '#ffffff',
    fontSize: wp(4),
  },
});
