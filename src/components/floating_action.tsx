import React,{FC} from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';

// icons
import Plus from '../../assets/icons/Plus';

// types

type floatingProps={
  onAction:()=> void;
  testID:string;
}

const floating_action:FC<floatingProps> = ({onAction, testID}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={onAction} testID={testID}> 
      <Plus width={hp(4)} height={hp(4)} color={'#fff'}/>
    </TouchableOpacity>
  )
}

export default floating_action

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#3C87EB',
        position:'absolute',
        bottom:40,
        right:25,
        width:hp(7),
        height:hp(7),
        alignSelf:'flex-end',
        borderRadius:hp(10),
        alignItems:'center',
        justifyContent:'center',
        shadowOffset:{width:0,height:8},
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:hp(1),
        elevation:2
    }
})