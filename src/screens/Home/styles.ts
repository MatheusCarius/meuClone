import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F8F8",
        marginTop: -20
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 0,
    },
    button: {
        backgroundColor:'blue',
        maxWidth: 200,
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonPic: {
        backgroundColor: "transparent",
        maxWidth: 200,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
    },
    buttonPlus: {
        backgroundColor: "blue",
        width: 30,
        height:30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 263,
    },
    textPlus: {
        textAlign: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontSize: 30,
        marginTop: -7,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    },
    image: {
        width: 50, 
        height: 50,
        borderRadius: 25
        
    },
    imageKabum: {
        width: 150, 
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 180,
    },
    textGray: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        padding: 25,
    },
    
})
