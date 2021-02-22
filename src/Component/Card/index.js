/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Button, Image, Pressable} from 'react-native';
import {Context} from '../../store';
import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  ADD_DETAILS,
} from '../../store/constants';
import {cartReducer} from '../../store/reducer';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Card({product, navigation}) {
  const {cart, dispatch, setDetail, detail} = React.useContext(Context);
  const [state, setState] = React.useState(0);

  const {
    id,
    product_name,
    product_price,
    stock,
    image,
    description,
    discount,
  } = product;

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
    if (state === 0) {
      dispatch({
        type: ADD_ITEM,
        payload: {
          id,
          product_name,
          product_price,
          image,
          stock,
          quantity: state + 1,
          total_price: product_price * (state + 1),
          description,
        },
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
          quantity: state + 1,
          total_price: product_price * (state + 1),
          description,
        },
      });
    }
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

  React.useEffect(() => {
    const item = cart.result.filter((x) => x.id === id);
    if (item.length) {
      setState(item[0].quantity);
    } else {
      setState(0);
    }
  }, [cart]);

  const discount_price = product_price - (product_price * discount) / 100;

  return (
    <View style={styles.container}>
      <Pressable onPress={goToDetails} style={styles.image}>
        <Image source={{uri: image}} style={styles.image} />
      </Pressable>
      <View style={styles.desc}>
        <Text style={styles.name}>{product_name}</Text>
        <Text style={styles.price}>Rp{addComma(product_price)}</Text>
        <Text style={styles.stock}>Stock: {stock}</Text>
      </View>
      <View style={styles.action}>
        <Pressable
          onPress={onPressMin}
          style={state === 0 ? styles.disabled : styles.button}
          disabled={state === 0}>
          <Icon name="remove" size={20} color="white" />
        </Pressable>
        <Text>{state}</Text>
        <Pressable
          onPress={onPressAdd}
          style={state === stock ? styles.disabled : styles.button}
          disabled={state === stock}>
          <Icon name="add" size={20} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
  },
  image: {
    width: 160,
    height: 160,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 5,
  },
  disabled: {
    backgroundColor: '#CCCCCC',
    padding: 5,
  },
  desc: {
    margin: 5,
  },
  stock: {
    fontSize: 12,
    color: '#888888',
  },
});

export default Card;
