var hcsavn = JSON.parse($response.body);

hcsavn.status = "success"
hcsavn.response.original_order_id = "000000000000001"
hcsavn.response.order_id = "000000000000001"
hcsavn.response.status = "SUBSCRIPTION_PURCHASED"
hcsavn.response.app = "com.picsart.studio"
hcsavn.response.is_trial = false
hcsavn.response.subscription_id = "com.picsart.studio.subscription_plus_yearly"
hcsavn.response.purchase_date = 970621200000
hcsavn.response.expire_date = 253394614800000
hcsavn.reason = "ok"

$done({body: JSON.stringify(hcsavn)});
