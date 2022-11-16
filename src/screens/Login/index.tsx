import React from "react";
import { View, Text, TextInput, Linking } from "react-native";
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
            <Text style={styles.textPolitica}>Eu concordo</Text>
            <Text style={styles.textPolitica}>Política de privacidade e</Text>
            <Text style={styles.textPolitica}>Acordo de serviço</Text>

        </View>
    )

}