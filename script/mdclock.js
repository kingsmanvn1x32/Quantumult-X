var hcsavn = JSON.parse($response.body);

hcsavn = {
  "request_date_ms": 1644224446892,
  "request_date": "2022-02-07T09:00:46Z",
  "subscriber": {
    "non_subscriptions": {
      "tech.miidii.MDClock.pro.c": [
        {
          "id": "ff7e06dcfd",
          "is_sandbox": false,
          "purchase_date": "2021-12-01T23:57:07Z",
          "original_purchase_date": "2021-12-01T23:57:07Z",
          "store": "app_store"
        }
      ]
    },
    "first_seen": "2021-12-01T17:48:18Z",
    "original_application_version": "456",
    "other_purchases": {
      "tech.miidii.MDClock.pro.c": {
        "purchase_date": "2021-12-01T23:57:07Z"
      }
    },
    "management_url": null,
    "subscriptions": {
    },
    "entitlements": {
      "Entitlement.Pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2021-12-01T23:57:07Z",
        "product_identifier": "tech.miidii.MDClock.pro.c",
        "expires_date": null
      }
    },
    "original_purchase_date": "2021-12-01T17:47:56Z",
    "original_app_user_id": "$RCAnonymousID:4a6797838a7b49c7954ba518ab803bc2",
    "last_seen": "2022-02-06T15:48:11Z"
  }
}

$done({body: JSON.stringify(hcsavn)});
