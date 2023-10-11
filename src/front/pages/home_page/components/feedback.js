class Feedback extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="feedback">
        <h1 class="gold-title text-center">Feedback dos nossos casais</h1>
        <div class="container">
            <div class="row">
                <current-feedback-item image="${"/src/front/assets/img/casal1.png"}" names="Luiza & Vanessa" message="${"Esse site fez nosso casamento decolar sem problemas! Organizamos nossa agenda, fizemos um cronograma perfeito e até lidamos com as complexidades das preferências alimentares dos convidados."}"></current-feedback-item>
                <current-feedback-item image="${"/src/front/assets/img/casal2.png"}" names="Ana & Patrício" message="${"Esse site fez nosso casamento decolar sem problemas! Organizamos nossa agenda, fizemos um cronograma perfeito e até lidamos com as complexidades das preferências alimentares dos convidados."}"></current-feedback-item>
                <current-feedback-item image="${"/src/front/assets/img/casal3.png"}" names="Daniel & Gustavo" message="${"Esse site fez nosso casamento decolar sem problemas! Organizamos nossa agenda, fizemos um cronograma perfeito e até lidamos com as complexidades das preferências alimentares dos convidados."}"></current-feedback-item>
                <current-feedback-item image="${"/src/front/assets/img/casal1.png"}" names="Luiza & Vanessa" message="${"Nossa jornada rumo ao altar foi incrivelmente mais suave graças a este site maravilhoso! Cada detalhe do nosso casamento teve um toque mágico de organização e facilidade. Recomendo a todos os casais apaixonados!"}"></current-feedback-item>
            </div>
        </div>
    </div>
        `;
    }
}

customElements.define('current-feedback', Feedback);