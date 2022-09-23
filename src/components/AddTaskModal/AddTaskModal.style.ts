import { StyleSheet,Dimensions } from "react-native";
import Colors from "../../styles/Colors";
import Fonts from "../../styles/Fonts";
const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    modalContainer:{
    justifyContent:'flex-end',
    margin:0,
    },
    container:{
        backgroundColor:Colors.defaultGreeyColor,
        height:deviceSize.height/3,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:10,
    },
    title:{
        color: Colors.defaultTitleColor,
        fontFamily: Fonts.defaultRegularFontFamily,
        textAlign: 'center',
        fontSize:18,
    },
    textInput:{
     borderWidth:1,
     borderRadius:10,
     borderColor:'white',
     marginTop:30
    },
    buttonContainer:{
        backgroundColor:Colors.defaultGreenColor,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginTop:30,
    },
    buttonTitle:{
     color:Colors.defaultDarkColor,
     fontFamily: Fonts.defaultRegularFontFamily,
     fontSize:15,
    }
})