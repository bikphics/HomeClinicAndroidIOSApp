import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Paragraph, Title} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../config/Colors';
import {height} from '../config/Style';

// To Show Dynamic Route from the individual SErvices
const ServiceDetailComponent = (props) => {
  console.log(props.route.params);
  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={styles.headerImage}
            source={{
              uri:
                'https://www.patientpop.com/wp-content/uploads/national-doctors-day-1-920x518.jpg',
            }}>
            <Ionicons
              name="arrow-back"
              color="#fff"
              onPress={() => props.navigation.goBack()}
              style={styles.backIcon}
            />
            <Button
              color={COLORS.PRIMARY}
              mode="contained"
              style={styles.rateBtn}>
              <Ionicons name="star" /> 4.7
            </Button>
          </ImageBackground>
        </View>
        <View style={{padding: 16}}>
          <Paragraph>
            <Title>Product Price: </Title>
            <Text
              style={{textDecorationLine: 'line-through', fontStyle: 'italic'}}>
              ₹ 120
            </Text>
            ₹ 100
          </Paragraph>
          <Title>About Product</Title>
          <Text
            style={{lineHeight: 22, marginVertical: 10, textAlign: 'justify'}}>
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am Mobile App UI Kit Template for
            iPhone &amp; Android devices, compatible with Sketch, Photoshop &am
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am Mobile App UI Kit Template for
            iPhone &amp; Android devices, compatible with Sketch, Photoshop &am
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am
          </Text>
          <Text
            style={{lineHeight: 22, marginVertical: 10, textAlign: 'justify'}}>
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am Mobile App UI Kit Template for
            iPhone &amp; Android devices, compatible with Sketch, Photoshop &am
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am Mobile App UI Kit Template for
            iPhone &amp; Android devices, compatible with Sketch, Photoshop &am
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am
          </Text>
          <Text
            style={{lineHeight: 22, marginVertical: 10, textAlign: 'justify'}}>
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am Mobile App UI Kit Template for
            iPhone &amp; Android devices, compatible with Sketch, Photoshop &am
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am Mobile App UI Kit Template for
            iPhone &amp; Android devices, compatible with Sketch, Photoshop &am
            Mobile App UI Kit Template for iPhone &amp; Android devices,
            compatible with Sketch, Photoshop &am
          </Text>
        </View>
      </ScrollView>
      <Button
        mode="contained"
        color={COLORS.GOOGLE}
        style={{borderRadius: 0}}
        onPress={() => {}}>
        Book Now
      </Button>
    </>
  );
};

export default ServiceDetailComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 10,
  },
  headerImage: {
    width: '100%',
    height: height / 2.4,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  backIcon: {
    position: 'absolute',
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 40,
    padding: 10,
    left: 20,
    top: 20,
  },
  rateBtn: {
    position: 'absolute',
    borderRadius: 40,
    right: 20,
    bottom: -15,
  },
});
