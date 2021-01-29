export const generateTestImageUrl = (category: string) => {
  let imageUrl;

  // バックエンドがGCSに繋がっていないのでimageUrlはハードコーディング
  if (category === "book") {
    imageUrl = "/images/book_product2.png";
  } else if (category === "clothe") {
    imageUrl = "/images/clothe_product2.png";
  } else {
    imageUrl = "/images/food_product2.png";
  }

  return imageUrl;
};
