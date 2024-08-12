import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { style } from "../constants/style";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {

    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={style.welscreen}>

                <View style={style.jarvisbox}>
                    <Text style={style.jarvis}>Jarvis</Text>
                    <Text style={style.jarvisdis}>The future is here, Powered by AI.</Text>
                </View>

                <View style={style.imgcls}>
                    <Image style={style.botimg} source={require('../../assets/images/boticon.png')}></Image>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={style.startbtn}>
                    <Text style={style.sbtxt}>Get Started</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )

}

export default Welcome;