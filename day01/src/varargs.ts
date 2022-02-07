//rest operator in TS/JS
function browse(... sites: string[]) {
    console.log('Browsing', sites);
}

browse(...['FB', 'Insta', 'Twitter']); //spread operator; We'll talk about it tomorrow
browse('FB', 'Insta', 'Twitter');
browse('CNN', 'BBC');