var body = document.body;
console.log(body);

var main = document.createElement('main'),
    header = document.createElement('header'),
    article = document.createElement('article'),
    aside = document.createElement('aside'),
    footer = document.createElement('footer');

main.append({header, article, aside, footer});
body.append(main);

main.className = 'container';
