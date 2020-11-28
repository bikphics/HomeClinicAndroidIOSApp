import React from 'react'
import Empty from '../components/Empty';
import Topbar from '../components/Topbar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notifications = (props) => {
    return (
        <>
            <Topbar
                title={'Notifications'}
                left={{
                    onPress: () => props.navigation.goBack(),
                    icon: ({ color, size }) => <Ionicons name="arrow-back" size={size} color={color} />,
                }}
            />
            <Empty
                title="No Notifications Found"
                subheading="No Notifications Found To Show"
                icon={<Ionicons name="notifications" size={50} />}
                navigateTo={() => props.navigation.goBack()}
                btnText="Go Back"
            />
        </>
    )
}

export default Notifications
