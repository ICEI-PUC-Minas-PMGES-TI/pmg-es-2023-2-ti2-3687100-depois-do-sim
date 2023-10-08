CREATE DATABASE TesteBD;
USE TesteBD;

CREATE TABLE Casamento(
    ID INT PRIMARY KEY,
    Orçamento-total FLOAT,
    );
CREATE TABLE Usuario(
    CPF VARCHAR(11) PRIMARY KEY,
    Nome VARCHAR(50),
    Email VARCHAR(50),
    Senha varchar(50),
    ID-Casamento FOREING KEY REFERENCES Casamento(ID),
);
CREATE TABLE Evento(
    ID INT PRIMARY KEY,
    Tipo VARCHAR(50),
    Data DATE,
    ID-Casamento FOREING KEY REFERENCES Casamento(ID),
    CNPJ-fornecedor FOREING KEY REFERENCES Fornecedor(CNPJ),
);
CREATE TABLE Fornecedor(
    CNPJ VARCHAR(20),
    Nome VARCHAR(50),
    CEP INT,
    Email VARCHAR(50),
    Senha VARCHAR(50),
);
CREATE TABLE ServiçoContratado(
    ID-serviço INT PRIMARY KEY,
    Preco FLOAT,
    Segmento VARCHAR(50),
    Descrição VARCHAR(200),
    ID-Casamento FOREING KEY REFERENCES Casamento(ID),
    CNPJ-fornecedor FOREING KEY REFERENCES Fornecedor(CNPJ),
);
CREATE TABLE Feedback(
    CPF-Usuario FOREING KEY REFERENCES Usuario(CPF),
    CNPJ-fornecedor FOREING KEY REFERENCES Fornecedor(CNPJ),
    Avaliacao FLOAT,
    Comentario VARCHAR(200),
);
CREATE TABLE Convidado(
    CPF VARCHAR(11) PRIMARY KEY,
    Nome VARCHAR(50),
    Email VARCHAR(50),
    ID-Casamento FOREING KEY REFERENCES Casamento(ID),
);
CREATE TABLE Presente(
    ID INT PRIMARY KEY,
    Nome VARCHAR(50),
    Descrição VARCHAR(200),
    Recado VARCHAR(200),
    ID-Casamento FOREING KEY REFERENCES Casamento(ID),
    CPF-Convidado FOREING KEY REFERENCES Convidado(CPF),
);
CREATE TABLE Album(
    ID INT PRIMARY KEY,
    Nome VARCHAR(200),
    ID-Casamento FOREING KEY REFERENCES Casamento(ID),
);
CREATE TABLE Midia(
    ID INT PRIMARY KEY,
    Titulo VARCHAR(200),
    Arquivo TEXT,
    Descrição TEXT,
    DataUpload DATE,
    Tipo TEXT,
    privacidade INT,
    ID-Album FOREING KEY REFERENCES Album(ID),
);

