export class DDSHeader extends HTMLElement {
    constructor() {
        super();

        // Crie o Shadow DOM e anexe-o ao elemento personalizado.
        this.attachShadow({ mode: 'open' });

        // Use um template para definir a estrutura do componente.
        const template = document.createElement('template');
        template.innerHTML = `
        <style>
          @font-face {
            font-family: Inria-Serif;
            src: url('/src/front/assets/Inria_Serif/'); /* Verifique o caminho da fonte */
          }
  
          .grey-typography {
            font-family: Inria-Serif;
            color: #494949;
            text-decoration: none;
          }
  
          .font {
            font-family: Inria-Serif;
          }
  
          .btn-style {
            background-color: #494949;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 8px 10px;
            margin: 0;
          }
  
          .menu {
            display: flex;
            justify-content: space-between;
          }
  
          .navbar-menu {
            display: flex;
            justify-content: flex-end;
          }
        </style>
  
        <div class="container">
          <div class="row menu mt-3">
            <div class="col-4">
              <a href="home.html">
                <img src="/src/front/assets/img/depois do sim white png 1.png" alt="" width="40%">
              </a>
            </div>
            <div class="col-8 navbar-menu">
              <nav class="navbar navbar-expand-lg">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link grey-typography" aria-current="page" href="#">Orçamentos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link grey-typography" aria-current="page" href="#">Convidados</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link grey-typography" aria-current="page" href="#">Presentes</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link grey-typography" aria-current="page" href="#">Agenda</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link grey-typography" aria-current="page" href="#">Fotos</a>
                    </li>
                  </ul>
                  <button type="button" class="btn-style">Entrar</button>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      `;

        // Clone o conteúdo do template e anexe-o ao Shadow DOM.
        const shadowRoot = this.shadowRoot;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


