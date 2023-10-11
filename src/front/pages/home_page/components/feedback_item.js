class FeedbackItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="col-lg-3 col-md-6 col-sm-12 text-center">
            <div>
                <div class="card-body feedback-casal">
                    <img src="${this.getAttribute('image')}" alt="">
                    <h5 class="h-color">${this.getAttribute('names')}</h5>
                    <p class="p-color">”${this.getAttribute('message')}”</p>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('current-feedback-item', FeedbackItem);