const BASE_URL = "https://65181ce5582f58d62d35667a.mockapi.io/productPhone";
function getProductList(name) {
  return axios({
    url: BASE_URL,
    method: "GET",
    params: {
      namePhone: name || undefined,
    },
  });
}
function getProduct(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "GET",
  });
}
function addProduct(product) {
  return axios({
    url: BASE_URL,
    method: "POST",
    data: product,
  });
}
function updateProduct(id, product) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "PUT",
    data: product,
  });
}
function deleteProduct(id) {
  return axios({
    url: `${BASE_URL}/${id}`,
    method: "DELETE",
  });
}
