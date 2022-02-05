var hcsavn = JSON.parse($response.body);

hcsavn.FilmsProStatus = 1
hcsavn.AeroProStatus = 1

$done({body: JSON.stringify(hcsavn)});
