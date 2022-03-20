var hcsavn = JSON.parse($response.body);

hcsavn = {
  "data": {
    "premiumAccess": true
  }
}

$done({body: JSON.stringify(hcsavn)});
