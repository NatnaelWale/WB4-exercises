"use strict";

function parsePartCode(value) {
    let supplierCodeIndex = value.indexOf(":");
    let productNumberIndex = value.indexOf("-");

    let supplierCode = value.substring(0, supplierCodeIndex);
    let productNumber = value.substring(supplierCodeIndex + 1, productNumberIndex);
    let size = value.substring(productNumberIndex + 1);

   console.log("Supplier: " + supplierCode + '\n' + "Product Number: " + productNumber + '\n' + "Size: " + size);
}

parsePartCode("XYZ:1234-L");