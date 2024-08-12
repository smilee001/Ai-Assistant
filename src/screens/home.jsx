import { Alert, BackHandler, Image, Keyboard, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { style } from "../constants/style";
import { useEffect, useRef, useState } from "react";
import Features from "../components/features";
import Voice from '@react-native-voice/voice';
import { ApiCall } from "../api/openAi";
import Tts from 'react-native-tts';
import LoadingCircle from "../components/loading";
import MicAnimation from "../components/voiceoff";
import TypewriterText from "../components/typing";

const Home = () => {

    const [messages, setmessages] = useState([]);
    const [recording, setrecording] = useState(false);
    const [speaking, setspeaking] = useState(false);
    const [result, setresult] = useState();
    const [loading, setloading] = useState(false);
    const ScrollViewRef = useRef();
    const [isTyping, setIsTyping] = useState(false);

    const speechStartHandler = e => {
        console.log("speech start");
    }
    const speechEndHandler = e => {
        setrecording(false);
        console.log("speech End");
    }
    const speechResultHandler = e => {
        console.log("speech Result", e);
        const test = e.value[0];
        setresult(test);
    }

    useEffect(() => {
        fetchResponce();
    }, [result]);

    const speechErrorHandler = e => {
        console.log("speech error", e);
    }

    const startrecording = async () => {
        Tts.stop();
        setrecording(true);
        setspeaking(false);
        try {
            await Voice.start('en-GB');
        }
        catch (error) {
            console.log('error : ', error)
        }
    }
    const stoprecording = async () => {
        try {
            await Voice.stop();
            setrecording(false);
            fetchResponce();
        }
        catch (error) {
            console.log('error : ', error)
        }
    }

    const fetchResponce = () => {
        if (result && result.trim().length > 0) {
            let newMessages = [...messages]
            newMessages.push({ role: 'user', content: result.trim() });
            setmessages(newMessages);
            setloading(true);
            updateScrollView();
            ApiCall(result.trim(), newMessages).then(res => {
                setloading(false);
                if (res.success) {
                    setmessages([...res.data]);
                    updateScrollView();
                    setresult('');
                    startTextToSpeech(res.data[res.data.length - 1])
                } else {
                    console.log('Error :', res.msg);
                }
            })
        }
    }

    const startTextToSpeech = message => {
        setspeaking(true);
        Tts.speak(message.content, {
            androidParams: {
                KEY_PARAM_PAN: -1,
                KEY_PARAM_VOLUME: 1,
                KEY_PARAM_STREAM: 'STREAM_MUSIC',
            },
        });
    }

    const handleTypingStart = () => {
        setIsTyping(true);
    };

    const handleTypingEnd = () => {
        setIsTyping(false);
    };

    const updateScrollView = () => {
        ScrollViewRef?.current?.scrollToEnd({ animated: true })
    }

    useEffect(() => {
        let scrollInterval;

        if (isTyping) {
            scrollInterval = setInterval(() => {
                ScrollViewRef.current.scrollToEnd({ animated: true });
            }, 300);
        } else {
            clearInterval(scrollInterval);
        }

        return () => clearInterval(scrollInterval);
    }, [isTyping]);

    const clear = () => {
        Tts.stop();
        setspeaking(false);
        setmessages([]);
    }

    const stopspeak = () => {
        Tts.stop();
        setspeaking(false);
    }

    useEffect(() => {

        Voice.onSpeechStart = speechStartHandler;
        Voice.onSpeechEnd = speechEndHandler;
        Voice.onSpeechResults = speechResultHandler;
        Voice.onSpeechError = speechErrorHandler;

        //tts

        Tts.addEventListener('tts-start', (event) => { });
        Tts.addEventListener('tts-progress', (event) => { });
        Tts.addEventListener('tts-finish', (event) => { setspeaking(false) });
        Tts.addEventListener('tts-cancel', (event) => { });

        return () => {
            Voice.destroy().then(Voice.removeAllListeners);
        }

    }, [])

    const [inputHeight, setInputHeight] = useState(40);
    const [inputText, setInputText] = useState('');
    const maxLines = 4;

    const sendmessage = () => {
        setresult(inputText);
        setInputText('');
        setInputHeight(40);
        fetchResponce();
    }

    const handleContentSizeChange = (e) => {
        const newHeight = Math.max(40, e.nativeEvent.contentSize.height);
        setInputHeight(newHeight);
    };

    const clearmessagebox = () => {
        setInputText('');
        setInputHeight(40);
    }

    useEffect(() => {
        setrecording(false);
    }, [inputText])

    useEffect(() => {
        const backAction = () => {
            Alert.alert(
                'Exit App',
                'Do you want to exit?',
                [
                    {
                        text: 'Cancel',
                        onPress: () => null,
                        style: 'cancel',
                    },
                    {
                        text: 'OK',
                        onPress: () => BackHandler.exitApp(Tts.stop()),
                    },
                ],
                { cancelable: false }
            );
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <>
            <View style={style.homemain}>
                <SafeAreaView style={style.homesafe}>

                    <View style={style.homeimgcls}>
                        <Image style={style.homebotimg} source={require('../../assets/images/boticon.png')}></Image>
                    </View>
                    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                        {
                            messages.length > 0 ? (

                                <View style={style.featmain}>
                                    <View style={style.rowline}>
                                        <Text style={style.feature}>Assistant</Text>
                                        {
                                            messages.length > 0 && (
                                                <TouchableOpacity onPress={clear}>
                                                    <Text style={style.cleartxt}>Clear All</Text>
                                                </TouchableOpacity>
                                            )
                                        }
                                    </View>

                                    <View style={style.messagebox}>
                                        <ScrollView
                                            ref={ScrollViewRef}
                                            bounces={false}
                                            showsVerticalScrollIndicator={false}
                                        >
                                            {
                                                messages.map((messages, index) => {
                                                    {
                                                        if (messages.role == 'assistant') {
                                                            return (
                                                                <View key={index} style={style.assmsg}>
                                                                    <View style={style.assmsgtbox}>
                                                                        <TypewriterText text={messages.content} style={style.assmsgtxt}
                                                                            onTypingStart={handleTypingStart}
                                                                            onTypingEnd={handleTypingEnd} />
                                                                    </View>
                                                                </View>
                                                            )
                                                        }
                                                        else {
                                                            return (
                                                                <View key={index} style={style.usermsg}>
                                                                    <View style={style.usermsgtbox}>
                                                                        <Text style={style.usermsgtxt}>{messages.content}</Text>
                                                                    </View>
                                                                </View>
                                                            )
                                                        }
                                                    }
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                </View>

                            ) : (
                                <Features />
                            )
                        }
                    </KeyboardAvoidingView>

                    <View style={style.recording}>

                        <View style={style.innerrecording}>

                            {speaking ? (
                                <TouchableOpacity onPress={stopspeak}>
                                    <Text style={style.stoptxt}>Stop</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={style.txtinputbox}>
                                    <TextInput
                                        multiline={true}
                                        style={[style.txtinput, { height: Math.min(inputHeight, 20 * maxLines) }]}
                                        placeholder="Type a message"
                                        placeholderTextColor="gray"
                                        value={inputText}
                                        onChangeText={setInputText}
                                        onContentSizeChange={handleContentSizeChange}
                                        maxHeight={20 * maxLines}
                                    />
                                    {inputText.length > 0 && (
                                        <TouchableOpacity style={style.clearbtnbox} onPress={clearmessagebox}>
                                            <Image style={style.clearbtn} source={require('../../assets/images/clear.png')} />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            )}



                            {
                                loading ? (
                                    <LoadingCircle />
                                ) : (
                                    inputText.length > 0 ? (
                                        <TouchableOpacity style={style.micetouch} onPress={() => { Keyboard.dismiss(); sendmessage(); }}>
                                            <Image style={style.recodmic} source={require('../../assets/images/send.png')} />
                                        </TouchableOpacity>
                                    ) : (
                                        recording ? (
                                            <TouchableOpacity onPress={stoprecording} style={style.micetouch}>
                                                <MicAnimation />
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={startrecording} style={style.micetouch}>
                                                <Image source={require('../../assets/images/voiceon.png')} style={style.recodmic} />
                                            </TouchableOpacity>
                                        )

                                    )
                                )
                            }
                        </View>
                    </View>

                </SafeAreaView >
            </View >
        </>
    )

}

export default Home;