#Author: langkhach270389
#Source: chongluadao.vn

const url = "https://api.chongluadao.vn/v2/blacklist"
const arrwhite = ('sites.google.com|play.google.com|www.youtube.com|www.facebook.com|apps.apple.com|www.twitter.com|oa.zalo.me|zalo.me');
const pattern = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/;

$httpClient.get(url, (err,response,resp) => {
if(response.status == 200){
let body = JSON.parse(resp);
let arrdomain = body.map(x => x.url.match(pattern));
var  arrout= arrdomain.filter(x => !arrwhite.includes(x));
$persistentStore.write(arr2domainset(arrout), "#domainset-cld");
}
$done({
    response: {
      status: 200,
      headers: {
        "Content-Type": "text/plain;charset=UTF-8"
      },
      body: $persistentStore.read("#domainset-cld")
    }
  });
})

/*
 * Convert Array domain to rule
 */
function arr2domainset(arr)
{return arr.toString().replace(/,/g,"\n");}
