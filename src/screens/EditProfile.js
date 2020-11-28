import React from 'react';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {KeyboardAvoidingView} from 'react-native';
import {COLORS} from '../config/Colors';
import RNPickerSelect from 'react-native-picker-select';

const EditProfile = (props) => {
  return (
    <>
      <Topbar
        title="Edit Profile"
        left={{
          onPress: () => props.navigation.goBack(),
          icon: ({color, size}) => (
            <Ionicons name="arrow-back" size={size} color={color} />
          ),
        }}
      />
      <ScrollView style={{padding: 14}}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Avatar.Image
            size={120}
            source={require('../assets/PLACEHOLDER.jpg')}
          />
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="position">
          <TextInput
            style={{marginVertical: 2}}
            mode="outlined"
            label="Full Name"
            onChangeText={(txt) => {}}
          />
          <TextInput
            style={{marginVertical: 2}}
            mode="outlined"
            label="Email Address"
            keyboardType="email-address"
            onChangeText={(txt) => {}}
          />
          <TextInput
            style={{marginVertical: 2}}
            mode="outlined"
            label="Your Age"
            keyboardType="numeric"
            onChangeText={(txt) => {}}
          />
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              {label: 'Male', value: 'Male'},
              {label: 'Female', value: 'Female'},
              {label: 'Other', value: 'Other'},
            ]}
          />
          <TextInput
            style={{marginVertical: 2}}
            mode="outlined"
            label="Phone Number"
            keyboardType="phone-pad"
            disabled
            onChangeText={(txt) => {}}
          />

          <TextInput
            style={{marginVertical: 2}}
            mode="outlined"
            multiline={true}
            numberOfLines={3}
            label="Address"
            onChangeText={(txt) => {}}
          />
          <Button
            onPress={() => {}}
            mode="contained"
            style={{marginVertical: 10}}
            color={COLORS.PRIMARY}>
            Save Changes
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
};

export default EditProfile;
