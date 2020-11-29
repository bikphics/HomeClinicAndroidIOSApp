import React, {useState} from 'react';
import {Button, Card, TextInput, Title} from 'react-native-paper';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../config/Colors';
const ConfirmOrder = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <Topbar
        title="Confirm Order"
        left={{
          onPress: () => props.navigation.goBack(),
          icon: ({color, size}) => (
            <Ionicons name="arrow-back" size={size} color={color} />
          ),
        }}
      />
      <ScrollView style={{padding: 10}}>
        <Card>
          <Card.Title
            title="Please Enter Valid Details"
            subtitle={`Total Charge : ₹${2400}`}
          />
          <Card.Content>
            <TextInput
              style={{marginVertical: 2}}
              mode="outlined"
              label="Full Name"
              onChangeText={(txt) => {
                setName(txt);
              }}
              value={name}
            />
            <TextInput
              style={{marginVertical: 2}}
              mode="outlined"
              label="Email Address"
              keyboardType="email-address"
              onChangeText={(txt) => {
                setEmail(txt);
              }}
              value={email}
            />
            <TextInput
              style={{marginVertical: 2}}
              mode="outlined"
              label="Phone Number"
              keyboardType="phone-pad"
              onChangeText={(txt) => {
                setPhone(txt);
              }}
              value={phone}
            />
            <TextInput
              style={{marginVertical: 2}}
              mode="outlined"
              label="Enter Secondary Phone Number"
              keyboardType="number-pad"
              onChangeText={(txt) => {}}
            />
            <TextInput
              style={{marginVertical: 2}}
              mode="outlined"
              multiline={true}
              numberOfLines={3}
              label="Address"
              onChangeText={(txt) => setAddress(txt)}
            />
          </Card.Content>
          <Card.Actions style={{justifyContent: 'center'}}>
            <Button
              color={COLORS.PRIMARY}
              mode="outlined"
              onPress={() => props.navigation.navigate('ThankYou')}>
              Confirm Booking
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </>
  );
};

export default ConfirmOrder;
