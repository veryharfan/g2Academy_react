import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
} from 'react-native';
import axios from 'axios';

const Item = ({name, height, mass}) => (
  <View style={styles.item}>
    <View style={styles.name}>
      <Text>{name}</Text>
    </View>
    <View style={styles.data}>
      <Text>{height}</Text>
    </View>
    <View style={styles.data}>
      <Text>{mass}</Text>
    </View>
  </View>
);

const App = () => {
  const [state, setstate] = React.useState([
    {
      name: 'fsad',
      height: 14,
      mass: 34,
    },
    {
      name: 'fsfead',
      height: 1434,
      mass: 3423,
    },
  ]);

  React.useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/?pages=1')
      .then((res) => setstate(res.data.results));
  }, []);

  console.log(state);

  const renderItem = ({item}) => (
    <Item name={item.name} height={item.height} mass={item.mass} />
  );

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <FlatList data={state} renderItem={renderItem} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    flex: 2
  },
  data: {
    flex: 1
  }
});

export default App;
