import { View, ScrollView } from 'react-native'
import React from 'react'
import { createStyles } from './styles';
import { Loader } from '../../atoms';

const Container = ({ children, styleParams, loading = false, isScroller = false, scrollHorizontal= false}) => {
  const styles = createStyles(styleParams);

  if(isScroller) {
    return (
      <ScrollView
        horizontal={scrollHorizontal}
        style={styles.scrollView}>
        {children}
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      {loading ? <Loader /> : children}
    </View>
  );
};



export default Container