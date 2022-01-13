function submitForm(data) {
    var selecImg = ["alemanha.jpg", "austria.png", "belgica.jpg", "croacia.jpg", "dinamarca.png", "escocia.png", "eslovaquia.png", "espanha.jpg", "finlandia.png", "franca.jpg", "gales.png", "holanda.png", "hungria.png", "inglaterra.png", "italia.jpg", "macedonia.png", "polonia.jpg", "portugal.jpg", "russia.png", "suecia.png", "suica.png", "tcheca.jpg", "turquia.png", "ucrania.jpg"]
    var line = `<div class="comment">`
    line += `<h3 class="comment-text">${data.comment}</h3>`
    line += `<hr class="comment-line">`
    line += `<h4 class="comment-name">${data.name}<img class="comment-flag" src="../assets/images/flags/${selecImg[data.selecao]}" alt="Seleção"></h4>`
    for (i = 1; i <= 5; i++) {
        i <= data.rate ? line += `<img src="../assets/images/full_star.svg" alt="" class="rate star-${i}"></img>` : `<img src="../assets/images/empty_star.svg" alt="" class="rate star-${i}"></img>`
    }

    line += '</div>'

    cmt = window.document.querySelector(".comments").innerHTML
    cmt += line
    window.document.querySelector(".comments").innerHTML = cmt

    alert("Comentário enviado com sucesso!")
    clearField()

}

function formValid() {
    var regex_name = new RegExp('^[a-záàâãéèêíïóôõöúçñ ]+$', 'i');
    var name = window.document.querySelector(".input-name").value
    var valid_name = regex_name.test(name)
    var selecao = window.document.querySelector(".input-selecao").value
    var email = window.document.querySelector(".input-email").value
    var comment = window.document.querySelector(".input-comment").value

    var badwords = ["palavras"];
    for (var i = 0; i < badwords.length; i++) {
        var pat = badwords[i].slice(0, -1).replace(/([a-z])/g, "$1[^a-z]*") + badwords[i].slice(-1);
        var regex_comment = new RegExp(pat, "ig");
        comment_replaced = comment.replace(regex_comment, "");
    }

    var rate = window.document.querySelector(".input-star").value
    var msg = ""

    if (!name) msg += "Nome vazio!\n"
    if (!valid_name) msg += "Nome Inválido!\n"
    if (!selecao) msg += "Selecione uma seleção!\n"
    if (!email) msg += "Digite um e-mail válido!\n"
    if (!comment) msg += "Digite o seu comentário!\n"
    if (!rate) msg += "Deixe a sua nota para o evento!"
    if (comment !== comment_replaced) alert("Conteúdo inapropriado no comentário!")


    if (msg) {
        window.alert(msg)
        return false
    } else {
        var data = { name, selecao, email, comment, rate }
        submitForm(data)
    }

}

function changeStar(id) {
    for (i = 1; i <= 5; i++) {
        var star = window.document.querySelector("#star-" + i)
        i <= id ? star.setAttribute("src", "../assets/images/full_star.svg") : star.setAttribute("src", "../assets/images/empty_star.svg")
    }
    window.document.querySelector(".input-star").value = id
}

function clearField() {
    window.document.querySelector(".input-name").value = ''
    window.document.querySelector(".input-selecao").value = ''
    window.document.querySelector(".input-email").value = ''
    window.document.querySelector(".input-comment").value = ''
    window.document.querySelector(".input-star").value = ''

    for (i = 1; i <= 5; i++) {
        var star = window.document.querySelector("#star-" + i)
        star.setAttribute("src", "../assets/images/empty_star.svg")
    }

}