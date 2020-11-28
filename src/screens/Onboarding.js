import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Button, Card, Subheading, Title} from 'react-native-paper';
import {COLORS} from '../config/Colors';

const Onboarding = (props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/icon.png')}
            style={{width: 100, height: 100, resizeMode: 'center'}}
          />
        </View>
        <View style={styles.footer}>
          <Card style={{padding: 20}}>
            <Title style={{textAlign: 'center'}}>
              Are You a Patient or Patient Relative?
            </Title>
            <Card.Content>
              <Button
                onPress={() => props.navigation.navigate('PhoneAuth')}
                color={COLORS.PRIMARY}
                style={{marginVertical: 5}}
                mode="contained">
                Yes
              </Button>
              <Button
                onPress={() => {}}
                color={COLORS.PRIMARY}
                style={{marginVertical: 5}}
                mode="outlined">
                No
              </Button>
            </Card.Content>
          </Card>
        </View>
      </View>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    padding: 30,
  },
});
