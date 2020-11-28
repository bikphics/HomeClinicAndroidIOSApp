import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const COLOR = {
  PRIMARY: '#17acbd',
};
const PhoneAuth = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerImg}
          source={require('../assets/icon.png')}
        />
        <Text style={styles.headerTitle}>Verify Phone Number</Text>
        <Text style={styles.headerSubtitle}>
          Enter Your Mobile Number TO Get OTP
        </Text>
      </View>
      <KeyboardAvoidingView style={styles.footer}>
        <TextInput
          placeholder="Enter Your Phone Number"
          style={styles.footerInput}
          keyboardType="number-pad"
        />
        <TouchableOpacity
          onPress={() => props.navigation.navigate('OTPScreen')}
          style={{...styles.footerBtn, ...styles.shadow}}>
          <Text style={styles.footerText}>Get OTP</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PhoneAuth;

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
});
