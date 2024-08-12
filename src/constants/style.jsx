import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const style = StyleSheet.create({

    // welcome screen //

    welscreen: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },

    jarvisbox: {
        gap: 5
    },

    jarvis: {
        fontSize: wp(10),
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgb(55 65 81)',
    },

    jarvisdis: {
        fontSize: wp(4),
        fontWeight: '500',
        textAlign: 'center',
        color: 'rgb(75 85 99)'
    },

    imgcls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    botimg: {
        width: wp(100),
        height: wp(90)
    },

    startbtn: {
        marginHorizontal: 25,
        paddingVertical: 15,
        backgroundColor: 'rgb(5 150 105)',
        borderRadius: 15,
        borderColor: '#000',
        borderWidth: 4
    },

    sbtxt: {
        fontSize: wp(6),
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#000'
    },

    // home screen //

    homemain: {
        flex: 1,
        backgroundColor: '#fff'
    },

    homesafe: {
        flex: 1,
        marginHorizontal: 5
    },

    homeimgcls: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: wp(2)
    },

    homebotimg: {
        width: hp(15),
        height: hp(15)
    },

    // Feature //

    featmain: {
        padding: wp(4),
        paddingBottom: wp(0)
    },

    feature: {
        fontSize: wp(6.5),
        color: 'rgb(55 65 81)',
        fontWeight: '500'
    },

    rowline: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    cleartxt: {
        paddingVertical: wp(1),
        paddingHorizontal: wp(5),
        paddingTop: wp(1.5),
        textAlign: 'center',
        fontSize: wp(5),
        borderRadius: 15,
        color: '#000',
        fontWeight: '500',
        backgroundColor: '#19C37D',
        borderColor: '#000',
        borderWidth: 2,
        borderBottomRightRadius: 0
    },

    chatcard: {
        backgroundColor: 'rgb(167 243 208)',
        marginVertical: wp(2),
        padding: wp(4),
        borderRadius: wp(3),
        borderWidth: 3,
        borderColor: 'green'
    },

    chatcard1: {
        backgroundColor: 'rgb(233 213 255)',
        marginVertical: wp(2),
        padding: wp(4),
        borderRadius: wp(3),
        borderWidth: 3,
        borderColor: 'purple'
    },

    chatcard2: {
        backgroundColor: 'rgb(165 243 252)',
        marginVertical: wp(2),
        padding: wp(4),
        borderRadius: wp(3),
        borderWidth: 3,
        borderColor: 'teal'
    },

    chatrow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    chatimg: {
        width: wp(11),
        height: wp(11)
    },

    chatname: {
        fontSize: wp(5),
        fontWeight: '600',
        color: 'rgb(31 41 55)'
    },

    chatdis: {
        fontSize: wp(3.8),
        lineHeight: wp(5.2),
        textAlign: 'justify',
        fontWeight: '500',
        color: 'rgb(55 65 81)',
        marginTop: wp(1)
    },

    //  MessagesBox //

    messagebox: {
        height: hp(61.5),
        backgroundColor: 'rgb(229 229 229)',
        borderRadius: 15,
        marginVertical: wp(2),
        paddingVertical: wp(2),
        paddingHorizontal: wp(1),
        borderTopRightRadius: 0
    },

    usermsg: {
        display: 'flex',
        alignItems: 'flex-end'
    },

    usermsgtbox: {
        width: wp(70),
        backgroundColor: '#fff',
        borderBottomRightRadius: 0,
        borderRadius: 10,
        padding: wp(2),
        margin: wp(1),
        shadowColor: '#000',
        elevation: 3,
    },

    usermsgtxt: {
        fontSize: wp(4),
        color: '#000',
        lineHeight: wp(5.4)
    },

    assmsg: {
        display: 'flex',
        alignItems: 'flex-start'
    },

    assmsgtbox: {
        width: wp(70),
        backgroundColor: '#ADD8E6',
        borderRadius: 10,
        borderTopLeftRadius: 0,
        padding: wp(2),
        margin: wp(1),
        shadowColor: '#000',
        elevation: 3,
    },

    assmsgtxt: {
        fontSize: wp(4),
        color: '#000',
        lineHeight: wp(5.4)
    },

    aiimgbox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    aiimgcvr: {
        backgroundColor: 'rgb(209 250 229)',
        borderRadius: 10,
        borderTopLeftRadius: 0,
        padding: wp(2),
        margin: wp(2),
        shadowColor: '#000',
        elevation: 3,
    },

    aiimg: {
        width: wp(60),
        height: wp(60),
        borderRadius: 10,
    },

    //recording part //

    recording: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: wp(4.5),
        marginBottom: wp(7)
    },

    innerrecording: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    recodmic: {
        width: hp(5.5),
        height: hp(5.5),
        borderRadius: 50
    },

    micetouch: {
        borderRadius: 50,
        borderColor: '#000',
        borderWidth: 2,
        overflow: 'hidden'
    },

    txtinputbox: {
        width: wp(71),
        backgroundColor: '#F4F6FA',
        borderRadius: 15,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingVertical: wp(1)
    },

    stoptxt: {
        width: wp(25),
        marginVertical: wp(-1),
        paddingVertical: wp(1),
        paddingTop: wp(1.5),
        textAlign: 'center',
        fontSize: wp(5),
        borderRadius: 15,
        color: '#000',
        fontWeight: '500',
        backgroundColor: 'rgb(239 68 68)',
        borderColor: '#000',
        borderWidth: 2
    },

    txtinput: {
        width: '90%',
        fontSize: wp(4.5),
        paddingLeft: wp(4.2),
        paddingRight: wp(2.5),
        paddingVertical: wp(1),
        color: '#000'
    },

    clearbtnbox: {
        marginRight: wp(4.2),
        marginBottom: wp(3),
    },

    clearbtn: {
        width: hp(1.8),
        height: hp(1.8),
        tintColor: '#959595'
    }

})

export { style };