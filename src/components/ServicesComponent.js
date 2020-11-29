import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ServicesComponent = (props) => {
  const [services, setServices] = useState([
    {
      id: 'ser1',
      icon: require('../assets/ServiceIcon/doctor.png'),
      name: 'Doctor',
    },
    {
      id: 'ser2',
      icon: require('../assets/ServiceIcon/nurse.png'),
      name: 'Nurse',
    },
    {
      id: 'ser3',
      icon: require('../assets/ServiceIcon/physiotheraphy.png'),
      name: 'Physiotheraphy',
    },
    {
      id: 'ser4',
      icon: require('../assets/ServiceIcon/medicine.png'),
      name: 'Medicine',
    },
    {
      id: 'ser5',
      icon: require('../assets/ServiceIcon/doctor.png'),
      name: 'Doctor',
    },
    {
      id: 'ser6',
      icon: require('../assets/ServiceIcon/nurse.png'),
      name: 'Nurse',
    },
    {
      id: 'ser7',
      icon: require('../assets/ServiceIcon/physiotheraphy.png'),
      name: 'Physiotheraphy',
    },
    {
      id: 'ser8',
      icon: require('../assets/ServiceIcon/medicine.png'),
      name: 'Medicine',
    },
  ]);
  return (
    <View style={styles.container}>
      {services.map((service) => (
        <View style={styles.item} key={service.id}>
          <TouchableOpacity
            onPress={() => props.navigation.push('ServiceDetail',service)}>
            <Image style={styles.image} source={service.icon} />
            <Text style={styles.text}>{service.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ServicesComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#017e85',
    shadowColor: '#d6ffe1',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderRadius: 10,
    margin: 2,
  },
  item: {
    paddingVertical: 10,
    width: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    paddingVertical: 12,
    color: 'white',
  },
  image: {
    tintColor: '#fff',
  },
});
