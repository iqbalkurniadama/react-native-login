import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Style } from "../assets/style/Style";

const Login = () => {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [showMessage, setshowMessage] = useState("none");

  // useEffect(() => {
  //   getData();
  // }, []);

  // http://192.168.56.1:3000/login
  const getData = () => {
    fetch(
      "http://192.168.56.1:3000/login?email=" + email + "&password=" + password
    )
      .then((response) => response.json())
      .then((json) => {
        setMessage("gagal");
        // setshowMessage("none");
        setshowMessage("flex");
        if (json.length > 0) {
          setMessage("anda berhasil");
        }
        setData(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const postData = () => {
    fetch("http://192.168.56.1:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  };

  return (
    <View style={Style.container}>
      <Text style={Style.text(showMessage)}>{message}</Text>
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
        <TouchableOpacity>
          <Text style={Style.link}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: "blue",
  },
});

export default Login;
