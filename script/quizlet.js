let body= $response.body;
var hcsavn = JSON.parse(body);

hcsavn["responses"][0]["models"]["user"][0]["type"] = 1

$done({body: JSON.stringify(hcsavn)});
