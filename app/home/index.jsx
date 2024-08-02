import { View, Text, Pressable, ScrollView, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '../../constants/theme';
import { hp, wp } from '../../helpers/common';

const Home = () => {
    const [search, setSearch] = useState('');

    const searchInputRef = useRef(null);

    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 10 : 30;
    return (
        <View className="flex-1 gap-4" style={{ paddingTop }}>
            <View className="flex-row justify-between items-center" style={{ paddingHorizontal: wp(4) }}>
                <Pressable>
                    <Text ref={searchInputRef} className="font-semibold " style={{ fontSize: hp(4), color: theme.colors.neutral(0.9) }}>
                        WalPix
                    </Text>
                </Pressable>
                <Pressable>
                    <FontAwesome6 name="bars-staggered" size={22} color={theme.colors.neutral(0.7)} />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 15 }}>
                <View className="flex-row justify-between items-center border bg-white p-2 pl-2 rounded-2xl" style={{ marginHorizontal: wp(4), borderColor: theme.colors.grayBg }}>
                    <View className="p-2">
                        <Feather name="search" size={24} color={theme.colors.neutral(0.4)} />
                    </View>
                    <TextInput placeholder='Search photos...' className="flex-1 rounded-[10px]" style={{ paddingVertical: 10, fontSize: hp(1.8) }} onChangeText={(value) => setSearch(value)} />

                    {search && (
                        <Pressable className="rounded-[10px] p-2" style={{ backgroundColor: theme.colors.neutral(0.1) }}>
                            <Ionicons name="close" size={24} color={theme.colors.neutral(0.6)} />
                        </Pressable>
                    )}

                </View>
            </ScrollView>
        </View>
    )
}

export default Home