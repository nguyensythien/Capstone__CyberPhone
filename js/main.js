function resetForm(){
    document.querySelector("#productID").value = "";
    document.querySelector("#productID").disabled = false;
    document.querySelector("#productName").value = "";
    document.querySelector("#productPrice").value = "";
    document.querySelector("#productScreen").value = "";
    document.querySelector("#productBCamera").value = "";
    document.querySelector("#productFCamera").value = "";
    document.querySelector("#productImg").value = "";
    document.querySelector("#productType").value = "";
    document.querySelector("#productDesc").value = "";
  }
  function fetchProductList() {
    getProductList().then((response) => {
      renderProductList(response.data);
    });
  }
  fetchProductList();
  function productAddition() {
    var product = getProductionInformation();
    var check = true;
    check &=
      characterCheck(product.namePhone) &&
      digitCheck(
        product.pricePhone,
        product.screenPhone,
        product.backCameraPhone,
        product.frontCameraPhone
      );
    if (check) {
      addProduct(product).then(() => {
        fetchProductList();
        resetForm();
      });
    }
  }
  function productDeletion(id) {
    deleteProduct(id).then(() => {
      fetchProductList();
    });
  }
  function productEdition(id) {
    getProduct(id).then((response) => {
      document.querySelector("#productID").value = response.data.idPhone;
      document.querySelector("#productID").disabled = true;
      document.querySelector("#productName").value = response.data.namePhone;
      document.querySelector("#productPrice").value = response.data.pricePhone;
      document.querySelector("#productScreen").value = response.data.screenPhone;
      document.querySelector("#productBCamera").value =
        response.data.backCameraPhone;
      document.querySelector("#productFCamera").value =
        response.data.frontCameraPhone;
      document.querySelector("#productImg").value = response.data.imgPhone;
      document.querySelector("#productType").value = response.data.typePhone;
      document.querySelector("#productDesc").value = response.data.descPhone;
      openProductForm();
    });
  }
  function productUpdate() {
    var product = getProductionInformation();
    var check = true;
    check &=
      characterCheck(product.namePhone) &&
      digitCheck(
        product.pricePhone,
        product.screenPhone,
        product.backCameraPhone,
        product.frontCameraPhone
      );
    if (check) {
      updateProduct(
        getProductionInformation().id,
        getProductionInformation()
      ).then(() => {
        fetchProductList();
        closeProductForm();
      });
    }
    resetForm();
  }
  function productSearching() {
    var name = document.querySelector("#productSearch").trim().toLowerCase();
    getProductList(name).then((response) => {
      var result = response.data.filter((product) =>
        product.namePhone.toLowercase().includes(name)
      );
      renderProductList(result);
    });
  }
  function productSorting() {
    getProductList().then((response) => {
      response.data.sort(
        (productA, productB) => +productA.pricePhone - +productB.pricePhone
      );
      fetchProductList();
    });
  }
  
  // ----------OPEN PRODUCT FORM---------------
  
  window.openProductForm = () => {
    document.getElementById("exampleModal").style.display = "block";
    document.getElementById("exampleModal").classList = "show";
  };
  // ----------CLOSE PRODUCT FORM---------------
  
  window.closeProductForm = () => {
    document.getElementById("exampleModal").style.display = "none";
    document.getElementById("exampleModal").classList = "";
    resetForm();
  };
  
  function onForm() {
    let addClass = document.querySelector("#exampleModal");
    addClass.classList.add("show");
  }
  function offForm() {
    let removeClass = document.querySelector("#exampleModal");
    removeClass.classList.remove("show");
  }
  