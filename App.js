import * as React from 'react';
import { View, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("screen");

export default class App extends React.Component {
  state = {
    ballAnimation: new Animated.Value(0),
  }
  animateBall = () => {
    Animated.timing(this.state.ballAnimation, {
      toValue: 2,
      duration: 500,
    }).start(() => {
      Animated.timing(this.state.ballAnimation, {
        toValue: 0,
        duration: 500,
      }).start()
    });
  }

  ballInteropolate = this.state.ballAnimation.interpolate({
    inputRange:[0,2],
    outputRange:["0deg", "180deg"]
  });
  render() {
    const ballAnimation = {
     transform:[
       {
         rotate:this.ballInteropolate, // 90 => 90deg
       }
     ]
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => (this.animateBall())}>
          <Animated.View style={[styles.box, ballAnimation]}></Animated.View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "#7AA1D1",
  },
});