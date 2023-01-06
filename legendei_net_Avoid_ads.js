// Copy the minified version below, add a new browser bookmark, write "javascript:" and past it. Go into the subtitle page and call this bookmark.
// Copie a versao minified do codigo abaixo, crie uma nova bookmark no seu browser, no endereco dessa bookmark escreva "javascript:" e cole a versao minified. Va para a pagina da legenda e chame essa bookmark.

// Minified version:
// async function FetchHtml(){return await (await fetch(document.URL)).text()}async function Do(){let t=await FetchHtml().then(t=>t),e=t.substr(t.indexOf('<a href="https://legendei.net/?dl_id=')+37,10).replace(/[^0-9]+/,"");window.location="https://legendei.net/?dl_id="+e}Do();


async function FetchHtml() {
    let response = await fetch(document.URL);
    return await response.text(); // Returns it as Promise
}

// Using the HTML
async function Do() {
    let html = await FetchHtml().then(text => { return text }); // Get html from the promise
    const subID = html.substr(html.indexOf('<a href="https://legendei.net/?dl_id=') + 37, 10).replace(/[^0-9]+/, '')
    window.location = "https://legendei.net/?dl_id=" + subID
}

// Exe
Do();

