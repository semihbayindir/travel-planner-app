import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
        <Image 
        style={{
            width:'100%',
            height:500
        }}
        source={require('./../assets/images/passenger-plane.jpeg')}/>
        <View style={styles.container}>
            <Text
            style={{
                fontSize:28,
                fontFamily:'openSans-bold',
                textAlign:'center',
                marginTop:10
            }}
            >Travel Planner</Text>

            <Text
            style={{
                fontSize:17,
                fontFamily:'openSans',
                color:Colors.GRAY,
                textAlign:'center',
                marginTop:10
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis posuere est, sed scelerisque odio.
            </Text>

            <View style={styles.button}>
                <Text
                style={{
                    fontFamily:'openSans-medium',
                    fontSize:17,
                    color:Colors.WHITE,
                    textAlign:'center'
                }}>Sign with Google</Text>
            </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.WHITE,
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20,
        height:'100%'
    },
    button:{
        backgroundColor:Colors.PRIMARY,
        borderRadius:20,
        padding:18,
        marginTop:'15%',
    }

})