import "dotenv/config";

function getDiscountedPrice(price) {
  const discount = parseFloat(process.env.NEXT_PUBLIC_DISCOUNT);
  const discountedPrice = price - price * discount;
  const result = parseFloat(discountedPrice.toFixed(2));
  return result;
}

export default getDiscountedPrice;
