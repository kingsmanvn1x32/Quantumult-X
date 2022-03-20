let body = $response.body;
let status = $response.status;

status = 200;
body = '{
  "data": {
    "premiumAccess": true
  }
}';

$done({status, body});
