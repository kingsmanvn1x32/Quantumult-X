var hcsavn = JSON.parse($response.body);

hcsavn = {
    "products": [{
        "product_id": "com.adguard.lifetimePurchase",
        "premium_status": "ACTIVE"
    }]
}

$done({body: JSON.stringify(hcsavn)});
