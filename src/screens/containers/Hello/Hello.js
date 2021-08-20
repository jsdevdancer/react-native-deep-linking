import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import BackgroundImage from '../../../res/mountain.png'

const Hello = ({ navigation }) => {
  const [broadcasts, setBroadcasts] = useState(204)
  const [courses, setCourses] = useState(53)
  const [people, setPeople] = useState(7301)
  return (
    <View style={styles.ViewContainer}>
      <Image style={styles.BackgroundImage} source={BackgroundImage}></Image>
      <View style={styles.TextContainer}>
        <Text style={styles.TitleText}>Hello</Text>
        <Text style={styles.InfoTextText}>
          {broadcasts}次直播 · {courses}个系列课程 · {people}人已加入
        </Text>
      </View>
    </View>
  )
}

export default Hello
