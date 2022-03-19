var hcsavn = JSON.parse($response.body);
let status = $response.status;

status = 200
hcsavn = {
  "data": {
    "premiumAccess": true
  }
}

$done({status, body: JSON.stringify(hcsavn)});
