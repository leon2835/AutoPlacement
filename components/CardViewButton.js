import React, {useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';

//Library
import CardView from 'react-native-cardview';

//Context
import {ThemeContext} from '../context/provider/ThemeProvider';
import {TranslationContext} from '../context/provider/TranslationProvider';

//Custom Components / files
import {primaryColor} from '../assets/styles/Colors';

export default function CardViewButton(props) {
  const {style} = useContext(ThemeContext);
  const {translations} = useContext(TranslationContext);

  return (
    <CardView
      style={[
        {
          backgroundColor: primaryColor,
          marginHorizontal: 20,
          marginBottom: 20,
        },
      ]}
      cardElevation={5}
      cardMaxElevation={5}
      cornerRadius={10}>
      <TouchableOpacity
        style={{
          padding: 20,
        }}
        onPress={() => props.action()}>
        <Text style={[style.largeText, {textAlign: 'center', color: 'white'}]}>
          {translations[props.buttonTitle]}
        </Text>
      </TouchableOpacity>
    </CardView>
  );
}
