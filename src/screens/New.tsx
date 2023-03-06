import { ScrollView, View, Text, TextInput } from "react-native";

import { BackButton } from "../components/BackButton";

export function New() {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackButton />
        <Text className=" mt-6 text-3xl text-white font-extrabold">
          Criar hábito
        </Text>
        <Text className=" mt-6 text-base font-semibold text-white">
          Qual seu comprometimento?
        </Text>
        <TextInput 
        placeholder="Exercícios, dormi bem, etc..."
        className="bg-zinc-800 h-12 pl-4 rounded-lg mt-3 text-white focus:border-2 focus:border-green-600" 
        />
      </ScrollView>
    </View>
  );
}
