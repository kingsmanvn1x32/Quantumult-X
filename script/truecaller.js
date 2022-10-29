var fbiossdk = JSON.parse($response.body);

fbiossdk = {
    "expire": "9999-04-10T00:00:00Z",
    "start": "1970-01-01T00:00:00Z",
    "isExpired": false,
    "isGracePeriodExpired": false,
    "inAppPurchaseAllowed": false,
    "tier": {
        "id": "gold",
        "feature": [{
                "id": "spam_blocking",
                "rank": -2147483648,
                "status": "Included"
            },
            {
                "id": "caller_id",
                "rank": -2147483648,
                "status": "Included"
            },
            {
                "id": "no_ads",
                "rank": 1,
                "status": "Included"
            },
            {
                "id": "extended_spam_blocking",
                "rank": 3,
                "status": "Included"
            },
            {
                "id": "who_viewed_my_profile",
                "rank": 4,
                "status": "Included"
            },
            {
                "id": "incognito_mode",
                "rank": 6,
                "status": "Included"
            },
            {
                "id": "premium_badge",
                "rank": 10,
                "status": "Included"
            },
            {
                "id": "premium_support",
                "rank": 11,
                "status": "Included"
            },
            {
                "id": "gold_caller_id",
                "rank": 13,
                "status": "Included"
            }
        ]
    }
};

$done({body: JSON.stringify(fbiossdk)});
