import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Style } from "../assets/style/Style";

const Register = () => {
  const [nama, setNama] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(
    new Animated.ValueXY({ x: 0, y: 0 })
  );
  const [flipValue, setFlipValue] = useState(-20);

  const animasiv2 = () => {
    setIsAnimating(true);
    setFlipValue(flipValue * 5);
    Animated.timing(animatedValue, {
      toValue: { x: 0, y: 20 },
    }).start(() => setIsAnimating(false));
  };

  return (
    <View style={Style.container}>
      <Animated.View>
        <Text style={Style.text}>ini Animasi</Text>
      </Animated.View>
      <View style={Style.wrapper}>
        <TextInput
          style={Style.input}
          value={nama}
          onChangeText={(text) => setNama(text)}
          placeholder="Enter email"
        />
        <TextInput
          style={Style.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter email"
        />
        <TextInput
          style={Style.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter password"
          secureTextEntry
        />
        <Button
          title="Register"
          onPress={() => {
            animasiv2();
          }}
        />
      </View>
    </View>
  );
};

export default Register;
