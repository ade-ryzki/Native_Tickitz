/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

export const commonStyle = StyleSheet.create({
    textBlack: { color: '#333' },
    textColor: { color: '#5b79cf' },
    textAlign: { textAlign: 'center' },
    textBold: { fontWeight:'bold'},
    textSize: { fontSize: 30},
    flexRow: { flexDirection: 'row' },
    flexColumn: { flexDirection: 'column' },
    flexCenter: { justifyContent: 'center', alignItems: 'center' },
    flexBetween: { justifyContent: 'space-between' },
    ml: { marginLeft: 30},
    mt: { marginTop: 40},
    mr: { marginRight:15},
    m: { marginHorizontal: 10}
})

