function renderProductList(listProduct) {
    var resultString = "";
    for (let i = 0; i < listProduct.length; i++) {
      resultString += `<tr>
              <td>${listProduct[i].idPhone}</td>
              <td>${listProduct[i].namePhone}</td>
              <td>${listProduct[i].pricePhone}</td>
              <td>${listProduct[i].screenPhone}</td>
              <td>${listProduct[i].backCameraPhone}</td>
              <td>${listProduct[i].frontCameraPhone}</td>
              <td><img src="${listProduct[i].imgPhone}" width="300" height="150" /></td>
              <td>${listProduct[i].descPhone}</td>
              <td>${listProduct[i].typePhone}</td>
              <td><button class="btn btn-warning" onclick="productEdition(${listProduct[i].idPhone})">Sửa</button></td>
              <td><button class="btn btn-danger" onclick="productDeletion(${listProduct[i].idPhone})">Xóa</button></td>
          </tr>`;
    }
    document.querySelector("#tbodyPhone").innerHTML = resultString;
  }
  function getProductionInformation() {
    var idPhone = document.querySelector("#productID").value;
    var namePhone = document.querySelector("#productName").value;
    var pricePhone = document.querySelector("#productPrice").value;
    var screenPhone = document.querySelector("#productScreen").value;
    var backCameraPhone = document.querySelector("#productBCamera").value;
    var frontCameraPhone = document.querySelector("#productFCamera").value;
    var imgPhone = document.querySelector("#productImg").value;
    var descPhone = document.querySelector("#productDesc").value;
    var typePhone = document.querySelector("#productType").value;
    return new Product(
      idPhone,
      namePhone,
      pricePhone,
      screenPhone,
      backCameraPhone,
      frontCameraPhone,
      imgPhone,
      descPhone,
      typePhone
    );
  }
  