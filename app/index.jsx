import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import WelcomeImg from '../assets/images/welcome.png';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { hp } from '../helpers/common';
import { theme } from '../constants/theme';

const Welcome = () => {
    return (
        <View className="flex-1">
            <StatusBar style="light" />
            <Image source={WelcomeImg} resizeMode="cover" className="w-full h-full absolute" />

            <Animated.View entering={FadeInDown.duration(600)} className="flex-1">
                <LinearGradient
                    colors={['rgba(225,225,225,0)', 'rgba(225,225,225,0.5)', 'white', 'white']}
                    className="w-full h-[65%] bottom-0 absolute"
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 0.8 }}
                />

                <View className="flex-1 items-center justify-end gap-3">
                    <Animated.Text entering={FadeInDown.delay(400).springify()} className="font-bold" style={{ fontSize: hp(7), color: theme.colors.neutral(0.9) }}>WalPix</Animated.Text>
                    <Animated.Text entering={FadeInDown.delay(500).springify()} className="tracking-wider mb-2 font-medium" style={{ fontSize: hp(2) }}>Your World, Your Wallpapers</Animated.Text>

                    <Animated.View entering={FadeInDown.delay(600).springify()}>
                        <Pressable className="mb-12 rounded-[18px]" style={{ backgroundColor: theme.colors.neutral(0.9), padding: 15, paddingHorizontal: 90, borderCurve: 'continuous' }}>
                            <Text className="text-white font-medium tracking-wider" style={{ fontSize: hp(3) }}>Start Explore</Text>
                        </Pressable>
                    </Animated.View>
                </View>

            </Animated.View>


        </View>
    );
};

export default Welcome;
