import React from 'react';
import { 
    Text, 
    StyleSheet
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg'

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

export function PlantCardPrimary({
    data,
    ...rest 
} : PlantProps) {
    return (
        <RectButton
            style={[
                styles.container,
                // active && styles.containerActive // Se o active for verdadeiro adiciona style containerActive
            ]}
            {...rest}
        >
            <SvgFromUri 
                uri={data.photo}
                width={70}
                height={70}
            />
            <Text 
                style={[
                    styles.text,
                    // active && styles.textActive // Se o active for verdadeiro adiciona style textActive
                ]}
            >
                { data.name }
            </Text>
        </RectButton>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10
    },

    // containerActive: {
    //     backgroundColor: colors.green_light
    // },

    text: {
        color: colors.green_dark,
        fontFamily: fonts.heading,
        marginVertical: 16
    },

    // textActive: {
    //     fontFamily: fonts.heading,
    //     color: colors.green_dark,
    // }
})