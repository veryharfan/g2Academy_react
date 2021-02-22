import React from 'react';
import {
  FlatList,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {CheckoutCard, Separator} from '../../Component';
import {Context} from '../../store';
import {CHECKOUT} from '../../store/constants';

function CheckoutScreen({navigation}) {
  const {cart, dispatch, cartCount} = React.useContext(Context);

  function onPressCheckout() {
    dispatch({
      type: CHECKOUT,
      payload: null,
    });
  }
  let totalPrice = 0;
  cart.result.forEach((x) => {
    totalPrice += x.total_price;
  });

  const addComma = (n) => {
    let regex = /(\d+)(\d{3})/;
    return String(n).replace(/^\d+/, function (x) {
      while (regex.test(x)) {
        x = x.replace(regex, '$1.$2');
      }
      return x;
    });
  };

  function checkoutButton() {
    if (cartCount) {
      return (
        <View style={styles.checkoutButton}>
          <Text style={styles.totalPrice}>Rp{addComma(totalPrice)}</Text>
          <Button onPress={onPressCheckout} title="Checkout" />
        </View>
      );
    }
  }

  function checkoutSuccess() {
    if (cart.checkout) {
      return <Text style={styles.checkoutSuccess}>Checkout Success</Text>;
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={cart.result}
          renderItem={({item}) => (
            <CheckoutCard item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.product_name + item.id}
          ItemSeparatorComponent={({}) => <View style={styles.separator} />}
          extraData={cart}
        />
      </ScrollView>
      {checkoutSuccess()}
      {checkoutButton()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
    borderColor: '#DDDDDD',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  checkoutSuccess: {
    textAlign: 'center',
  },
  totalPrice: {
    textAlign: 'right',
    fontSize: 24,
  },
  checkoutButton: {
    margin: 10,
  },
});

export default CheckoutScreen;
