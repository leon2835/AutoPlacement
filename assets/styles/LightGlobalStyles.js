import {PixelRatio, Dimensions, StyleSheet, Platform} from 'react-native';
import {textPrimaryColor} from './Colors';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

export function actuatedNormalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
}

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleTextBold: {
    fontSize: actuatedNormalize(20),
    color: textPrimaryColor,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: actuatedNormalize(20),
    color: textPrimaryColor,
  },
  largeText: {
    fontSize: actuatedNormalize(16),
    color: textPrimaryColor,
  },
  normalTextBold: {
    fontSize: actuatedNormalize(14),
    color: textPrimaryColor,
    fontWeight: 'bold',
  },
  normalText: {
    fontSize: actuatedNormalize(14),
    color: textPrimaryColor,
  },
});
