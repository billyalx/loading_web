onload = () => {
    // create variable
    let id = document.getElementById("app")
    let loading = document.createElement("div") // create new element in id app

    // fill the content
    loading.textContent = "Loading" // isi konten div loading
    loading.style.fontSize = "28px"
    id.appendChild(loading) // untuk memasukkan ke dalam html

    // dalam waktu berapa lama dilakukan perubahan DOM
    let loaded = setInterval(() => {
        loading.textContent = loading.textContent + "."
    }, 1000) // 1000ms = 1 detik

    // hentikan interval ketika
    setTimeout(() => {
        clearInterval(loaded)
        loading.textContent = "WELCOME TO OUR PAGE"
    }, 4000)    // 4000ms
}
