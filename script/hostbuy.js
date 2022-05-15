var hcsavn = JSON.parse($response.body);
var bundle_id = hcsavn.receipt["bundle_id"];


//--------------------Focos--------------------//
if(bundle_id == "com.focos")
{
hcsavn = {
  "receipt":{"receipt_type":"Production", "adam_id":0000000000, "app_item_id":0000000000, "bundle_id":"com.focos", "application_version":"6106", "download_id":00000000000000, "version_external_identifier":837212473, "receipt_creation_date":"2000-10-04 08:00:00 Etc/GMT", "receipt_creation_date_ms":"0000000000000", "receipt_creation_date_pst":"2020-08-10 04:58:33 America/Los_Angeles", "request_date":"2000-10-04 08:00:00 Etc/GMT", "request_date_ms":"0000000000000", "request_date_pst":"2020-08-10 04:59:21 America/Los_Angeles", "original_purchase_date":"2000-10-04 08:00:00 Etc/GMT", "original_purchase_date_ms":"000000000000000", "original_purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "original_application_version":"6025", 
  "in_app":[ 
  {"quantity":"1", "product_id":"com.focos.lifetime", "transaction_id":"000000000000000", "original_transaction_id":"000000000000000", "purchase_date":"2000-10-04 08:00:00 Etc/GMT", "purchase_date_ms":"000000000000000", "purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "original_purchase_date":"2000-10-04 08:00:00 Etc/GMT", "original_purchase_date_ms":"000000000000000", "original_purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "is_trial_period":"false"}]}, 
  "latest_receipt_info":[
  {"quantity":"1", "product_id":"com.focos.lifetime", "transaction_id":"000000000000000", "original_transaction_id":"000000000000000", "purchase_date":"2000-10-04 08:00:00 Etc/GMT", "purchase_date_ms":"000000000000000", "purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "original_purchase_date":"2000-10-04 08:00:00 Etc/GMT", "original_purchase_date_ms":"000000000000000", "original_purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "is_trial_period":"false"}], "status":0, "environment":"Production"}} 



//--------------------Focos Live--------------------//
if(bundle_id == "com.focoslive")
{
hcsavn = {
  "receipt":{"receipt_type":"Production", "adam_id":0000000000, "app_item_id":0000000000, "bundle_id":"com.focos", "application_version":"6106", "download_id":00000000000000, "version_external_identifier":837212473, "receipt_creation_date":"2000-10-04 08:00:00 Etc/GMT", "receipt_creation_date_ms":"0000000000000", "receipt_creation_date_pst":"2020-08-10 04:58:33 America/Los_Angeles", "request_date":"2000-10-04 08:00:00 Etc/GMT", "request_date_ms":"0000000000000", "request_date_pst":"2020-08-10 04:59:21 America/Los_Angeles", "original_purchase_date":"2000-10-04 08:00:00 Etc/GMT", "original_purchase_date_ms":"000000000000000", "original_purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "original_application_version":"6025", 
  "in_app":[ 
  {"quantity":"1", "product_id":"com.focoslive.lifetime", "transaction_id":"000000000000000", "original_transaction_id":"000000000000000", "purchase_date":"2000-10-04 08:00:00 Etc/GMT", "purchase_date_ms":"000000000000000", "purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "original_purchase_date":"2000-10-04 08:00:00 Etc/GMT", "original_purchase_date_ms":"000000000000000", "original_purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "is_trial_period":"false"}]}, 
  "latest_receipt_info":[
  {"quantity":"1", "product_id":"com.focoslive.lifetime", "transaction_id":"000000000000000", "original_transaction_id":"000000000000000", "purchase_date":"2000-10-04 08:00:00 Etc/GMT", "purchase_date_ms":"000000000000000", "purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "original_purchase_date":"2000-10-04 08:00:00 Etc/GMT", "original_purchase_date_ms":"000000000000000", "original_purchase_date_pst":"2000-10-03 18:00:00 America/Los_Angeles", "is_trial_period":"false"}], "status":0, "environment":"Production"}}



//--------------------InShot--------------------//
if(bundle_id == "com.camerasideas.InstaShot")
{
    hcsavn = {
  "status" : 0,
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 997362197,
    "receipt_creation_date" : "2020-09-11 10:53:49 Etc/GMT",
    "bundle_id" : "com.camerasideas.InstaShot",
    "original_purchase_date" : "2019-08-26 12:14:39 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1572480692000",
        "expires_date" : "2019-12-01 01:11:32 Etc/GMT",
        "expires_date_pst" : "2019-11-30 17:11:32 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "470000523756724",
        "is_trial_period" : "false",
        "original_transaction_id" : "470000523756724",
        "purchase_date" : "2019-10-31 00:11:32 Etc/GMT",
        "product_id" : "com.camerasideas.InstaShot.InShotPro_monthly",
        "original_purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
        "original_purchase_date_ms" : "1572480692000",
        "web_order_line_item_id" : "470000180894569",
        "expires_date_ms" : "253394614800000",
        "purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
        "original_purchase_date" : "2019-10-31 00:11:32 Etc/GMT"
      }
    ],
    "adam_id" : 997362197,
    "receipt_creation_date_pst" : "2020-09-11 03:53:49 America/Los_Angeles",
    "request_date" : "2020-09-11 11:21:15 Etc/GMT",
    "request_date_pst" : "2020-09-11 04:21:15 America/Los_Angeles",
    "version_external_identifier" : 836870811,
    "request_date_ms" : "1599823275917",
    "original_purchase_date_pst" : "2019-08-26 05:14:39 America/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1566821679000",
    "receipt_creation_date_ms" : "1599821629000",
    "original_application_version" : "1",
    "download_id" : 87074593998754
  },
  "pending_renewal_info" : [
    {
      "expiration_intent" : "1",
      "original_transaction_id" : "470000523756724",
      "is_in_billing_retry_period" : "0",
      "auto_renew_product_id" : "com.camerasideas.InstaShot.InShotPro_monthly",
      "product_id" : "com.camerasideas.InstaShot.InShotPro_monthly",
      "auto_renew_status" : "0"
    }
  ],
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1572480692000",
      "expires_date" : "2019-12-01 01:11:32 Etc/GMT",
      "expires_date_pst" : "2019-11-30 17:11:32 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "470000523756724",
      "is_trial_period" : "false",
      "original_transaction_id" : "470000523756724",
      "purchase_date" : "2019-10-31 00:11:32 Etc/GMT",
      "product_id" : "com.camerasideas.InstaShot.InShotPro_monthly",
      "original_purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
      "subscription_group_identifier" : "20418247",
      "original_purchase_date_ms" : "1572480692000",
      "web_order_line_item_id" : "470000180894569",
      "expires_date_ms" : "253394614800000",
      "purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
      "original_purchase_date" : "2019-10-31 00:11:32 Etc/GMT"
    }
  ],
}
}

//--------------------KUNI CAM--------------------//
if(bundle_id == "com.ginnypix.kuni")
{
    hcsavn = {
  "status" : 0,
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 997362197,
    "receipt_creation_date" : "2020-09-11 10:53:49 Etc/GMT",
    "bundle_id" : "com.ginnypix.kuni",
    "original_purchase_date" : "2019-08-26 12:14:39 Etc/GMT",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1572480692000",
        "expires_date" : "2019-12-01 01:11:32 Etc/GMT",
        "expires_date_pst" : "2019-11-30 17:11:32 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "470000523756724",
        "is_trial_period" : "false",
        "original_transaction_id" : "470000523756724",
        "purchase_date" : "2019-10-31 00:11:32 Etc/GMT",
        "product_id" : "com.ginnypix.kuni.yearly",
        "original_purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
        "original_purchase_date_ms" : "1572480692000",
        "web_order_line_item_id" : "470000180894569",
        "expires_date_ms" : "253394614800000",
        "purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
        "original_purchase_date" : "2019-10-31 00:11:32 Etc/GMT"
      }
    ],
    "adam_id" : 997362197,
    "receipt_creation_date_pst" : "2020-09-11 03:53:49 America/Los_Angeles",
    "request_date" : "2020-09-11 11:21:15 Etc/GMT",
    "request_date_pst" : "2020-09-11 04:21:15 America/Los_Angeles",
    "version_external_identifier" : 836870811,
    "request_date_ms" : "1599823275917",
    "original_purchase_date_pst" : "2019-08-26 05:14:39 America/Los_Angeles",
    "application_version" : "1",
    "original_purchase_date_ms" : "1566821679000",
    "receipt_creation_date_ms" : "1599821629000",
    "original_application_version" : "1",
    "download_id" : 87074593998754
  },
  "pending_renewal_info" : [
    {
      "expiration_intent" : "1",
      "original_transaction_id" : "470000523756724",
      "is_in_billing_retry_period" : "0",
      "auto_renew_product_id" : "com.ginnypix.kuni.yearly",
      "product_id" : "com.ginnypix.kuni.yearly",
      "auto_renew_status" : "0"
    }
  ],
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1572480692000",
      "expires_date" : "2019-12-01 01:11:32 Etc/GMT",
      "expires_date_pst" : "2019-11-30 17:11:32 America/Los_Angeles",
      "is_in_intro_offer_period" : "false",
      "transaction_id" : "470000523756724",
      "is_trial_period" : "false",
      "original_transaction_id" : "470000523756724",
      "purchase_date" : "2019-10-31 00:11:32 Etc/GMT",
      "product_id" : "com.ginnypix.kuni.yearly",
      "original_purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
      "subscription_group_identifier" : "20418247",
      "original_purchase_date_ms" : "1572480692000",
      "web_order_line_item_id" : "470000180894569",
      "expires_date_ms" : "253394614800000",
      "purchase_date_pst" : "2019-10-30 17:11:32 America/Los_Angeles",
      "original_purchase_date" : "2019-10-31 00:11:32 Etc/GMT"
    }
  ],
}
}
$done({body: JSON.stringify(hcsavn)});
