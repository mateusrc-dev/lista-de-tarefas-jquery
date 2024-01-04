$(function () {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const nomeDaAtividade = $("#nova-atividade").val();
        const novaAtividade = $("<li style='display: none'></li>");
        $(`
            <p style='text-decoration: none'>${nomeDaAtividade}</p>
        `).appendTo(novaAtividade);
        $(novaAtividade).appendTo('ul');
        $(novaAtividade).fadeIn(1000);
        $('#nova-atividade').val("");
    });

    $('ul').on('click', 'p', function(e) {
        
        console.log("cheguei aqui ->", e)
        if ($(e.currentTarget).css("text-decoration").includes("none")) {       
            $(e.currentTarget).css("text-decoration", "line-through");
        } else {
            $(e.currentTarget).css("text-decoration", "none");
        }
    });
})
