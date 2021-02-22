import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CHECKOUT, HOME, PRODUCT_DETAIL} from './constants';
import {HomeScreen, CheckoutScreen, Details} from './src/Screen/';
import {productReducer, cartReducer, detailReducer} from './src/store/reducer';
import {Context} from './src/store';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [product, setProduct] = React.useReducer(productReducer, products);
  const [cart, dispatch] = React.useReducer(cartReducer, {
    checkout: false,
    result: [],
  });
  const [detail, setDetail] = React.useReducer(detailReducer);

  const cartCount = cart.result.length;

  return (
    <Context.Provider
      value={{product, cart, dispatch, detail, setDetail, cartCount}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Online Shop" component={Main} />
          <Stack.Screen name={PRODUCT_DETAIL} component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
}

function Main() {
  const {cartCount} = React.useContext(Context);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: HOME,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={CHECKOUT}
        component={CheckoutScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
          tabBarBadge: cartCount === 0 ? null : cartCount,
        }}
      />
    </Tab.Navigator>
  );
}

export default App;

const styles = {
  image: {
    width: 200,
    height: 200,
  },
};

const products = [
  {
    id: 0,
    product_name: 'Samsung Galaxy S21 5G',
    product_price: 15999000,
    image:
      'https://images.samsung.com/id/smartphones/galaxy-s21-5g/images/galaxy-s21-5g_highlights_kv.jpg',
    discount: 10,
    stock: 5,
    description: `1. Measured diagonally, Galaxy S21 5G’s screen size is 6.2" in the full rectangle and 6.1" with accounting for the rounded corners; Galaxy S21+ 5G's screen size is 6.7" in the full rectangle and 6.5" with accounting for the rounded corners; Galaxy S21 Ultra 5G’s screen size is 6.8" in the full rectangle and 6.6" with accounting for the rounded corners; actual viewable area is less due to the rounded corners and camera hole.

      2. The ratio in the parenthesis indicates the ratio of focal length of the applicable lens to that of the Wide lens.

      3. 100X Space Zoom includes 10x Optic Zoom and goes up to 100x Super Resolution Zoom. Super Resolution Zoom includes digital zoom, which may cause some image deterioration. Hybrid Optic Zoom combines high-resolution image sensor and lens.
      
      4. Typical value tested under third-party laboratory condition. Rated (minimum) capacity is 3880mAh for Galaxy S21 5G, 4660mAh for Galaxy S21+ 5G and 4855mAh for Galaxy S21 Ultra 5G.`,
  },
  {
    id: 1,
    product_name: 'Iphone 12 128Gb',
    product_price: 16499000,
    image:
      'https://www.apple.com/v/iphone-12-pro/e/images/overview/design/design_water_resistance__bx3cq2uzbzw2_medium.jpg',
    discount: 2,
    stock: 4,
    description:
      'A14 Bionic jauh lebih cepat dibanding chip ponsel pintar lainnya. Sistem kamera Pro yang menghadirkan fotografi pencahayaan rendah ke tingkat lebih tinggi — bahkan dengan peningkatan yang signifikan di iPhone 12 Pro Max. Dan dengan Ceramic Shield yang memiliki ketahanan jatuh empat kali lebih baik. Lihat apa yang bisa dilakukan iPhone baru ini.',
  },
  {
    id: 2,
    product_name: 'Headphone ',
    product_price: 1999000,
    image:
      'https://www.sony.co.id/image/3d54346a77face83dda2d361d34c5c5f?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
    discount: 10,
    stock: 7,
    description: 'Barang selalu ready silahkan langsung diorder',
  },
  {
    id: 3,
    product_name: 'Macbook Pro 16"',
    product_price: 35000000,
    image:
      'https://www.apple.com/v/macbook-pro-16/c/images/overview/keyboard_hero_fallback__fsmo5tlu3vqm_medium.jpg',
    discount: 3,
    stock: 3,
    description: `Macbook Pro 2019
16-inch / 8-Core i9 2.3GHz / 16GB RAM / 1TB SSD

Color:
MVVK2 (Space Grey)
MVVM2 (Silver)

Toko baru namun 5 hal yang perlu di perhatikan:
1. TERMURAH
2. GARANSI RESMI APPLE
3. ORIGINAL
4. SUPPLIER TANGGUNG JAWAB CLAIM APPLE
5. GARANSI TUKAR UNIT 5 HARI APABILA DEFECT



Walau kami masih baru, di dunia online, kami sudah dari 2008 berjualan offline.

JAMINAN BELANJA DI TECH STUDIO:
- GARANSI APPLE RESMI INTERNATIONAL 1 TAHUN
- BISA CLAIM DI INDONESIA, BISA CLAIM KE KAMI
- GARANSI DARI KAMI 5 HARI APABILA DEFECT, KAMI TUKAR DENGAN UNIT BARU
- UNIT SEGEL 1000%
- Accessories (Charger Dll) TIDAK DITUKAR SEPERTI SELLER NAKAL
- TIDAK MENJUAL REFURBISHED
- TIDAK MENJUAL REKONDISI
- TIDAK MENJUAL BARANG DISTRIBUTOR (HANYA RESMI)

PENGIRIMAN:
Jakarta dan sekitarnya:
Gojek dan JNE: ikut sistem Tokopedia

Luar kota: JNE (Dengan Asuransi)`,
  },
];
