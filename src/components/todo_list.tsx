import React, {FC, memo} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type todoListProps = {
  disabled: boolean;
  statusValue: boolean;
  onChangeStatus: () => void;
  title: string;
  testID: string;
};
const todo_list: FC<todoListProps> = ({
  disabled,
  statusValue,
  onChangeStatus,
  title,
  testID,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} testID={testID} onPress={onChangeStatus}>
      <CheckBox disabled={disabled} value={statusValue} onChange={onChangeStatus} tintColors={{true: '#3C87EB', false: '#3C87EB'}}/>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default memo(todo_list);

const styles = StyleSheet.create({
  container: {
    width: wp(95),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  title: {
    color: '#3C87EB',
    fontSize: wp(4),
  },
  completedContainer: {
    // backgroundColor: 'red',
  },
});
