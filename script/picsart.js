var hcsavn = JSON.parse($response.body);

hcsavn = {
  "status": "success",
  "response": [
    {
      "is_eligible_for_grant": true,
      "limitation": {
        "max_count": 10000000000000000000000000000,
        "limits_exceeded": false
      },
      "expire_date": 253394614800000,
      "order_id": "000000000000001",
      "purchase_date": 1652461282000,
      "original_order_id": "000000000000001",
      "reason": "ok",
      "is_eligible_for_introductory": false,
      "subscription_id": "com.picsart.studio.subscription_plus_yearly",
      "is_trial": true,
      "status": "SUBSCRIPTION_PURCHASED",
      "plan_meta": {
        "product_id": "subscription_plus_yearly",
        "id": "com.picsart.studio.subscription_plus_yearly",
        "description": "plus",
        "frequency": "yearly",
        "type": "renewable",
        "scope_id": "full"
      }
    }
  ]
}
$done({body: JSON.stringify(hcsavn)});
