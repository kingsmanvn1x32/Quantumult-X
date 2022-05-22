var fbiossdk = JSON.parse($response.body);

fbiossdk.subscription.granted = true
fbiossdk.verified_type = "subscribed"

$done({body: JSON.stringify(fbiossdk)});
