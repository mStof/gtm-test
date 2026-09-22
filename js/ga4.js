window.dataLayer = window.dataLayer || []

const eventAddToCart = (cart) => {
  const TValue = cart.reduce((total, { price }) => total + price, 0);
  const itemsFormatted = cart.map((e, index) => {
    return {
      item_id: e.id,
      item_name: e.name,
      index: index,
      item_category: e.category,
      price: e.price,
      quantity: 1,
    };
  })

  const eCommerce = {
    currency: "BRL",
    value: TValue,
    items: itemsFormatted,
  };

  dataLayer.push({
    event: "add_to_cart",
    ecommercer: eCommerce
  })
  console.log("dataLayer:")
  console.log(dataLayer)
};

const eventViewItemList = (prodList) => {
const itemsFormatted = prodList.map((e, index) => {
    return {
    item_id: e.id,
    item_name: e.name,
    index: index,
    item_category: e.category,
    price: e.price,
    quantity: 1,
    };
})

const eCommerce = {
    currency: "BRL",
    item_list_id: "F01",
    item_list_name: "Página_de_produtos",
    items: itemsFormatted,
} 
console.log(eCommerce);

};