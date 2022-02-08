async function getDataDaerah(){
    const url = 'https://6201e508b8735d00174cb61f.mockapi.io/provinsi/daerah'


try{
    const response=await fetch(url);

    const result = await response.json();

    const namaDaerah = document.querySelector(".nama-daerah");

    for (let i = 0; i < 6; i++) {
        namaDaerah.innerHTML += `
            <div class="card m-3" style="width: 25rem;">
                <img src=${(result[i].img)} width="350px" height="250px" class="card-img-top" alt="foto yogyakarta">
                <div class="card-body d-grid">
                    <a href="https://www.google.com" class="btn btn-secondary stretched-link">${result[i].name}</a>
                </div>
            </div>
        `;
} 
} catch (err) {
    console.log(err);
}
}
getDataDaerah();




        //     <div class="container">
        // <div class="row"> 
        //   <image src=${(result[i].img)} width=450 />
        //   <h3>${result[i].name}</h3>
        //   </div>
        // </div>