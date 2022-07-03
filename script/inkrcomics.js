var hcsavn = JSON.parse($response.body);

hcsavn = {
  "data": {
    "subscriptionState": "Active",
    "bonusCoin": 5000,
    "expiredAt": "2029-07-10T04:14:25.000Z",
    "inkrPassExpiredAt": "2022-07-03T04:14:30.157Z",
    "subscriptionPaymentMethod": "appstore",
    "isSubscriber": true,
    "coin": 999999,
    "inkrPassState": "expired",
    "subscriptionStartedAt": "2022-07-03T04:14:30.149Z",
    "inkrPassStartedAt": "2022-07-03T04:03:33.354Z"
  },
  "code": 0
}

$done({body: JSON.stringify(hcsavn)});
