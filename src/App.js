import React, { Component } from "react";
import { Image, Text, View } from "react-native";

const logoUri = `https://avatars0.githubusercontent.com/u/6535861?s=400&u=5fec5f29c71ed9c1c17bfe24e464b23de879f40f&v=4`;

export default class App extends Component {
  render() {
    return (
      <View style={{ padding: 20, flex: 1 }}>
        <Image
          accessibilityLabel="React logo"
          source={{ uri: logoUri }}
          resizeMode="contain"
          style={{ height: 80 }}
        />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginVertical: "1em",
            textAlign: "center"
          }}
        >
          Alex Lévy
        </Text>
      </View>
    );
  }
}
