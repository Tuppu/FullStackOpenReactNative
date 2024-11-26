import React from "react";
import { View, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 15,
    borderRadius: 4,
  },
});


export const DisplayImage = ({imgUri}) =>{

      return (
        <View>
          <Image style = {styles.tinyLogo}
          source={{
            uri: imgUri,
          }}
        />
        </View>
      );
};