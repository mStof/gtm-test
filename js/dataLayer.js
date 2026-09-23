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
    ecommerce: eCommerce
  })
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
  const eCommerce = {
    currency: "BRL",
    item_list_id: "F01",
    item_list_name: "Página_de_produtos",
    items: itemsFormatted,
  } 

  dataLayer.push({
    event: "view_item_list",
    ecommerce: eCommerce
  });

  console.log("->");
  console.log(dataLayer);
})
};

const logo = document.querySelector(".logo");
const eventClickLogo = (e) => {
  const flow = {
    page_location: window.location.href,
    dispositivo: navigator.userAgentData.platform ?? "none",
    browser: navigator.userAgentData.brands[0].brand ?? navigator.appCodeName,
    disp_language: navigator.language,
  };

  e.preventDefault();
  dataLayer.push({
    event:"click_logo",
    flow: flow
  });

  location.href = logo.href;
}
logo.addEventListener("click", eventClickLogo);