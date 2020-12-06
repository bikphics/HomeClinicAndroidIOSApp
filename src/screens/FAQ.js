import React from 'react';
import Topbar from '../components/Topbar';
import {List} from 'react-native-paper';
import {Text} from 'react-native';

const FAQ = (props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <>
      <Topbar
        title={'FAQ'}
        left={{onPress: () => props.navigation.toggleDrawer()}}
      />
      <List.Section title="FAQs">
        <List.Accordion
          title="Uncontrolled Accordion"
          left={(props) => <List.Icon {...props} icon="help-circle" />}>
          <Text>lorem lorem lorem lorem lorem lorem lorem lorem lorem</Text>
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          left={(props) => <List.Icon {...props} icon="help-circle" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section>
    </>
  );
};

export default FAQ;
