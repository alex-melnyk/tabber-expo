import React from 'react';
import { View } from 'react-native';

import { BaseNavigator } from './src/navigation';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#293656'
    }}>
      <BaseNavigator/>
    </View>
  );
}