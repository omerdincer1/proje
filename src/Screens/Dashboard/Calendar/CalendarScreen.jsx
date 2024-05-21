import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['tr'] = {
  monthNames: [
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık',
  ],
  monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
  dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
  dayNamesShort: ['Pzr', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
};

LocaleConfig.defaultLocale = 'tr';

const CalendarScreen = () => {
  const [selected, setSelected] = useState('');
  const [wateringDates, setWateringDates] = useState({});
  const [plantingDates, setPlantingDates] = useState({});

  const markDates = () => {
    const wateringMarked = {};
    wateringMarked['2024-05-10'] = { selected: true, marked: true, selectedColor: 'red' };
    wateringMarked['2024-05-17'] = { selected: true, marked: true, selectedColor: 'red' };
    wateringMarked['2024-05-24'] = { selected: true, marked: true, selectedColor: 'red' };

    const plantingMarked = {};
    plantingMarked['2024-05-05'] = { selected: true, marked: true, selectedColor: 'green'};
    plantingMarked['2024-05-06'] = { selected: true, marked: true, selectedColor: 'green' };
    plantingMarked['2024-05-26'] = { selected: true, marked: true, selectedColor: 'green' };

    setWateringDates(wateringMarked);
    setPlantingDates(plantingMarked);
  };

  useEffect(() => {
    markDates();
  }, []);

  const handleDayPress = day => {
    setSelected(day.dateString);
  };

  const renderMarkedDates = (dates) => {
    return Object.keys(dates).map(date => (
      <View key={date} style={styles.legendItem}>
        <Text style={{fontSize:15, color:"green", fontWeight:"700"}}> {'-'} {date}</Text>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Calendar
          onDayPress={handleDayPress}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: 'orange',
            todayButtonFontSize:"bold",
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'black',
            disabledArrowColor: '#d9e1e8',
            monthTextColor: 'green',
            indicatorColor: 'green',
            textMonthFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16,
          }}
          markedDates={{
            ...wateringDates,
            ...plantingDates,

            [selected]: { selected: true, disableTouchEvent: true },
          }}
        />
        <View style={styles.legendContainer}>
          <View>
            <Text style={styles.legendTitle}>Sulama Yapılacak Günler</Text>
            {renderMarkedDates(wateringDates)}
          </View>
          <View>
            <Text style={styles.legendTitle}>Ekim Yapılan Günler</Text>
            {renderMarkedDates(plantingDates)}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    margin: 20,
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  legendTitle: {
    fontSize: 17,
    color:"orange",
    fontWeight: '700',
    marginBottom: 10,
  },
});

export default CalendarScreen;
