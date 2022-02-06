var hcsavn = JSON.parse($response.body);

hcsavn = {
  "request_date_ms": 1644054059112,
  "request_date": "2022-02-05T09:40:59Z",
  "subscriber": {
    "non_subscriptions": {
    },
    "first_seen": "2022-02-05T09:38:03Z",
    "original_application_version": "10826",
    "other_purchases": {
    },
    "management_url": null,
    "subscriptions": {
      "VSCOANNUAL": {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type": "trial",
        "expires_date": "2099-01-05T02:18:18Z",
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": "2021-04-04T10:58:12Z",
        "original_purchase_date": "2020-12-29T02:18:19Z",
        "purchase_date": "2020-12-29T02:18:18Z",
        "store": "app_store"
      }
    },
    "entitlements": {
      "membership": {
        "grace_period_expires_date": null,
        "purchase_date": "2020-12-29T02:18:18Z",
        "product_identifier": "VSCOANNUAL",
        "expires_date": "2099-01-05T02:18:18Z"
      }
    },
    "original_purchase_date": "2019-04-21T15:04:53Z",
    "original_app_user_id": "$RCAnonymousID:388db1725b274ec2a379e083bb27b713",
    "last_seen": "2022-02-05T09:38:03Z"
  }
}

$done({body: JSON.stringify(hcsavn)});
