# jogo-mario-desktop

<p>Recriação simples do jogo do Mario utilizando o Electron</p><br>
<h2>Exe para Windows</h2>
<a href="https://drive.google.com/file/d/1bgCd2FSnu6iS11SxapGfy2m-Kvv14Ghw/view?usp=sharing">Link para o arquino executavel</a>


  INSTRUÇÕES- Requisitos
  -------------------------------------------------------------
  Ter instalado o: <br>
    -npm
    -nodeJS
    -electron globalmente
  
  
  CRIAR ARQUIVO ELECTROM
  ----------------------------------------
  -criar pasta do projeto. Dentro dela:
  -comados:
     
          npm init
  
          npm install --save-dev electron
  
  isso irá criar um arquivo package.json com as configurações e dependencias iniciais.
  
  ESTRUTURA BASICA
  -----------------------------------
  PACKAGE.JSON:
  
          {
          "name": "jogo-mario-desk",
          "version": "1.0.0",
          "description": "",
          "main": "index.js",
          "scripts": {
          "dev": "electron ."
          },
          "author": "",
          "license": "ISC",
          "devDependencies": {
          "electron": "^25.3.2"
          }
          }
  
  nesse caso o comando para executar:
  
        npm rum dev
  
  
  CRIAR INDEX.JS: 
  --------------------------------------------------------------------------
  
          const { app, BrowserWindow } = require('electron');
  
                  let mainWindow;
  
                  app.on('ready', () => {
                  mainWindow = new BrowserWindow({
                  width: 1366,
                  height: 604,
                  resizable: false,
  
                  });
  
                  mainWindow.loadURL(`file://${__dirname}/index.html`);
          });
  
  
  TESTAR
  --------------------------
  usar o comando que você definiu no package.json, ex:
  
          {
              "scripts": {
              "start": "electron ."
              }
          }
  
  comando para executar:
  
        electron .
  
  Nesse caso o 'start':
          
        npm run start
  
  
  TORNADO O PROJETO EXECUTAVEL
  --------------------------------
  
  Para transformar um projeto Electron em um arquivo executável .exe, você precisa criar um pacote de instalação para o seu aplicativo. Existem várias ferramentas que podem ajudá-lo a fazer isso, mas aqui estão os passos gerais para criar um pacote de instalação usando o Electron Forge:
  
  Certifique-se de ter o Node.js e o NPM (Node Package Manager) instalados em seu sistema.
  
  Instale o Electron Forge globalmente usando o seguinte comando no terminal ou prompt de comando:
  
          npm install -g electron-forge
  
  Navegue até o diretório raiz do seu projeto Electron (onde está localizado o arquivo package.json).
  
  Inicialize o Electron Forge em seu projeto executando o seguinte comando:
  
           electron-forge init
  
  Siga as instruções para configurar seu projeto, selecionando o modelo de empacotamento que você deseja usar (por exemplo, "squirrel" para Windows).
  
  No Windows (CMD):
  
          set ELECTRON_IS_DEV=0
          electron-forge make
  
  
  (PowerShell):
  
          $env:ELECTRON_IS_DEV=0
          electron-forge make
  
  
  Após a inicialização bem-sucedida, você pode construir o pacote de instalação executando o seguinte comando:
  go
  
              electron-forge make
  
  
  Isso irá empacotar seu aplicativo Electron e criar o arquivo executável .exe (ou um pacote adequado para o sistema operacional em que você está construindo o pacote) na pasta out/ no diretório raiz do seu projeto.
  
  Se você selecionou o modelo "squirrel", o pacote criado incluirá um instalador que você pode executar para instalar o aplicativo no sistema.
  Observe que, para gerar pacotes executáveis para diferentes sistemas operacionais (Windows, macOS, Linux), você precisará executar o comando electron-forge make em cada sistema operacional para o qual deseja construir o pacote.
  
  
  -Outra abordagem(não testada):
    [https://www.devmedia.com.br/conhece-o-electron/38040](https://www.devmedia.com.br/conhece-o-electron/38040)
  
  
  
  
  MUDAR APOLITICA DE RESTRIÇAÕ DE SCRIPTS NO WINDOWS 10(CASO NECESSÁRIO)
  -------------------------------------------------------------
  https://answers.microsoft.com/pt-br/windows/forum/all/permitir-a-execu%C3%A7%C3%A3o-de-scripts-no/f6b195cf-0be7-46e2-b88c-358c79f78343
  
    No poweshell:
      
          Set-ExecutionPolicy Unrestricted
  
    e pressione Enter e depois digite "S" para confirmar.
  
  
  OBS:
  tamanho da minha janela
  --------------------------
  1366 x 604(navegador)
  1366 x 768(tela)







