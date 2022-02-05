var hcsavn = JSON.parse($response.body);

hcsavn.status = "PREMIUM"
hcsavn.licenseKeyStatus = "VALID"
hcsavn.lifetime = true

$done({body: JSON.stringify(hcsavn)});
