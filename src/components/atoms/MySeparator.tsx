import { Text, View } from 'react-native';

import React from 'react';

function MySeparator() {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ backgroundColor: '#bbb', height: 1, width: '45%' }}></View>
      <Text style={{ width: '10%', textAlign: 'center' }}>ou</Text>
      <View style={{ backgroundColor: '#bbb', height: 1, width: '45%' }}></View>
    </View>
  );
}

export default MySeparator;
