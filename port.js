let baca = false
const btn = document.getElementById('btn')
const text = document.getElementById('extra')
btn.addEventListener('click',()=>{ 
  text.classList.toggle('show')
  baca = !baca
  btn.textContent = baca ? 'Tampilkan sedikit' : 'Tampilkan lebih'
});

const links = 
document.querySelectorAll("nav a");

const loadingBar = 
document.querySelector(".loading-bar");

/* tombol pindah halaman saja */
const musikBtn = 
document.querySelector('nav a[href="musik.html"]');

const homePageBtn = 
document.querySelector('nav a[href="index.html"]');

function pageLoading(link){
    link.addEventListener("click", (e) => {

        e.preventDefault();
        loadingBar.style.width ="100%";

        let target = 
        link.getAttribute("href");

        setTimeout(() => {
            window.location.href = 
            target;
        }, 600);
    });
}
/* jalankan */
if(musikBtn){
    pageLoading(musikBtn);
}
if(homePageBtn){
    pageLoading(homePageBtn);
}