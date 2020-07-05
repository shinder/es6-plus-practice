import console from './fake-console';

const info = document.querySelector('#info');

const tplBall = o=>{
    return `<div style="border-radius: 50%; text-align: center; position: absolute;
        width: ${o.size || 60}px; height: ${o.size || 60}px;
        line-height: ${o.size || 60}px;
        left: ${o.left || 0}px; top: ${o.top || 0}px; background-color: ${o.bg};
        ">${o.n}</div>`;
}
const data = [
    {n:1, bg: 'red'},
    {n:2, bg: 'orange', left:60, top:60},
    {n:3, bg: 'yellow', left:100, top:100, size: 200},
    {n:4, bg: 'green', left:120, top:80, size: 80},
];
data.forEach(el => info.innerHTML += tplBall(el) );

