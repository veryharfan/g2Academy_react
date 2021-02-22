import React from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Context} from '../../store';
import Card from '../../Component/Card';

const HomeScreen = ({navigation}) => {
  const {product, cart} = React.useContext(Context);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={product}
            renderItem={({item}) => (
              <Card product={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.product_name + item.id}
            numColumns={2}
            extraData={cart}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
