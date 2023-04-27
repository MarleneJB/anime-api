var url="http://localhost:3500/api/animes";

function postAnime(){
    console.log(url);

    var myName = $('#name').val();
    var mySinopsis = $('#sinopsis').val();
    var myEpisodios = $('#episodios').val();
    var myTemporadas = $('#temporadas').val();
    var myEstado = $('#estado').val();
    var myGeneros = $('#generos').val();
    var myEstudio = $('#estudio').val();
    var myImage= $('#image').val();
        var mygato ={
            name : myName,
            attack : mySinopsis,
            episodios : myEpisodios,
            temporadas : myTemporadas,
            estado : myEstado,
            generos : myGeneros,
            estudio : myEstudio,
            image : myImage 
        };
        console.log(mygato);

        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function(data){
                console.log(data);
                $('#resultado').html(JSON.stringify(data.anime));

            },
            data: JSON.stringify(myanime)
        });


    };


reader

function getAnimes(){

    console.log(url);

    $.getJSON(url,
        function(json){
            console.log(json);

            var arrAnimes = json.animes;

            var htmlTableAnimes = '<table border=1">';

            arrAnimes.forEach(function(item){
                console.log(item);
                htmlTableAnimes += '<tr>' +
                '<td>' + item.id + '<td>'+
                '<td>' + item.name + '<td>'+
                '<td>' + item.sinopsis + '<td>'+
                '<td>' + item.episodios+ '<td>'+
                '<td>' + item.temporadas+ '<td>'+
                '<td>' + item.estado + '<td>'+
                '<td>' + item.generos + '<td>'+
                '<td>' + item.estudio + '<td>'+
               
            '</table>' +
        '</div>' +
    '</div>';                   
});
    htmlTableAnimes += '</table>';

    $('#resultado').html(htmlTableAnimes);
}
);
}

