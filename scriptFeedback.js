let btn = document.querySelector(".feedbackenviado");

btn.addEventListener("click", function(event) {
    event.preventDefault(); 
    criarfeedback();
});

function criarfeedback() {
    let feedback = document.querySelector(".feedback");
    let nome = document.querySelector(".nome");

    let Sectioncomments = document.querySelector(".comments");

    // Criar seção de feedback
    let escopo = document.createElement("div");
    let texto = document.createElement("p");
    let titulo = document.createElement("h1");

    texto.innerText = feedback.value;
    titulo.innerText = nome.value;

    escopo.classList.add("mensagem");
    titulo.classList.add("titulo_mensagem");
    texto.classList.add("texto");

    escopo.append(titulo);
    escopo.append(texto);

    Sectioncomments.append(escopo);
}
