var hcsavn = JSON.parse($response.body);

hcsavn.data.valid_time = 253394611200
hcsavn.data.is_expire = 0
hcsavn.data.old_vip_type = 2
hcsavn.data.expire_days = -99999999999
hcsavn.data.s = 1
hcsavn.data.activity_end_time = 4102415999
hcsavn.data.invalid_time = 253394611200

$done({body: JSON.stringify(hcsavn)});
