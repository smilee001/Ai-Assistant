import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing, Image } from 'react-native';
import { style } from '../constants/style';

export default class LoadingCircle extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 750,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => this.spin());
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={style.micetouch}>
                <Animated.Image
                    style={[style.recodmic, { transform: [{ rotate: spin }] }]}
                    source={require('../../assets/images/loading.png')}
                />
            </View>
        );
    }
}