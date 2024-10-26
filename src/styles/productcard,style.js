import {  StyleSheet, } from "react-native";
import { theme } from "../constants/theme";


const styles = StyleSheet.create({
    imageContainer: {
        flex:1,
        height:250,
        overflow: 'hidden',
        margin: 10,
        backgroundColor: theme.colors.secondary,
    },
    image: {
        height:180,
        width:'100%',
        borderRadius: theme.sizes.small
    },
    details: {
      padding: theme.sizes.small
    },
    price: {
        marginBottom: 10,
    },
    title: {
        fontSize:theme.sizes.medium,
        fontFamily:'Roboto_700Bold'
    }
});

export default styles;