import React, {useContext} from 'react';
import {View, TouchableOpacity, Image, Text, Dimensions} from 'react-native';

//Context
import {ThemeContext} from '../context/provider/ThemeProvider';

//Custom Components / files
import {primaryColor} from '../assets/styles/Colors';

export default function TopHeader(props) {
  const {style} = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: primaryColor,
        paddingHorizontal: 20,
      }}>
      <View
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          },
        ]}>
        <View style={{flex: 0.15}}>
          <TouchableOpacity onPress={props.leftOnPress}>
            {props.leftIcon && (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  tintColor: 'white',
                }}
                source={props.leftIcon}
              />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
            minHeight: Dimensions.get('window').height * 0.04,
          }}>
          <Text
            style={[
              style.normalTextBold,
              {
                color: 'white',
                textAlign: 'center',
              },
            ]}
            numberOfLines={2}
            ellipsizeMode="tail">
            {props.title}
          </Text>
        </View>
        <View style={{flex: 0.15}}>
          <TouchableOpacity onPress={props.rightOnPress}>
            {props.rightIcon && (
              <Image
                style={{
                  width: 30,
                  height: 30,
                  alignSelf: 'flex-end',
                  tintColor: 'white',
                }}
                source={props.rightIcon}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
