import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Context} from '../../store';
import {ADD_DETAILS, DELETE_ITEM, UPDATE_ITEM} from '../../store/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CheckoutCard({item, navigation}) {
  const {dispatch, setDetail} = React.useContext(Context);
  const {
    id,
    product_name,
    product_price,
    stock,
    image,
    quantity,
    total_price,
    description,
    discount,
  } = item;
  const [state, setState] = React.useState(quantity);

  const addComma = (n) => {
    let regex = /(\d+)(\d{3})/;
    return String(n).replace(/^\d+/, function (x) {
      while (regex.test(x)) {
        x = x.replace(regex, '$1.$2');
      }
      return x;
    });
  };

  function onPressMin() {
    if (state === 1) {
      dispatch({
        type: DELETE_ITEM,
        payload: id,
      });
    } else {
      dispatch({
        type: UPDATE_ITEM,
        payload: {
          id,
          product_name,
          product_price,
          image,
          stock,
          quantity: state - 1,
          total_price: product_price * (state - 1),
          discount,
          description,
        },
      });
    }
    setState(state - 1);
  }

  function onPressAdd() {
    dispatch({
      type: UPDATE_ITEM,
      payload: {
        id,
        product_name,
        product_price,
        image,
        stock,
        quantity: state + 1,
        total_price: product_price * (state + 1),
        discount,
        description,
      },
    });
    setState(state + 1);
  }

  function goToDetails() {
    setDetail({
      type: ADD_DETAILS,
      payload: {
        id,
        product_name,
        product_price,
        image,
        stock,
        description,
      },
    });
    navigation.navigate('Product Detail');
  }

  const discount_price = product_price - (product_price * discount) / 100;

  React.useEffect(() => setState(item.quantity), [item]);

  return (
    <View style={styles.container}>
      <Pressable onPress={goToDetails} style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </Pressable>
      <View style={styles.item}>
        <View style={styles.desc}>
          <Text>{product_name}</Text>
          <Text style={styles.price}>Rp.{addComma(product_price)}</Text>
        </View>
        <Text style={styles.right}>Rp{addComma(total_price)}</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.space} />
          <View style={[styles.action, styles.right]}>
            <Pressable onPress={onPressMin} style={styles.button}>
              <Icon name="remove" size={30} color="#999" />
            </Pressable>
            <Text style={styles.quantity}>{state}</Text>
            <Pressable
              onPress={onPressAdd}
              style={state === stock ? styles.disabled : styles.button}
              disabled={state === stock}>
              <Icon name="add" size={30} color="#999" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
    margin: 5,
  },
  imageContainer: {
    backgroundColor: 'white',
  },
  item: {
    justifyContent: 'space-between',
    padding: 5,
    flex: 1,
    backgroundColor: 'white',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    flex: 2,
  },
  space: {
    flex: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DDDDDD',
  },
  disabled: {
    backgroundColor: '#CCCCCC',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#DDDDDD',
  },
  right: {
    textAlign: 'right',
  },
});

export default CheckoutCard;
