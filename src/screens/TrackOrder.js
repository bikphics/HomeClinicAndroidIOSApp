import React, {useState} from 'react';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StepIndicator from 'react-native-step-indicator';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../config/Colors';

const labels = [
  'Cart',
  'Delivery Address',
  'Order Summary',
  'Order Placed',
  'Delivered',
];
const stepIndicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: COLORS.PRIMARY,
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: COLORS.PRIMARY,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: COLORS.PRIMARY,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: COLORS.PRIMARY,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: COLORS.PRIMARY,
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  labelAlign: 'flex-start',
  currentStepLabelColor: COLORS.PRIMARY,
};

const TrackOrder = (props) => {
  const [currentPosition, setCurrentPosition] = useState(2);
  return (
    <>
      <Topbar
        title="Track Order"
        left={{
          onPress: () => props.navigation.goBack(),
          icon: ({color, size}) => (
            <Ionicons name="arrow-back" size={size} color={color} />
          ),
        }}
      />
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={stepIndicatorStyles}
            stepCount={5}
            direction="vertical"
            currentPosition={currentPosition}
            labels={labels.map((item) => item)}
          />
        </View>
      </View>
    </>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  rowItem: {
    flex: 3,
    paddingVertical: 20,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: '#333333',
    paddingVertical: 16,
    fontWeight: '600',
  },
  body: {
    flex: 1,
    fontSize: 15,
    color: '#606060',
    lineHeight: 24,
    marginRight: 8,
  },
});
