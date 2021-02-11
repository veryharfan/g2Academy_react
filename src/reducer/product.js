const initialState = {
  fetched_product: '',
  result: [
    {
      id: 0,
      product_name: 'Samsung Galaxy S21 5G',
      product_price: 15999000,
      image:
        'https://images.samsung.com/id/smartphones/galaxy-s21-5g/images/galaxy-s21-5g_highlights_kv.jpg',
      discount: 5
    },
    {
      id: 1,
      product_name: 'Iphone 12 128Gb',
      product_price: 16499000,
      image:
        'https://www.apple.com/v/iphone-12-pro/e/images/overview/design/design_water_resistance__bx3cq2uzbzw2_medium.jpg',
      discount: 7
    },
    {
      id: 2,
      product_name: 'Headphone Sony',
      product_price: 1999000,
      image:
        'https://www.sony.co.id/image/3d54346a77face83dda2d361d34c5c5f?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9',
      discount: 10
    },
    {
      id: 3,
      product_name: 'Macbook Pro 16"',
      product_price: 37399000,
      image:
        'https://www.apple.com/v/macbook-pro-16/c/images/overview/keyboard_hero_fallback__fsmo5tlu3vqm_medium.jpg',
      discount: 3
    }
  ]
}

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default product
