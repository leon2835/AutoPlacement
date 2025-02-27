import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Library
import Modal from 'react-native-modal';

//Context
import {ThemeContext} from '../context/provider/ThemeProvider';

//Custom Components / files
import {overlayColor} from '../assets/styles/Colors';

export default function ConfirmationDialog(props) {
  const {style} = useContext(ThemeContext);

  return (
    <Modal
      style={{
        margin: 40,
      }}
      isVisible={props.displayModal}
      backdropColor={overlayColor}
      coverScreen={true}
      animationInTiming={300}>
      <View style={{backgroundColor: 'white', borderRadius: 15}}>
        <View
          style={{
            paddingVertical: 20,
            paddingHorizontal: 40,
          }}>
          <Text
            style={[
              style.normalTextBold,
              {
                textAlign: 'center',
              },
            ]}>
            {props.displayMessage}
          </Text>
        </View>
        <View style={{width: '100%', height: 1, backgroundColor: 'grey'}} />
        <TouchableOpacity onPress={props.okAction}>
          <Text
            style={[
              style.largeText,
              {
                textAlign: 'center',
                paddingVertical: 15,
              },
            ]}>
            {props.okLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
