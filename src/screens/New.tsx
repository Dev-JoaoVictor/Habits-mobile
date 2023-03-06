import { useState } from "react";
import { ScrollView, View, Text, TextInput } from "react-native";

import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

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

        <Text className="mt-4 mb-3 text-base font-semibold text-white">
          Qual a recorrência?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}
      </ScrollView>
    </View>
  );
}
