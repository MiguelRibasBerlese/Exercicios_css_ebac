// Team data structure for AboutUs component
export const teamMembers = [
  {
    id: 1,
    name: "João Silva",
    university: "Universidade de São Paulo",
    course: "Ciência da Computação",
    isStudent: true,
    photoAlt: "Foto de João Silva, estudante de Ciência da Computação"
  },
  {
    id: 2,
    name: "Maria Santos",
    university: "Universidade Federal do Rio de Janeiro", 
    course: "Engenharia de Software",
    isStudent: true,
    photoAlt: "Foto de Maria Santos, estudante de Engenharia de Software"
  },
  {
    id: 3,
    name: "Pedro Oliveira",
    university: "Universidade de Brasília",
    course: "Sistemas de Informação",
    isStudent: true,
    photoAlt: "Foto de Pedro Oliveira, estudante de Sistemas de Informação"
  },
  {
    id: 4,
    name: "Ana Costa",
    university: "Universidade Estadual de Campinas",
    course: "Engenharia da Computação",
    isStudent: true,
    photoAlt: "Foto de Ana Costa, estudante de Engenharia da Computação"
  },
  {
    id: 5,
    name: "AI Co-Pilot (Assistant)",
    university: "N/A",
    course: "N/A", 
    isStudent: false,
    isVirtual: true,
    photoAlt: "Ícone representando o AI Co-Pilot, assistente virtual da equipe"
  }
];

// Division of functions/roles
export const roles = [
  {
    id: 1,
    role: "Frontend Developer",
    description: "React development, UI/UX implementation, responsive design",
    isAI: false
  },
  {
    id: 2,
    role: "Backend Developer", 
    description: "API development, database design, server infrastructure",
    isAI: false
  },
  {
    id: 3,
    role: "Data Scientist",
    description: "Data analysis, machine learning models, statistical insights",
    isAI: false
  },
  {
    id: 4,
    role: "Project Manager",
    description: "Team coordination, timeline management, stakeholder communication",
    isAI: false
  },
  {
    id: 5,
    role: "AI Co-Pilot (Assistant)",
    description: "data wrangling & retrieval, text generation (summaries/explanations), code scaffolding & review suggestions, visualization prompts, QA checks and linting guidance",
    isAI: true
  }
];

// Tools used in the project
export const tools = [
  // Development Tools
  { id: 1, name: "React", category: "frontend" },
  { id: 2, name: "Node.js", category: "backend" },
  { id: 3, name: "MongoDB", category: "database" },
  { id: 4, name: "Express", category: "backend" },
  { id: 5, name: "Material UI", category: "frontend" },
  { id: 6, name: "Python", category: "data" },
  { id: 7, name: "Pandas", category: "data" },
  { id: 8, name: "Scikit-learn", category: "data" },
  { id: 9, name: "Git", category: "devops" },
  { id: 10, name: "Docker", category: "devops" },
  { id: 11, name: "AWS", category: "cloud" },
  { id: 12, name: "Jupyter", category: "data" },
  
  // AI Tools
  { id: 13, name: "v0", category: "ai" },
  { id: 14, name: "ChatGPT", category: "ai" },
  { id: 15, name: "LLM Prompts", category: "ai" },
  { id: 16, name: "Prompt Engineering", category: "ai" }
];

// Page sections configuration
export const sections = {
  header: {
    title: "Sobre Nós",
    subtitle: "Somos uma equipe de estudantes universitários apaixonados por tecnologia e inovação"
  },
  teamMembers: {
    title: "Membros da Equipe",
    description: "Conheça os integrantes da nossa equipe"
  },
  roles: {
    title: "Divisão de Funções",
    description: "Responsabilidades e especialidades de cada membro"
  },
  aiCopilot: {
    title: "AI Co-Pilot (Assistant)",
    description: "Nosso assistente virtual oferece suporte em descoberta de dados, elaboração de explicações, scaffolding de código, prompts de visualização, verificações de QA e design de experimentos. O AI Co-Pilot atua como um membro virtual da equipe, fornecendo orientação técnica e acelerando o desenvolvimento do projeto."
  },
  tools: {
    title: "Ferramentas Utilizadas no Projeto",
    description: "Tecnologias e ferramentas que utilizamos no desenvolvimento"
  },
  checklist: {
    title: "Lista de Verificação",
    description: "Verificação dos requisitos do projeto",
    items: [
      {
        id: 1,
        title: "AI Co-Pilot claramente presente",
        description: "Card dedicado descrevendo responsabilidades e entrada na lista de funções"
      },
      {
        id: 2,
        title: "Identificação como assistente virtual",
        description: "Claramente marcado como não-humano para não conflitar com membros universitários"
      },
      {
        id: 3,
        title: "Ferramentas de IA incluídas",
        description: "v0, ChatGPT, LLM Prompts e Prompt Engineering listados nas ferramentas"
      }
    ]
  }
};