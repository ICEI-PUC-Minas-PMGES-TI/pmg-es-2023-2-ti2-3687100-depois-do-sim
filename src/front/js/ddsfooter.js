export class DDSFooter extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML =`
        <style>
        
        </style>


        `

    }

}