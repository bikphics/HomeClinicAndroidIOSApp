import React, {useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import {useAppContext} from '../config/AppContext';
const COLOR = {
  PRIMARY: '#17acbd',
};
const OTPScreen = (props) => {
  const otpInput = useRef(null);
  const {login} = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require('../assets/icon.png')}
        />
        <Text style={styles.headerTitle}>Enter OTP</Text>
        <Text style={styles.headerSubtitle}>
          Enter Your One Time Password Bellow
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.footer}>
        <OTPTextInput
          ref={otpInput}
          tintColor={COLOR.PRIMARY}
          inputCount={6}
          handleTextChange={(otp) => console.log({verificationCode: otp})}
          textInputStyle={styles.otpInput}
        />
        <TouchableOpacity
          onPress={() => login()}
          style={{...styles.footerBtn, ...styles.shadow}}>
          <Text style={styles.footerText}>Verify OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1 / 2,
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerImg: {
    resizeMode: 'cover',
    height: 100,
    width: 100,
    marginVertical: 20,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
  headerSubtitle: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
    marginVertical: 10,
  },
  footer: {
    flex: 1 / 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  footerInput: {
    backgroundColor: '#fff',
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '100%',
  },
  footerBtn: {
    backgroundColor: COLOR.PRIMARY,
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '50%',
  },
  footerText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  shadow: {
    shadowColor: '#00000033',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  otpInput: {
    borderColor: '#000',
    borderWidth: 2,
  },
});
