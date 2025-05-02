## Desafio Aiqfome - Front End

### Para ver o projeto, acesse
[Clique aqui](https://aiqfome-challenge.vercel.app/)

### Para executar o projeto localmente utilize

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador e veja o resultado.

### Observações
Como o teste citava que o foco era ver o conhecimento em next do candidato, tentei utilizar o mínimo de bibliotecas externas.

E não sei se era parte do teste, mas:
1. As cores não estão centralizadas em um style guide, seria interessante centralizá-las no figma.
2. A biblioteca de ícones a ser utilizada não foi informada, e não encontrei facilmente uma semelhante, então estou lidando com cada ícone como svgs individuais.
3. Na home, a listagem de lojas não está padronizada, alguns itens tem a imagem com bordas arredondadas e outros não, além disso, alguns contém um separador entre o valor de frente e a avaliação e outros não, e como não foi possível ver um padrão, segui conforme o app do aiqfome para android, com bordas arredondadas na imagem e separador.
4. Também na home, após o input e antes dos itens tem um espaço de 1px que eu vi que não se repete nas outras páginas, então optei por retirar.
5. Na página de ticket o valor dos extras, aparece às vezes junto ao texto e às vezes separado, para padronizar irei deixar separado do texto, assim como no app de vocês.
