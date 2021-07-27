import * as React from 'react';
import { View, StyleSheet, Dimensions, Animated, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("screen");

export default class Transform extends React.Component {
  state = {
    ballAnimation: new Animated.Value(0),
  }
  animateBall = () => {
    Animated.timing(this.state.ballAnimation, {
      toValue: -200,
      duration: 500,
    }).start(() => {
      Animated.timing(this.state.ballAnimation, {
        toValue: 0,
        duration: 500,
      }).start()
    });
  }
  render() {
    const ballAnimation = {
     transform:[
       {
         translateY:this.state.ballAnimation,
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