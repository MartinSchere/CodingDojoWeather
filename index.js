const API_KEY = "65cf18766bf746e38ca224944213006F";

// DOCS: https://www.weatherapi.com/docs/



$(document).ready(function(){

  $('#find').click(function(){
    console.log('click');

    $.ajax(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Santiago&aqi=no`).done((data) =>{

      console.log(data)
      let {cloud,feelslike_c,humidity,temp_c,last_updated,condition} = data.current

      let card = $('#cardContent').find('div');

      card.find('.card-title').text(`${temp_c} Grados`);
      card.find('.card-title').append(`<img src="${condition.icon}"/>`);
      card.find('.card-subtitle').text(`${humidity}% de Humedad`);
      card.find('.card-text').text(`Actualizado el ${last_updated}`);
      console.log(card);

      $('#cardContent').removeClass('d-none')

    }).fail(()=>{
      $('#error').append(`<div class="alert alert-danger" role="alert">
          Error!
       </div>`)
    });

  })

})