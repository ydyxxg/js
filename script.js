let title = document.createElement('title');
title.innerText = 'New HTML Document';

let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'Utf-8');

document.head.appendChild(title);
document.head.appendChild(metaUtf8);