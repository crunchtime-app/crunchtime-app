import React from 'react';
import {registerRootComponent} from 'expo';

// import {StyleSheet, View} from 'react-native';

import Title from './components/Title';
import View from './components/View';
import Panel from './components/Panel';

const App = () => {
  return (
    <View>
      <Panel>
        <Title>Upcoming tests</Title>
      </Panel>
    </View>
  );
}

export default registerRootComponent(App);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
