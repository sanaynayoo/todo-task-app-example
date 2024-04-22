import React, {FC} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type inputProps = {
  value: string;
  onChangeTitle: (value: string) => void;
  validError: boolean;
};

const inputTodo: FC<inputProps> = ({value, validError, onChangeTitle}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: validError ? '#FFEFEF' : '#F1F1F1',
            borderColor: validError ? '#FF6161' : '#F1F1F1',
            borderWidth: hp(0.1),
          },
        ]}>
        <TextInput
          placeholder="Add new task.."
          placeholderTextColor={'#818181'}
          value={value}
          onChangeText={onChangeTitle}
          style={styles.inputText}
        />
      </View>
    </View>
  );
};

export default inputTodo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  inputText: {
    color: '#000000',
    fontSize: wp(4),
  },
  inputContainer: {
    width: wp(90),
    backgroundColor: '#F1F1F1',
    marginTop: hp(2),
    paddingHorizontal: wp(2.5),
    borderRadius: wp(2),
  },
});
