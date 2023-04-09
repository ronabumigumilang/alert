alert("Selamat datang")
let ulang = true;

while( ulang ) {
    let nama = prompt("Masukkan Nama : ")
    let umur = prompt("Masukkan Umur : ")

    alert(`Halo nama saya ${nama} dan umur saya ${umur}`)

    ulang = confirm("Lagi??")
}
alert("Terimakasih sudah bermain")