import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { style } from '../constants/style';

export default class MicAnimation extends Component {
    constructor(props) {
        super(props);
        this.scaleValue = new Animated.Value(1);
    }

    componentDidMount() {
        this.animateMic();
    }

    animateMic() {
        Animated.loop(
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(this.scaleValue, {
                        toValue: 1.2,
                        duration: 500,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.scaleValue, {
                        toValue: 1,
                        duration: 500,
                        easing: Easing.inOut(Easing.ease),
                        useNativeDriver: true,
                    }),
                ])
            ])
        ).start();
    }

    render() {
        const scale = this.scaleValue;

        return (
                <Animated.Image
                    source={require('../../assets/images/voiceoff.png')}
                    style={[style.recodmic, { transform: [{ scale }] }]}
                />
        );
    }
}
