var mobiles = {
  iphone: {
    iphone7: {
      RAM: "4 GB",
      ROM: "64 GB",
      Camera: "8 MP",
      LCD: "5.5 inch",
    },
    iphone8: {
        RAM: "6 GB",
      ROM: "64 GB",
      Camera: "8 MP",
      LCD: "5.5 inch",
    },
    iphone8plus: {
        RAM: "6 GB",
      ROM: "128 GB",
      Camera: "8 MP",
      LCD: "5.7 inch",
    },
    iphoneX: {
        RAM: "6 GB",
      ROM: "64 GB",
      Camera: "8 MP",
      LCD: "5.0 inch",
    },
    iphone11: {
        RAM: "6 GB",
      ROM: "128 GB",
      Camera: "12 MP",
      LCD: "10 inch",
    },
  },
  xiomi: {
    redmiA2: {
        RAM: "6 GB",
      ROM: "128 GB",
      Camera: "8 MP",
      LCD: "7 inch",
    },
    redmi10: {
        RAM: "8 GB",
      ROM: "128 GB",
      Camera: "10 MP",
      LCD: "8 inch",
    },
    redmi11: {
        RAM: "12 GB",
      ROM: "128 GB",
      Camera: "7.6 MP",
      LCD: "10 inch",
    },
    redmi12: {
        RAM: "4 GB",
      ROM: "64 GB",
      Camera: "8 MP",
      LCD: "5.5 inch",
    },
    redmi13: {
        RAM: "4 GB",
      ROM: "128 GB",
      Camera: "10 MP",
      LCD: "5.5 inch",
    },
    redmi13C: {
        RAM: "4 GB",
      ROM: "64 GB",
      Camera: "8 MP",
      LCD: "5.5 inch",
    },
  },
  realme: {
    realmiNote50: {
        RAM: "10 GB",
      ROM: "128 GB",
      Camera: "12 MP",
      LCD: "12 inch",
    },
    realmiC67: {
        RAM: "10 GB",
        ROM: "128 GB",
        Camera: "14 MP",
        LCD: "12 inch",
    },
    realmiC53: {
        RAM: "10 GB",
        ROM: "128 GB",
        Camera: "28 MP",
        LCD: "12 inch",
    },
    realmi9: {
        RAM: "12 GB",
        ROM: "128 GB",
        Camera: "30 MP",
        LCD: "12 inch",
    },
    realmi9i: {
        RAM: "12 GB",
        ROM: "128 GB",
        Camera: "32 MP",
        LCD: "14 inch",
    },
  },
  tecno: {
    spark20: {
        RAM: "10 GB",
        ROM: "128 GB",
        Camera: "12 MP",
        LCD: "12 inch",
    },
    spark20Pro: {
        RAM: "10 GB",
        ROM: "128 GB",
        Camera: "10 MP",
        LCD: "12 inch",
    },
    spark20C: {
        RAM: "12 GB",
        ROM: "128 GB",
        Camera: "24 MP",
        LCD: "14 inch",
    },
    POVA6: {
        RAM: "8 GB",
        ROM: "128 GB",
        Camera: "10 MP",
        LCD: "10 inch",
    },
    PhantomV: {
        RAM: "10 GB",
        ROM: "128 GB",
        Camera: "12 MP",
        LCD: "12 inch",
    },
  },
};

var brand = document.getElementById("brand");
var model = document.getElementById("model");
var result = document.getElementById("result")

// Saray brands all brands k variable mai agye
var allBrands = Object.keys(mobiles)

// for loop chlaya hai ta k saray brands select brand walay element m ajayein
for (var i = 0; i < allBrands.length; i++){
    brand.innerHTML += `<option>${allBrands[i]}`
}

function selectBrand(){
    var selectbrand = brand.value
    var allModels = Object.keys(mobiles[selectbrand])
    console.log(selectbrand);
    model.innerHTML = ""
    for (var i = 0; i<allModels.length; i++){
        model.innerHTML += `<option>${allModels[i]}`
    }
}


function selectModel(){
  
    result.innerHTML = JSON.stringify(mobiles[brand.value][model.value]);
    
    
}
