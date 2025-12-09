document.addEventListener("DOMContentLoaded", function () {
    // Pega o dia atual do mês (1 a 31)
    const hoje = new Date();
    let dia = hoje.getDate(); // 1, 2, 3 ... 31

    // Segurança: se por algum motivo o dia estiver fora do intervalo, volta para 1
    if (dia < 1 || dia > 31) {
        dia = 1;
    }

    // Agora usando "dia" minúsculo nos caminhos
    const caminhoVideo = `videos/dia${dia}.mp4`;
    const caminhoImagem = `imagens/dia${dia}.jpeg`;

    // Seleciona os elementos no HTML
    const videoElemento = document.getElementById("video-dia");
    const sourceElemento = videoElemento ? videoElemento.querySelector("source") : null;
    const imagemElemento = document.getElementById("imagem-dia");

    // Atualiza o vídeo do dia
    if (videoElemento && sourceElemento) {
        sourceElemento.src = caminhoVideo;
        videoElemento.load(); // recarrega o vídeo com a nova fonte
    }

    // Atualiza a imagem do dia
    if (imagemElemento) {
        imagemElemento.src = caminhoImagem;
        imagemElemento.alt = `Imagem do dia ${dia}`;
    }
});

