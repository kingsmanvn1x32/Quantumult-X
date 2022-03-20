let body = $response.body;

body = '{
  "data": {
    "premiumAccess": true
  }
}';


$done({body});
