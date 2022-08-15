
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { strings } from '../../common/strings';
import { CardBoard } from '../../components';
import { Blank, Text } from '../../ui-kit';
import { styles } from './styles';

const showTimePeriod = 15
const initialHour = 5
const initialMinute = 0

const trainData = [
  {
    id: '7622',
    destination: 'Central Station',
    serviceTime: ['00:00', '24:00'],
    timeframe: 20,
    arriveTime: 0,
    showOnBoard: false,
    active: false
  },
  {
    id: '9898',
    destination: 'Circular',
    serviceTime: ['00:00', '24:00'],
    timeframe: 60,
    arriveTime: 0,
    showOnBoard: false,
    active: false
  },
  {
    id: '2890',
    destination: 'North Square',
    serviceTime: ['07:00', '22:00'],
    timeframe: 12,
    arriveTime: 0,
    showOnBoard: false,
    active: false
  },
  {
    id: '1892',
    destination: 'West Market',
    serviceTime: ['05:30', '01:30'],
    timeframe: 6,
    arriveTime: 0,
    showOnBoard: false,
    active: false
  }
]

export default function HomeScreen() {
  const [vitualTime, setVitualTime] = useState({ hour: initialHour, minute: initialMinute })
  const [data, setData] = useState(trainData)

  const convertStringTimeToNumber = (time: string) => {
    const [hour, min] = time.split(":");
    return parseInt(hour) * 60 + parseInt(min);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setVitualTime((prev) => {
        let vTime = { ...prev };
        ++vTime.minute;
        if (vTime.minute >= 60) {
          vTime.minute = 0;
          if (vTime.hour + 1 >= 24) {
            vTime.hour = 0;
          } else {
            ++vTime.hour;
          }
        }
        return vTime
      })
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let newData: {
      id: string,
      destination: string,
      serviceTime: string[],
      arriveTime: number,
      timeframe: number,
      showOnBoard: boolean,
      active: boolean
    }[] = []

    data.map((item) => {
      let startServiceTime = convertStringTimeToNumber(item.serviceTime[0]);
      let endServiceTime = convertStringTimeToNumber(item.serviceTime[1]);
      let vTime = convertStringTimeToNumber(`${vitualTime.hour}:${vitualTime.minute}`);
      let newItem = { ...item }

      if (startServiceTime < endServiceTime) {
        if (vTime >= startServiceTime && vTime < endServiceTime) {
          newItem = { ...newItem, active: true }
        } else {
          newItem = { ...newItem, active: false }
        }
      } else {
        if (vTime >= startServiceTime || vTime < endServiceTime)
          newItem = { ...newItem, active: true }
        else {
          newItem = { ...newItem, active: false }
        }
      }

      const arriveTime = item.timeframe - (vitualTime.minute % item.timeframe)
      if (arriveTime <= showTimePeriod) {
        newData.push({ ...newItem, arriveTime, showOnBoard: true })
        return
      }
      newData.push({ ...newItem, arriveTime, showOnBoard: false })
    })
    newData = _.sortBy(newData, ['arriveTime'])
    setData(newData)
  }, [vitualTime])

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Blank height={40} />
        <View style={styles.clockWrapperView}>
          <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />
          <Text size="ExtraGiant" color="white" weight='extraBold'>
            {`${vitualTime.hour / 10 < 1 ? "0" : ""}${vitualTime.hour}:${vitualTime.minute / 10 < 1 ? "0" : ""
              }${vitualTime.minute}`}
          </Text>
        </View>
        <Blank height={50} />
        <Text color='bold' weight='extraBold' size='giant'>{strings.screens.home.activeServices}</Text>
        <Blank height={10} />
        <CardBoard data={data.filter((item) => item.active === true && item.showOnBoard === true)} />
        <Blank height={40} />
        <Text color='bold' weight='extraBold' size='giant'>{strings.screens.home.inactiveServices}</Text>
        <Blank height={10} />
        <CardBoard data={data.filter((item) => item.active === false)} inactiveServices />
      </View>
    </ScrollView>
  )
}
