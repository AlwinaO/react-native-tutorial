import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles/display_count_styles'


export default function DisplayCount() {
    return (
        <View style={styles.count_container}>
            <Text style={{fontSize: 30}}>5</Text>
        </View>
    )
}