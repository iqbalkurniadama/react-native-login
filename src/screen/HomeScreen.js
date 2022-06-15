import React, { useContext } from "react";
import { Text, View, Button } from "react-native";

const HomeScreen = ({ authContext }) => {
  const { signOut } = useContext(authContext);
  return (
    <View>
      <Button title="signOut" onPress={() => signOut()} />
    </View>
  );
};

export default HomeScreen;
