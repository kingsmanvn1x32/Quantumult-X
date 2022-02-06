var hcsavn = JSON.parse($response.body);

hcsavn = {
  "products": [
    {
      "premium_status": "ACTIVE",
      "product_id": "com.adguard.lifetimePurchase"
    }
  ]
}

$done({body: JSON.stringify(hcsavn)});
