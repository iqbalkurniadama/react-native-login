import React, { useState, useEffect, useRef, useContext } from "react";
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
import App from "../../App";

const Login = ({ authContext }) => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  // const [showMessage, setshowMessage] = useState("none");

  const { signIn } = useContext(authContext);

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animasi = (num) => {
    Animated.timing(fadeAnim, {
      toValue: num,
      duration: 3000,
    }).start();
  };

  // http://192.168.56.1:3000/login
  // cara animasi 1
  // const getData = () => {
  //   fetch(
  //     "http://192.168.56.1:3000/login?email=" + email + "&password=" + password
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMessage("gagal");
  //       // setshowMessage("none");
  //       setshowMessage("flex");
  //       if (json.length > 0) {
  //         setMessage("anda berhasil");
  //       }
  //       setData(json);
  //       console.log(json);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // cara animasi 2
  const getData = (data) => {
    fetch(
      "http://192.168.56.1:3000/login?email=" + email + "&password=" + password
    )
      .then((response) => response.json())
      .then((json) => {
        animasi(1);
        setMessage("gagal");
        setTimeout(() => {
          animasi(0);
        }, 3000);
        // setshowMessage("none");
        // setshowMessage("flex");
        if (json.length > 0) {
          // navigation.navigate("HomeScreen");
          setMessage("anda berhasil");
          signIn({
            id: json[0]["id"],
          });
        }
        setData(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <View style={Style.container}>
      {/* <Text style={Style.text(showMessage)}>{message}</Text> */}
      <Animated.View style={{ ...Style.text, opacity: fadeAnim }}>
        <Text>{message}</Text>
      </Animated.View>
      <View style={Style.wrapper}>
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
          title="masuk"
          onPress={() => {
            getData();
          }}
        />
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>apakah anda mempunyai akun?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={Style.link}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
