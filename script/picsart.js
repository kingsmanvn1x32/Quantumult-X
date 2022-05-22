var fbiossdk = JSON.parse($response.body);

fbiossdk.subscription.granted = true

$done({body: JSON.stringify(fbiossdk)});
