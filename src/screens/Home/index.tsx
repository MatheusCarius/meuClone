import React from "react";
import { View, TouchableOpacity, Text, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import relogio from "../../assets/relogio.jpg";
import imgKabum from "../../assets/imgKabum.png";


export const Home = ()=> {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={"#F8F8F8"}
      />
      <View style={styles.topBar}>
        <TouchableOpacity activeOpacity={1} style={styles.buttonPic}> 
        
        <Image
          source={relogio}
          style={styles.image}
        />

        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} style={styles.buttonPlus}> 
        
        <Text style={styles.textPlus}>+</Text>

        </TouchableOpacity>
        </View>

        <Image
          source={imgKabum}
          style={styles.imageKabum}
        />

        <Text style={styles.textGray}>Sem dispositivos, por favor adcione.</Text>
      

      <TouchableOpacity activeOpacity={1} style={styles.button}
      >
        <Text
          style={styles.buttonText}
        >
          Adicionar dispositivo
        </Text>
      </TouchableOpacity>
    </View>
  )
}