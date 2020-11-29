import React from 'react';
import MyCarousel from '../components/MyCarousel';
import Topbar from '../components/Topbar';
import FloatingCTA from '../components/FloatingCTA';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Searchbar} from 'react-native-paper';
import {COLORS} from '../config/Colors';
import {View} from 'react-native';
import ServicesComponent from '../components/ServicesComponent';
import HeadingSection from '../components/HeadingSection';
import {ScrollView} from 'react-native-gesture-handler';
const data = [
  {
    id: 1,
    uri: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    id: 2,
    uri: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    id: 3,
    uri: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    id: 4,
    uri: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    id: 5,
    uri: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
  {
    id: 6,
    uri:
      'https://images.pexels.com/photos/33248/tablets-cocktail-cocktail-tablets-drugs.jpg',
  },
];

const Home = (props) => {
  return (
    <>
      <Topbar
        title={'Home'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
        right={{
          icon: ({color, size}) => (
            <Ionicons name="notifications-outline" color={color} size={size} />
          ),
          onPress: () => props.navigation.navigate('Notifications'),
        }}
      />
      <View style={{padding: 10, backgroundColor: COLORS.PRIMARY}}>
        <Searchbar
          placeholder="Search anything"
          onTouchStart={() => props.navigation.navigate('SearchTab')}
        />
      </View>
      <ScrollView>
        <MyCarousel data={data} />
        <HeadingSection />
        <ServicesComponent {...props} />
      </ScrollView>
      <FloatingCTA backgroundColor="#eb4034" />
    </>
  );
};

export default Home;
