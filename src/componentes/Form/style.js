import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#282a36",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,

    },
    form:{
        width:"100%",
        height:"auto",
        marginTop: 30,
        padding: 10,
    },
    FormLabel:{
        color:"#ffffff",
        fontSize:20,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        borderRadius:50,
        color:"#ffffff",
        backgroundColor:"#21222c",
        height:50,
        margin:12,
        paddingLeft:10,
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#FF0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30,
    },
    textButtonCalculator:{
        fontSize: 20,
        color:"#ffffff",
    }
});

export default styles