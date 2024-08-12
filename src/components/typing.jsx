import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

const TypewriterText = ({ text, style, onTypingStart, onTypingEnd }) => {
    const [displayedText, setDisplayedText] = useState('');
    const words = text.split(' ');

    useEffect(() => {
        let currentWordIndex = 0;
        const timer = setInterval(() => {
            if (currentWordIndex < words.length) {
                setDisplayedText(prevText => prevText + (prevText ? ' ' : '') + words[currentWordIndex]);
                currentWordIndex++;
            } else {
                clearInterval(timer);
                if (onTypingEnd) {
                    onTypingEnd();
                }
            }
        }, 50);

        if (onTypingStart) {
            onTypingStart();
        }

        return () => clearInterval(timer);
    }, []);

    return (
        <Text style={style}>{displayedText}</Text>
    );
};

export default TypewriterText;
