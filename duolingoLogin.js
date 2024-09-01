log(location.ref);
log(location.pathname);
if (location.search) {
    let qs = decodeURIcomponent(location.search.substring(1));
    let params = new Map();
    let parts = qs.split('&');
    log(parts);
    parts.forEach(parts => {
        let key = part.split('=')[0];
        let val = part.split('=')[1];
        params.set(key, val);
    })
}