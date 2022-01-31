var hcsavn = JSON.parse($response.body);

hcsavn = {
  "isLifetime": true,
  "isSubscriptionVerified": false,
  "hasBoughtPaidApp": true
}

$done({body: JSON.stringify(hcsavn)});
