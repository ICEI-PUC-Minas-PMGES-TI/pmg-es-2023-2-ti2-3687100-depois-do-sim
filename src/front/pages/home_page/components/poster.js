class Poster extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="anuncio">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <h1 class="gold-typography" style="width: 272px">Gerencie seu casamento em um só lugar!</h1>
                        <p class="subtitulo">Facilite a comunicação com fornecedores e convidados. Registre orçamentos,
                            torne suas decisões mais simples e assertivas. Guarde boas recordações.</p>
                        <p class="subtitulo2">Guarde boas recordações!</p>
                        <button class="btn btn-menu" type="submit">Cadastre-se</button>
                        <p class="subtitulo">ou</p>
                        <button class="btn btn-menu" type="submit">Entrar</button>
                        <p class="subtitulo3">E aproveite os nossos benefícios.</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <img src="/src/front/assets/img/anuncio.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('current-poster', Poster);