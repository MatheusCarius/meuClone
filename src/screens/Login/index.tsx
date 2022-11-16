import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";


export const Login = ()=> {

    return(
        <View style={styles.container}>
            <Text style={styles.textEntrar}>
                Entrar
            </Text>
            <View style={styles.textBox}>
            <TextInput placeholder="Brasil" style={styles.textPais}></TextInput>
            </View>
            <View style={styles.textBox}>
            <TextInput placeholder="Por favor insira o número d..." style={styles.textGray}></TextInput>
            </View>
            <View style={styles.textBox}>
            <TextInput placeholder="Senha" style={styles.textSenha}></TextInput>
            </View>
        </View>
    )

}