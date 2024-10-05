async function getData(){
    const result = await fetch('https://randomuser.me/api?results=4');
    const character = await result.json();
    console.log(character)
    character.results.forEach(element => {
        const card = document.createRange().createContextualFragment(`
            
               <div class="box box-1">
                    <img src="${element.picture.large}" alt="">
                    <h3>${element.name.first} ${element.name.last}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel</p>
                </div>
            
            
            `)
            const services_row = document.querySelector('.services-row');
            services_row.append(card)
    });
}
getData()