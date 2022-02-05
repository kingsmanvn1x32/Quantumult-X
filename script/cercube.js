var hcsavn = JSON.parse($request.body);

hcsavn.username = "hcsavn"
hcsavn.password = "aE0yLVZGci02YngtRnltLTFGUC1YS3otUXU="

$done({body: JSON.stringify(hcsavn)});
