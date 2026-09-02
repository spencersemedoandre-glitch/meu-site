import { EbookConfig, Benefit, Chapter, Testimonial, Bonus, FaqItem } from '../types';

export const initialEbookConfig: EbookConfig = {
  title: 'Descubra o Método Definido para',
  titleHighlight: 'Alcançar Seu Objetivo',
  subtitle: 'Aprenda o passo a passo prático sem enrolação para dominar esse assunto e transformar seus resultados em poucos dias.',
  author: 'Prof. Gabriel Menezes',
  authorBio: 'Especialista com mais de 10 anos de experiência prática e autor de 4 best-sellers digitais com mais de 35.000 alunos transformados.',
  originalPrice: 97.00,
  promoPrice: 29.90,
  installmentsCount: 3,
  installmentsValue: 10.48,
  discountPercentage: 70,
  checkoutUrl: 'https://seu-link-de-pagamento.com',
  guaranteeDays: 7,
  salesCount: 4892,
  ratingScore: 4.9,
  ratingCount: 1420,
  supportEmail: 'suporte@seudominio.com',
  year: 2026,
  productName: 'Método Transformação Definitiva',
  coverColor: '#4F46E5',
  coverAccent: '#10B981',
};

export const defaultBenefits: Benefit[] = [
  {
    id: '1',
    icon: 'Rocket',
    title: 'Resultado Rápido',
    description: 'Estratégias diretas ao ponto projetadas para gerar resultados mensuráveis logo nas primeiras semanas de leitura.',
    tag: 'Eficácia Comprovada'
  },
  {
    id: '2',
    icon: 'BookOpen',
    title: 'Conteúdo 100% Prático',
    description: 'Sem teorias chatas ou conceitos abstratos. Tudo é explicado de forma simples com exemplos que você pode aplicar hoje.',
    tag: 'Passo a Passo'
  },
  {
    id: '3',
    icon: 'Infinity',
    title: 'Acesso Vitalício + Updates',
    description: 'Baixe o arquivo PDF e EPUB em qualquer dispositivo e consulte o material para sempre, com atualizações gratuitas.',
    tag: 'Acesso Eterno'
  },
  {
    id: '4',
    icon: 'ShieldCheck',
    title: 'Método Testado e Validado',
    description: 'Estrutura refinada com base em milhares de pessoas que já aplicaram o roteiro e alcançaram sua meta com consistência.',
    tag: 'Zero Risco'
  }
];

export const defaultChapters: Chapter[] = [
  {
    id: 1,
    numberStr: 'Capítulo 01',
    title: 'Fundamentos Essenciais',
    subtitle: 'Preparando a base sólida para o sucesso',
    description: 'Aprenda como desbloquear os conceitos-chave, eliminar distrações e evitar os 5 erros mais comuns que sabotam 90% dos iniciantes.',
    keyPoints: [
      'Identificação e eliminação dos pontos cegos imediatos',
      'Configuração do ambiente e mentalidade de execução',
      'O framework mental para acelerar o aprendizado em 3x',
      'Exercício prático: Mapeamento do seu ponto de partida'
    ],
    estimatedMinutes: 25,
    sampleExcerpt: `A maioria das pessoas falha antes mesmo de começar porque tenta implementar técnicas avançadas sem ter uma fundação sólida. 
    
Neste primeiro capítulo, nós desmontamos os mitos mais perigosos que atrasam seu progresso. Você vai descobrir exatamente quais 3 alavancas precisam ser ativadas primeiro para que o restante do método funcione de forma quase automática no seu dia a dia.

"A clareza precede a maestria. Quando você sabe com precisão cirúrgica onde pisar, cada minuto investido rende dez vezes mais."`
  },
  {
    id: 2,
    numberStr: 'Capítulo 02',
    title: 'O Passo a Passo Prático',
    subtitle: 'A engrenagem do método em ação diária',
    description: 'Como executar o método principal no seu dia a dia, mesmo com pouco tempo livre e rotina corrida.',
    keyPoints: [
      'Rotina de 20 minutos por dia para máxima retenção e impacto',
      'Modelos prontos para copiar e colar na sua rotina',
      'Como manter o ritmo sem depender apenas de força de vontade',
      'Planilha de acompanhamento e checkpoints automáticos'
    ],
    estimatedMinutes: 40,
    sampleExcerpt: `A consistência sempre vence a intensidade desordenada. 

Neste capítulo, entregamos o roteiro diário estruturado em 4 etapas simples. Não importa se você dispõe de apenas 20 minutos por dia: este sistema foi desenhado para se encaixar na sua rotina real sem sobrecarregar sua agenda.`
  },
  {
    id: 3,
    numberStr: 'Capítulo 03',
    title: 'Estratégias Avançadas & Hacks',
    subtitle: 'O segredo dos profissionais de alta performance',
    description: 'Técnicas refinadas para acelerar seus ganhos, contornar obstáculos complexos e blindar seus resultados a longo prazo.',
    keyPoints: [
      'Técnicas avançadas de otimização e produtividade direcionada',
      'Como antecipar e neutralizar momentos de estagnação (plateau)',
      'Estudos de caso reais com antes e depois detalhados',
      'Ferramentas gratuitas recomendadas para automação'
    ],
    estimatedMinutes: 35,
    sampleExcerpt: `Quando você já domina o básico, é hora de ativar os multiplicadores de força.

Aqui revelamos as estratégias que os maiores profissionais utilizam em segredo para multiplicar os resultados sem aumentar as horas de esforço.`
  },
  {
    id: 4,
    numberStr: 'Capítulo 04',
    title: 'Plano de Ação de 30 Dias',
    subtitle: 'O mapa do tesouro dia após dia',
    description: 'Um checklist diário e cronograma de 4 semanas para você manter o foco absoluto e atingir a transformação desejada.',
    keyPoints: [
      'Semana 1: Ativação rápida e vitórias imediatas',
      'Semana 2: Consolidação do hábito e ritmo de fluxo',
      'Semana 3: Escala e aprofundamento das metas',
      'Semana 4: Auditoria de resultados e consolidação definitiva'
    ],
    estimatedMinutes: 30,
    sampleExcerpt: `Um plano sem datas é apenas um desejo. 

Este checklist de 30 dias elimina qualquer dúvida sobre o que você deve fazer ao acordar em cada dia da jornada. Basta marcar os itens e ver a transformação acontecer diante dos seus olhos.`
  }
];

export const defaultBonuses: Bonus[] = [
  {
    id: 'bonus-1',
    title: 'BÔNUS #1: Checklist em PDF para Acompanhamento Diário',
    valueOriginal: 47.00,
    description: 'Um guia prático para imprimir ou preencher no celular com o roteiro diário de 30 dias para não se perder.',
    badge: 'Incluso Grátis'
  },
  {
    id: 'bonus-2',
    title: 'BÔNUS #2: Planilha Inteligente de Metas & Métricas',
    valueOriginal: 67.00,
    description: 'Painel interativo automatizado para registrar seu progresso e visualizar gráficos da sua evolução em tempo real.',
    badge: 'Incluso Grátis'
  },
  {
    id: 'bonus-3',
    title: 'BÔNUS #3: Audio-resumo Exclusivo (Versão MP3)',
    valueOriginal: 37.00,
    description: 'Ouça as ideias principais do livro enquanto caminha, dirige ou vai para o trabalho.',
    badge: 'Incluso Grátis'
  }
];

export const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Silva',
    role: 'Empreendedora • São Paulo, SP',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    text: 'Esse ebook mudou completamente minha visão! Consegui aplicar as dicas práticas logo no primeiro dia e já vi diferença imediata na minha organização.',
    verified: true,
    date: 'Há 3 dias'
  },
  {
    id: '2',
    name: 'Carlos Eduardo',
    role: 'Profissional Liberal • Rio de Janeiro, RJ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    text: 'Conteúdo direto, organizado e de altíssimo valor. Sem rodeios ou enrolação. Valeu cada centavo investido e superou minhas expectativas.',
    verified: true,
    date: 'Há 5 dias'
  },
  {
    id: '3',
    name: 'Ana Paula',
    role: 'Gestora de Projetos • Belo Horizonte, MG',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    text: 'O plano prático do capítulo 4 me economizou meses de tentativas erradas. O checklist de 30 dias é fantástico. Recomendo muito para quem quer foco!',
    verified: true,
    date: 'Há 1 semana'
  },
  {
    id: '4',
    name: 'Rodrigo Fontes',
    role: 'Consultor • Curitiba, PR',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
    text: 'Leitura leve, diagramação impecável e os bônus inclusos são uma surpresa à parte. Já recomendei para 3 colegas de trabalho!',
    verified: true,
    date: 'Há 2 semanas'
  }
];

export const defaultFaqs: FaqItem[] = [
  {
    question: 'Como e quando vou receber o acesso ao Ebook?',
    answer: 'Imediatamente após a aprovação do seu pagamento! Você receberá um e-mail com o link direto e seguro para download do arquivo em formato PDF e EPUB, além de todos os bônus inclusos.'
  },
  {
    question: 'Posso ler no celular, tablet e computador?',
    answer: 'Sim! O arquivo é 100% responsivo e otimizado para leitura agradável em smartphones (Android e iOS), tablets, Kindle e computadores (Windows e Mac).'
  },
  {
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Você pode pagar via PIX com aprovação instantânea, Cartão de Crédito em até 3x, ou Boleto Bancário.'
  },
  {
    question: 'E se o conteúdo não for útil para mim?',
    answer: 'Você conta com nossa Garantia Incondicional de 7 dias. Se por qualquer motivo você não gostar do material, basta nos enviar um único e-mail e devolveremos 100% do seu dinheiro sem perguntas.'
  },
  {
    question: 'O acesso ao material tem prazo de validade?',
    answer: 'Não! O acesso é vitalício. Você pode baixar os arquivos para o seu dispositivo e consultá-los para sempre, inclusive recebendo atualizações futuras sem custo adicional.'
  }
];
