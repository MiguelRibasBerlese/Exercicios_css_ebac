# 🌊 About SpaceSharks - Ocean Background Project

Uma página "Sobre Nós" interativa com tema oceânico e animações CSS3.

## 🚀 Demonstração

Este projeto apresenta uma página sobre nós com:
- Background oceânico animado com gradientes azuis
- Ondas que se movem suavemente
- Bolhas flutuantes subindo do fundo
- Peixe laranja nadando horizontalmente
- Menu de links sociais expansível
- Design responsivo com Material-UI

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **Material-UI v5** - Biblioteca de componentes React
- **CSS3** - Animações e efeitos visuais
- **JavaScript ES6+** - Lógica da aplicação

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/MiguelRibasBerlese/About_SpaceSharks.git
cd About_SpaceSharks
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🔧 Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Para servir o build:
```bash
npx serve -s build
```

## 🎨 Características das Animações

### Ondas Oceânicas
- Movimento suave e contínuo
- Rotação de -2° a +2°
- Duração: 10 segundos

### Bolhas Flutuantes
- 8 bolhas com tamanhos variados (8px - 40px)
- Velocidades diferentes (10s - 20s)
- Movimento vertical com flutuação lateral

### Peixe Nadando
- Animação horizontal completa
- Olhos com movimento
- Boca que abre e fecha
- Bolhas saindo da boca
- Duração: 25 segundos

## ♿ Acessibilidade

O projeto inclui suporte para:
- `prefers-reduced-motion` - Desabilita animações para usuários sensíveis
- Contraste adequado de cores
- Estrutura semântica HTML
- Navegação por teclado

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── AboutUs.jsx           # Componente principal da página
│   ├── OceanBackground.jsx   # Background oceânico (versão original)
│   └── OceanBackground_fixed.jsx # Background corrigido (versão atual)
├── styles/
│   ├── ocean-fixed.css       # Estilos das animações oceânicas
│   └── ocean-background.css  # Estilos originais
├── App.js                    # Componente raiz
└── index.js                  # Ponto de entrada
```

## 🎯 Funcionalidades

- ✅ Background oceânico com gradiente
- ✅ Animações CSS3 otimizadas
- ✅ Design responsivo
- ✅ Links sociais interativos
- ✅ Suporte a acessibilidade
- ✅ Performance otimizada
- ✅ Build de produção funcional

## 🐛 Resolução de Problemas

Se você encontrar uma tela branca:
1. Verifique se todas as dependências foram instaladas
2. Certifique-se de que está usando a versão correta do Node.js (16+)
3. Limpe o cache: `npm start -- --reset-cache`
4. Verifique o console do navegador para erros

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- **Miguel Ribas Berlese** - Desenvolvedor Principal
- **AI Co-Pilot** - Assistente de desenvolvimento

---

**🌊 Aproveite navegando pelas águas do About SpaceSharks! 🐠**