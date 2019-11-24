import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Button
} from "react-native";

import InputField from "../components/form/InputField";
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import Api from '../services/Api';

export default class Login extends Component {

  async componentDidMount(){
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/userinfo.profile'],
      webClientId: '152894186121-jse8c7d150f84l1khvhlsj478ukfl130.apps.googleusercontent.com', 
      offlineAccess: false,
      forceConsentPrompt: true
    });
  }

  render() {
    // console.log("This");
    // console.log(this.signIn);
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
            <View style={styles.scrollViewWrapper}>
                <ScrollView style={styles.scrollView}>
                <Text style={styles.loginHeader}>Login to MyApp</Text>
                    <GoogleSigninButton
                      style={styles.googleSignInButton}
                      size={GoogleSigninButton.Size.Wide}
                      color={GoogleSigninButton.Color.Light}
                      onPress={this.signIn}
                    />
                    <Text style={styles.orText}>- or -</Text>
                    <InputField 
                      labelTextSize={14} 
                      labelColor={'#000'} 
                      textColor={'#000'} 
                      borderBottomColor={'#ccc'} 
                      inputType="email" 
                      customStyle={{marginBottom:10}} 
                      placeholder = "Your Email Address"    
                    />
                    <InputField 
                      labelTextSize={14} 
                      labelColor={'#000'} 
                      textColor={'#000'} 
                      borderBottomColor={'#ccc'} 
                      inputType="password"  
                      placeholder="Password"
                      customStyle={{marginBottom:30}}
                    />
                    <Button
                      style={styles.signInButton}
                      title="Sign In"
                      onPress={() => alert('Simple Button pressed')}
                    />
                </ScrollView>
                </View>
            </View>
    </SafeAreaView>
    );
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      Api.checkUser({
        email : userInfo.user.email
      }).subscribe((response)=>{
        console.log(response);
      },(error)=>{
        // console.log(error);
      }) 
      // alert(userInfo);
      this.setState({ userInfo });
    } catch (error) {
      console.log(error)
      // console.log(error.code);
      // console.log(error.toString());
      // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      //   // user cancelled the login flow
      // } else if (error.code === statusCodes.IN_PROGRESS) {
      //   // operation (e.g. sign in) is in progress already
      // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      //   // play services not available or outdated
      // } else {
      //   // some other error happened
      // }
    }
  };
}

const styles = StyleSheet.create({
    wrapper: {
      display: "flex",
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center'
    },
    googleSignInButton : {
      width : 250,
      marginBottom:30
    },
    signInButton : {
      
    },
    container: {
      flex: 1
    },
    orText:{
      color:'#696969',
      fontStyle : 'italic',
      fontSize : 16,
      textAlign:'center',
      marginBottom: 10
    },
    scrollViewWrapper: {
      marginTop: 20,
      flex: 1,
      // paddingLeft:10,
      // paddingRight:10,
      // paddingTop:10,
      // paddingBottom:10
    },
    avoidView: {
      // paddingLeft: 30,
      // paddingRight: 30,
      // paddingTop: 20,
      // flex:1
     },
    loginHeader: {
      fontSize: 28,
      fontWeight: "300",
      marginBottom: 40,
      textAlign: 'center'
    }
});
  