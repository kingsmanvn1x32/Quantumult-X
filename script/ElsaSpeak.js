var hcsavn = JSON.parse($response.body);

hcsavn.subscriptions = [
    {
      "expire_at": "253394611200",
      "subscription": "lifetime_membership",
      "days_to_end": 999999,
      "created_at": "20190529151809"
    }
  ]

$done({body: JSON.stringify(hcsavn)});