import React, {useState} from 'react';
import Topbar from '../components/Topbar';
import {FlatList} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Empty from '../components/Empty';
import OrderCardItem from '../components/OrderCardItem';
import {View} from 'react-native';
const Orders = (props) => {
  const [myOrders, setMyOrders] = useState([
    {
      key: 1,
      orderDate: new Date().toLocaleDateString(),
      orderItems: [],
      totalPrice: 2300,
      deliveryCharge: 2000,
    },
    {
      key: 2,
      orderDate: new Date().toLocaleDateString(),
      orderItems: [],
      totalPrice: 2300,
      deliveryCharge: 2000,
    },
    {
      key: 3,
      orderDate: new Date().toLocaleDateString(),
      orderItems: [],
      totalPrice: 2300,
      deliveryCharge: 2000,
    },
  ]);
  return (
    <>
      <Topbar
        title={'My Orders'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      {myOrders.length ? (
        <FlatList
          style={{padding: 10}}
          data={myOrders}
          renderItem={({index, item}) => (
            <OrderCardItem key={index} {...props} item={item} index={index} />
          )}
        />
      ) : (
        <Empty
          title="No Orders Found"
          subheading="Nothing To Show"
          icon={<Ionicons name="cart-outline" size={50} />}
          navigateTo={() => props.navigation.navigate('ConfirmOrder')}
          btnText="Go Back"
        />
      )}
    </>
  );
};

export default Orders;
