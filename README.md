#  Fase inicial

## Atenção, leve em consideração essas informações:

### **Instale o Yarn**
Nesse projeto, eu (André), inicializei o react-app pelo yarn. Possui algumas diferenças, mas no final é a mesma coisa que o npm, porém mais rápido. Contudo, será necessário instalar o Yarn por fora. Você pode instalar por esse link: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable
Recomendo fazerem a instalação completa no windows. Com o Yarn instalado, basta rodar a aplicação com **yarn start**.

### **Organização das Pastas**

Criei algumas pastas para facilitar a organização do projeto. Nem todo mundo segue esse padrão, inclusive, podemos mudar se a equipe não se adaptar a esse formato. Mas de todo modo, é bem intuitivo. A pasta _Components_ conterá todos os componentes que poderão ser reutilizados mais de uma vez. Em seguida, existe a pasta _Pages_ que armazenará todas as páginas que existirão no nosso site. Por enquanto, temos apenas a _Home_. Note que Todos os componentes da Home, desde o **_jsx_** até o **_css_** ficarão dentro da pasta _Home_. Isso irá facilitar na hora de ver o que está rodando dentro das páginas.

### **Responsividade**

Apenas relembrando, busque utilizar as unidades de medida **vh** e **vw**, isso facilitará na responsividade do site.Eu sei que é beeeem chamativo utilizar o **css** que o Figma oferece, entretanto, será muito trabalhoso ajeitar as telas utilizando **px** como medida. É bem simples utilizar **vh** e **vw**. 1 **vh** = 1/100 da altura do viewport da página. Então se a altura do navegador é de **1000px**, _1**vh**_ = **10px**. Da mesma maneira irá ocorrer com o **vw**.

### **React-Router-DOM**

Quem for fazer as rotas para outras páginas, talvez será necessário instalar o pacote de rotas do react, o **React-Router-DOM**. Quando fizerem essa implementação, todos desenvolvedores terão que instalar esse pacote no projeto. Do contrário, a inicialização irá dar um erro.


### Libs usadas
- Material ui

``` 
// usando npm
npm install @material-ui/core @material-ui/icons

// usando yarn
yarn add @material-ui/core @material-ui/icons 
```
- Formik

``` 
// usando npm
npm install formik

// usando yarn
yarn add formik 
```

- Yup
// usando npm
npm install yup

// usando yarn
yarn add yup 
```




