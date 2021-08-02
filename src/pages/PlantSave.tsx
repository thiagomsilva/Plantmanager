import React, { useState } from 'react';
import { 
    Alert,
    StyleSheet,
    Text, 
    View, 
    Image,
    ScrollView,
    Platform, 
    TouchableOpacity, 
    // SafeAreaView, 
    // TextInput, 
    // KeyboardAvoidingView, 
    // Keyboard,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg'
import waterDrop from '../assets/waterdrop.png'

import { Button } from '../components/Button'

import colors from '../styles/colors'; 


import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

import fonts from '../styles/fonts';

export function PlantSave() {
    return (
        <View style={styles.container}>
            <View style={styles.plantInfo}>
                <SvgFromUri
                    uri=""
                    height={150}
                    width={150}
                />

                <Text style={styles.plantName}>
                    Nome da Planta
                </Text>
                <Text style={styles.plantAbout}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Velit molestiae labore a, non iure impedit ex eveniet minima, facere consectetur, 
                    mollitia porro quam alias quaerat vero sint rerum unde excepturi!
                </Text>
            </View>

            <View style={styles.controller}>
                <View style={styles.tipContainer}>
                    <Image
                        source={waterDrop}
                        style={styles.tipImage}
                    />
                    <Text style={styles.tipText}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Id, rerum. Nisi dolorem earum id nam veritatis quisquam adipisci, numquam sapiente, 
                        odio placeat optio! Magnam, deserunt. Asperiores omnis rerum dolorem reiciendis?
                    </Text>
                </View>

                <Text style={styles.alertLabel}>
                    Escolha o melhor horário para ser lembrado:
                </Text>

                <Button 
                    title="Cadastrar Planta"
                    onPress={() => {}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: colors.shape,
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape,
    },
});