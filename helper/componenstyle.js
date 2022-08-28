import {StyleSheet} from 'react-native';

const componenstyle = StyleSheet.create({
  textBlack: {color: '#333'},
  textWhite: {color: '#fff'},
  textbold: {fontWeight: 'bold'},
  flexRow: {flexDirection: 'row'},
  flexColumn: {flexDirection: 'column'},
  flexCenter: {justifyContent: 'center', alignItems: 'center'},
  flexBetween: {justifyContent: 'space-between'},
  MainButton: {
    backgroundColor: '#5F2EEA',
    borderRadius: 10,
    paddingVertical: '5%',
  },
  inputBox: {
    backgroundColor: '#FCFDFE',
    borderRadius: 10,
    marginTop: '1%',
    paddingVertical: '0.5%',
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#dedede',
    marginBottom: '3%',
  },
  body: {marginHorizontal: '5%', paddingVertical: '7%'},
  header: {marginTop: '3%', marginBottom: '5%'},
});
export {componenstyle};
