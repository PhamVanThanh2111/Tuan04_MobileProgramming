import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Rect } from 'react-native-svg';

const Screen2_c = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.background}>
        <Defs>
          <RadialGradient id="grad" cx="50%" cy="50%" r="80%" fx="50%" fy="50%">
            <Stop offset="0%" stopColor="#C4C4C4" stopOpacity="1" />
            <Stop offset="100%" stopColor="#3B3B98" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width={'100%'} height={'100%'} fill="url(#grad)" />
      </Svg>

      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PASSWORD{'\n'}GENERATOR</Text>
        </View>
        <View style={styles.passwordContainer}></View>
        <View style={styles.contentContainer}>
          <View style={styles.rowInContent}>
            <Text style={styles.textInRowContent}>Password length</Text>
            <View
              style={{
                backgroundColor: 'white',
                height: 33,
                width: 118,
                marginLeft: 20,
              }}></View>
          </View>
          <View style={styles.rowInContent}>
            <Text style={styles.textInRowContent}>
              Include lower case letters
            </Text>
            <View style={{ backgroundColor: 'white', height: 25, width: 25 }}>
              <Image
                style={{ width: 21, height: 21, marginLeft: 2 }}
                source={require('../Images/check.png')}
              />
            </View>
          </View>
          <View style={styles.rowInContent}>
            <Text style={styles.textInRowContent}>Include upcase letters</Text>
            <View style={{ backgroundColor: 'white', height: 25, width: 25 }}>
              <Image
                style={{ width: 21, height: 21, marginLeft: 2 }}
                source={require('../Images/check.png')}
              />
            </View>
          </View>
          <View style={styles.rowInContent}>
            <Text style={styles.textInRowContent}>Include number</Text>
            <View style={{ backgroundColor: 'white', height: 25, width: 25 }}>
              <Image
                style={{ width: 21, height: 21, marginLeft: 2 }}
                source={require('../Images/check.png')}
              />
            </View>
          </View>
          <View style={styles.rowInContent}>
            <Text style={styles.textInRowContent}>Include special symbol</Text>
            <View style={{ backgroundColor: 'white', height: 25, width: 25 }}>
              <Image
                style={{ width: 21, height: 21, marginLeft: 2 }}
                source={require('../Images/check.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    width: '100%',
    height: '100%',
    padding: 20,
  },
  background: {
    position: 'absolute',
  },
  mainContainer: {
    width: '90%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#23235B',
    zIndex: 1,
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { color: 'white', fontSize: 25, fontWeight: 700, lineHeight: 30 },
  passwordContainer: {
    flex: 1,
    backgroundColor: '#151537',
    width: 300,
    height: 55,
    borderRadius: 7,
    marginTop: 13,
  },
  contentContainer: {
    flex: 5,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 44,
    rowGap: 44,
  },
  rowInContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInRowContent: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 24,
  },
  btnContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#3B3B98',
    width: 270,
    height: 55,
  },
  btnText: { color: 'white', fontSize: 18, fontWeight: 700, lineHeight: 55, textAlign: 'center' },
});

export default Screen2_c;
