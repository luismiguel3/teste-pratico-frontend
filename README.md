# 🏢 BeTalent - Sistema de Funcionários

Um sistema moderno e responsivo para gestão de funcionários, desenvolvido com React, TypeScript e Vite. O projeto implementa uma interface limpa para visualização e busca de funcionários, com design responsivo que se adapta a diferentes dispositivos.

## ✨ Funcionalidades

- 📱 **Design Responsivo**: Interface adaptativa para desktop e mobile
- 🔍 **Busca em Tempo Real**: Filtro por nome, cargo ou telefone
- 📊 **Visualização de Dados**: Tabela no desktop, cards expansíveis no mobile
- 🎨 **Interface Moderna**: Design clean e intuitivo
- 📞 **Formatação Automática**: Máscara para números de telefone
- ⚡ **Performance Otimizada**: Hooks customizados e componentes reutilizáveis

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de CSS
- **JSON Server** - Mock API para desenvolvimento

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd teste-pratico-betalent
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure o JSON Server

O projeto utiliza JSON Server para simular uma API. Siga os passos abaixo:

#### Instalar JSON Server globalmente (recomendado)
```bash
npm install -g json-server
```

#### Ou instalar localmente no projeto
```bash
npm install json-server --save-dev
```

#### Executar o servidor JSON:
```bash
npx json-server db.json
```

O JSON Server estará rodando em: `http://localhost:3000`

### 5. Executar o projeto React

Em um novo terminal, execute:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em: `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Layout.tsx
│   ├── SearchInput.tsx
│   └── ...
├── Pages/Employee/       # Página de funcionários
│   ├── components/       # Componentes específicos da página
│   │   ├── EmployeeTable.tsx # Tabela/Cards responsivos
│   │   ├── EmployeeCard.tsx # Card para a versão mobile
│   │   └── EmployeeRow.tsx # Linha para a versão desktop
|   ├── hooks/ 
|   |   ├── useEmployees.ts # Hook para buscar funcionários
|   |   └── useEmployeeFilter.tsx # Hook para filtrar por nome, telefone, cargo
│   └── App.tsx          # Componente principal
├── types/
│   ├── employee.ts # Tipos aos funcionários   
└── utils/               # Utilitários
    └── masks.ts         # Máscaras de formatação

```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o ESLint

## 📱 Funcionalidades por Dispositivo

### Desktop
- Tabela completa com todas as informações
- Busca em tempo real
- Hover effects nas linhas

### Mobile
- Cards expansíveis com animação
- Header com foto e nome sempre visível
- Detalhes expandem ao clicar

## 🔧 Configuração da API

O projeto está configurado para consumir dados de:
```
http://localhost:3000/employees
```

### Estrutura esperada dos dados:
```typescript
interface Employee {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}
```

## 🎨 Customização

### Cores principais (Tailwind)
- `blue-primary`: Cor principal do tema
- `gray-*`: Escala de cinzas para textos e backgrounds

### Responsividade
- Breakpoint mobile/desktop: `768px` (classe `md:`)
