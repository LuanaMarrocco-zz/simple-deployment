Alors , il manquait plusieurs choses ici :

- Typescript (ts) a besoin d'être build avec la commande `npm run build` , j'ai rajoute un package.json avec les
  dependences dont on a besoin (bon je l'ai pris d'un autre projet, y a des dependences inutiles mais bon) .
  En gros ca prends tes fichier .ts et les transforme en .js , regarde dans /dist ^^ .

- ts a aussi besoin d'un tsconfig.json  avec des options pour la compilations and co .

- Les fichiers ts on pour extensions .ts la ils etaient en .js (bon surement parce que tu f'sais des tests mais toujours bien
  de preciser ^^)

- Si tu regardes dans le truffle-config.js , j'ai rajoute deux lignes :
  ````js
    test_file_extension_regexp: /.*\.ts$/,
    migrations_directory: './dist',
  ````

  la premiere est pour les tests , ca precise que les fichiers tests auront comme extension .ts
  et le deuxieme dis qu'il faut aller voir dans le dossier /dist pour executer la migration (au lieu d'aller voir tout simplement
  dans le dossier /migration)

  Je crois que c'est tout :p

  Ah , du coup tu dois avant tout faire `npm install`