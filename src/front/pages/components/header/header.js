class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="hd">
		<nav class="container navbar navbar-expand-lg">
			<img src="/src/front/assets/img/depois do sim white png 1.png" alt="" width="12%">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
				aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a class="text-color" aria-current="page" href="#">Fornecedores</a>
					</li>
					<li class="nav-item">
						<a class="text-color" href="#">Convidados</a>
					</li>
					<li class="nav-item">
						<a class="text-color" href="#">Presentes</a>
					</li>
					<li class="nav-item">
						<a class="text-color" aria-disabled="true">Fotos</a>
					</li>
				</ul>

				<button class="btn btn-menu" type="submit">Entrar</button>
			</div>
		</nav>

	</header>
        `;
    }
}

customElements.define('current-header', Header);