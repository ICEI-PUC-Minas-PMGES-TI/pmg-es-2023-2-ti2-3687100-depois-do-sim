export class DDSFooter extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML =`
        <style>
        
        </style>


        <div class="container">
            <div class="row">
                <div class="lg-col-6 md-col-6 sm-col-12">
                    <h3>Vamos te ajudar!</h3>
                </div>
            </div>
        </div>
        `

    }

}