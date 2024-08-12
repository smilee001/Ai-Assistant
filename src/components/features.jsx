import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { style } from "../constants/style";

const Features = () => {
    return (
        <>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={style.featmain}>
                    <Text style={style.feature}>Feature</Text>

                    <View style={style.chatcard}>
                        <View style={style.chatrow}>
                            <Image style={style.chatimg} source={require('../../assets/images/chatgpt.png')}></Image>
                            <Text style={style.chatname}>ChatGPT</Text>
                        </View>
                        <Text style={style.chatdis}>ChatGPT can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.</Text>
                    </View>

                    <View style={style.chatcard1}>
                        <View style={style.chatrow}>
                            <Image style={style.chatimg} source={require('../../assets/images/dalle.png')}></Image>
                            <Text style={style.chatname}>DALL-E</Text>
                        </View>
                        <Text style={style.chatdis}>DALL-E can generate imaginative and diverse images from textual descriptions, expanding the boundaries of visual creativity.</Text>
                    </View>

                    <View style={style.chatcard2}>
                        <View style={style.chatrow}>
                            <Image style={style.chatimg} source={require('../../assets/images/smartai.png')}></Image>
                            <Text style={style.chatname}>Smart AI</Text>
                        </View>
                        <Text style={style.chatdis}>A powerful voice assistant with the abilities of ChatGPT and Dall-E, providing you the best of both worlds.</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

export default Features;