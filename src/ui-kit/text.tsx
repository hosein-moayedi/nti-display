import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import colors from '../global-styles/colors';


type textWeight = 'regular' | 'medium' | 'extraBold'
type textSize = 'smallToMedium' | 'medium' | 'giant' | 'ExtraGiant'
type textColor = 'regular' | 'bold' | 'hint' | 'accent' | 'white'

interface Props extends TextProps {
    weight: textWeight,
    size: textSize,
    color: textColor
}

interface StylesProps {
    weight: textWeight,
    size: textSize,
    color: textColor
}

const _Text = (props: Props) => {
    const styles = getStyles({ color: props.color, weight: props.weight, size: props.size });

    return (
        <Text {...props} style={[styles.text, props.style]}>
            {props.children}
        </Text>
    );
};

_Text.defaultProps = {
    weight: 'regular',
    color: colors.text.regular,
    size: 'medium',
};

const sizes = {
    smallToMedium: 16,
    medium: 18,
    giant: 25,
    ExtraGiant: 50,
};

const fontWeight = {
    regular: 'Regular',
    medium: 'Medium',
    extraBold: 'ExtraBold',
};

/**
 * Styles
 */
const getStyles = (props: StylesProps) => {
    return StyleSheet.create({
        text: {
            fontFamily: `BalooThambi2${fontWeight[props.weight]}`,
            fontSize: sizes[props.size],
            color: colors.text[props.color]
        },
    })
};

export default _Text;
