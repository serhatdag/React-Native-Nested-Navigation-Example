import { View, Text, Button } from 'react-native'
import React from 'react'

const Stack_1 = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
      <Text>stack_1</Text>
      
      <View style={{marginTop:100}} >
        <View style={{marginVertical:5}} >
          <Button style={{}} title='go stack 2' onPress={()=>{navigation.navigate("Stack_2")}} ></Button>
        </View>
        <View style={{marginVertical:5}} >
          <Button style={{marginVertical:5}} title='go stack 3' onPress={()=>{navigation.navigate("Stack_3")}} ></Button>
        </View>
      </View>
     
    </View>
  )
}

export default Stack_1