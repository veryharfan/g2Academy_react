import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {CheckoutCard, Separator} from '../../Component';
import {Context} from '../../store';

function Details({navigation}) {
  const {detail} = React.useContext(Context);
  const {
    id,
    product_name,
    product_price,
    image,
    description,
    stock,
  } = detail.details;

  const addComma = (n) => {
    let regex = /(\d+)(\d{3})/;
    return String(n).replace(/^\d+/, function (x) {
      while (regex.test(x)) {
        x = x.replace(regex, '$1.$2');
      }
      return x;
    });
  };

  return (
    <ScrollView>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.price}>Rp{addComma(product_price)}</Text>
        <Text style={styles.name}>{product_name}</Text>
        <Text style={styles.stock}>Stock: {stock}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      {/* <View>
        <Button onPress={() => navigation.navigate('Home')} title="Home" />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
  },
  container: {
    margin: 10,
  },
  price: {
    fontSize: 30,
  },
  name: {
    fontSize: 24,
  },
  desc: {
    fontSize: 20,
    marginTop: 15,
  },
});

export default Details;
