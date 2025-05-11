document.addEventListener('DOMContentLoaded', function() {
var b = document.getElementById("blog");
var a = document.getElementById("about");
var c=document.getElementById("intro");
var d=document.getElementById("portofolio");
var e = document.getElementById("projects");
    document.getElementById("blogbtn").addEventListener('click', blog);
    document.getElementById("aboutbtn").addEventListener('click', about);
    document.getElementById("aboutsbtn").addEventListener('click', about);
    document.getElementById("homebtn").addEventListener('click', intro);
    document.getElementById("portbtn").addEventListener('click', portofolio);
    document.getElementById("projectbtn").addEventListener('click', project)
    document.getElementById("projectsbtn").addEventListener('click', project)
     function project() {
        e.style.display = 'flex';
        b.style.display = 'none';
        a.style.display = 'none';
        c.style.display = 'none'; 
        d.style.display = 'none'; 
    }
function blog() {
    a.style.display = 'none';
    e.style.display = 'none';
    c.style.display = 'none';
    b.style.display = 'block'; 
    d.style.display = 'none';
}
function about() {
    e.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
    a.style.display = 'block'; 
    d.style.display = 'none';
}
function intro() {
    e.style.display = 'none';
    b.style.display = 'none';
    a.style.display = 'none';
    d.style.display = 'none';
    c.style.display = 'block'; 
}
function portofolio() {
    b.style.display = 'none';
    a.style.display = 'none';
    c.style.display = 'none'; 
    e.style.display = 'none';
    d.style.display = 'block'; }
});