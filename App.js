import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import foto from './very.jpeg';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerTop} />
          <View style={styles.photoProfile}>
            <Image source={foto} style={styles.foto} />
          </View>
          <View style={styles.headerbottom} />
          <View style={styles.subContainer}>
            <Text style={styles.f1} hidden>
              Very Harfan
            </Text>
            <Text style={[styles.f3, styles.bold]}>Date of Birth</Text>
            <Text style={styles.f2}>14 February 1995</Text>
            <Text style={[styles.f3, styles.bold]}>Address</Text>
            <Text style={styles.f2}>
              Jl. Kota Bambu Utara II, Palmerah, Jakarta Barat
            </Text>
          </View>
          <View style={[styles.subContainer, styles.m1]}>
            <Text style={[styles.f1, styles.bold]}>Activity</Text>
            <Text style={styles.f2}>
              Fullstack web development student at G2Academy
            </Text>
            <Text style={styles.f2}>Seller at e-commerce</Text>
          </View>
          <View style={[styles.subContainer, styles.m1]}>
            <Text style={[styles.f1, styles.bold]}>Education</Text>
            <Text style={styles.f2}>Bachelor's Degree, Mathematics</Text>
          </View>
          <View style={[styles.subContainer, styles.m1]}>
            <Text style={[styles.f1, styles.bold]}>Contact</Text>
            <Text style={styles.f2}>0812 1148 5034</Text>
            <Text style={styles.f2}>veryharfan@gmail.com</Text>
            <Text style={styles.f2}>www.github.com/veryharfan</Text>
          </View>
          <View style={[styles.subContainer, styles.m1]}>
            <Text style={[styles.f1, styles.bold]}>Skills</Text>
            <View style={styles.row}>
              <Text style={[styles.f2, styles.skill]}>Java</Text>
              <View style={styles.indikator}>
                <View style={[styles.on, styles.on1]} />
                <View style={[styles.off, styles.off1]} />
              </View>
            </View>
            <View style={styles.row}>
              <Text style={[styles.f2, styles.skill]}>Javascript</Text>
              <View style={styles.indikator}>
                <View style={[styles.on, styles.on2]} />
                <View style={[styles.off, styles.off2]} />
              </View>
            </View>
            <View style={styles.row}>
              <Text style={[styles.f2, styles.skill]}>HTML</Text>
              <View style={styles.indikator}>
                <View style={[styles.on, styles.on3]} />
                <View style={[styles.off, styles.off3]} />
              </View>
            </View>
            <View style={styles.row}>
              <Text style={[styles.f2, styles.skill]}>CSS</Text>
              <View style={styles.indikator}>
                <View style={[styles.on, styles.on4]} />
                <View style={[styles.off, styles.off4]} />
              </View>
            </View>
            <View style={styles.row}>
              <Text style={[styles.f2, styles.skill]}>Python</Text>
              <View style={styles.indikator}>
                <View style={[styles.on, styles.on5]} />
                <View style={[styles.off, styles.off5]} />
              </View>
            </View>
            <View style={styles.row}>
              <Text style={[styles.f2, styles.skill]}>SQL</Text>
              <View style={styles.indikator}>
                <View style={[styles.on, styles.on6]} />
                <View style={[styles.off, styles.off6]} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'lightgray',
  },
  headerTop: {
    backgroundColor: '#0A66C2',
    height: 80,
  },
  headerbottom: {
    height: 60,
    backgroundColor: 'white',
  },
  photoProfile: {
    borderRadius: 50,
    position: 'absolute',
    top: 30,
    left: 15,
    backgroundColor: 'white',
    height: 100,
    width: 100,
    padding: 5,
    zIndex: 1,
  },
  foto: {
    width: 90,
    height: 90,
    overflow: 'hidden',
    borderRadius: 50,
  },
  subContainer: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  f1: {
    fontSize: 18,
    marginBottom: 5,
  },
  f2: {
    fontSize: 16,
  },
  f3: {
    fontSize: 18,
    marginTop: 3,
  },
  bold: {
    fontWeight: 'bold',
  },
  m1: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  indikator: {
    flexDirection: 'row',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  skill: {
    flex: 1,
  },
  on: {
    backgroundColor: '#01003A',
    height: 20,
  },
  off: {
    backgroundColor: 'white',
    height: 16,
  },
  on1: {
    flex: 60,
  },
  off1: {
    flex: 40,
  },
  on2: {
    flex: 65,
  },
  off2: {
    flex: 35,
  },
  on3: {
    flex: 75,
  },
  off3: {
    flex: 25,
  },
  on4: {
    flex: 70,
  },
  off4: {
    flex: 30,
  },
  on5: {
    flex: 60,
  },
  off5: {
    flex: 40,
  },
  on6: {
    flex: 75,
  },
  off6: {
    flex: 25,
  },
});

export default App;
