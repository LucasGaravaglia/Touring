const datdosTeste= [ 
    
  {
    adress: 'Av. das Cataratas, 12450 - Vila Yolanda, Foz do Iguaçu - PR, 85855-750, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://t1.gstatic.com/images?q=tbn:ANd9GcTYPW7bT2x3xKFTxn462X4_zhXzmDrb7cKoaigy_JxoELm2KjHiEsUZLUnFnD11RUlQ56saODdnBcqN5A',
    name: 'Cataratas do Iguaçu',
    latitude: -25.695259,
    longitude: -54.4366662,
    id: 0,
    description: 'Cataratas do Iguaçu é um conjunto de cerca de 275 quedas de água no rio Iguaçu, localizada entre o Parque Nacional do Iguaçu, Paraná, no Brasil, e o Parque Nacional Iguazú em Misiones, na Argentina, na fronteira entre os dois países. A área total de ambos os parques nacionais corresponde a 250 mil hectares de floresta subtropical e é considerada Patrimônio Natural da Humanidade. O parque nacional argentino foi criado e'
  },{
    adress: 'Avenida das Cataratas, R. Ilha Grande, 8.100, Foz do Iguaçu - PR, 85853-000, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://static.portaldacidade.com/unsafe/1150x767/https://s3.amazonaws.com/fozdoiguacu.portaldacidade.com/img/news/2018-12/vale-dos-dinossauros-sera-gratuito-para-moradores-nesta-segunda-feira-5c0dc76ba0ec8.jpg',
    name: 'Vale dos Dinossauros',
    latitude: -25.5914254,
    longitude: -54.5172672,
    id: 1,
    description: 'Ponto turístico com dinossauros animatrônicos que se movem e fazem sons ao longo de uma trilha ao ar livre.'
  },
  {
    adress: 'Av. das Cataratas, Km 16,5 - Vila Adriana, Foz do Iguaçu - PR, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'data:image/jpeg;base64,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',
    name: 'Parque Aquático Cataratas',
    latitude: -25.6095487,
    longitude: -54.4828218,
    id: 2,
    description: 'Balneário com quartos e piscinas de água morna corrente, tobogan, e pavilhão com bar e gastronomia popular.'
  },
  {
    adress: 'Av. das Cataratas, 4793 - Vila Yolanda, Foz do Iguaçu - PR, 85853-000, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://static.portaldacidade.com/unsafe/1150x767/https://s3.amazonaws.com/fozdoiguacu.portaldacidade.com/img/news/2019-02/dreamland-tem-entrada-gratuita-para-moradores-de-foz-do-iguacu-em-fevereiro-5c5b4bf0658e4.jpg',
    name: 'Museu De Cera',
    latitude: -25.5915616,
    longitude: -54.5168294,
    id: 3,
    description: 'O Museu de Cera foi inaugurado em 2014, com um ótimo atendimento em um novo prédio que faz parte do Dreams Park Show Foz do Iguaçu, um complexo que está sendo construído e terá diversos atrativos.'
  },
  {
    adress: 'Avenida das Cataratas, Km 12, 7120 - Vila Yolanda, Foz do Iguaçu - PR, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/78/77/4d/veraoaquamania.jpg',
    name: 'Acquamania',
    latitude: -25.5825626,
    longitude: -54.5276575,
    id: 4,
    description: 'Parque de diversão extenso com toboáguas, piscinas, atrações infantis e outras atividades.'
  },
  {
    adress: 'Av. Jorge Schimmelpfeng, 70 - Centro, Foz do Iguaçu - PR, 85851-110, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/01/41/5c/b8/catedral-sao-joao-batista.jpg',
    name: 'Paróquia São João Batista',
    latitude: -25.5471003,
    longitude: -54.5871826,
    id: 5,
    description: 'Horários das Missas na Paróquia São João Batista - Foz do Iguaçu: Sábado: 06:30 e 19:30 Domingo: 8:00, 10:00, 18:00 e 20:00 Segunda a sexta: 6:00, 12:30...'
  },
  {
    adress: 'Av. Gen. Meira, s/n - Jardim Eldorado, Foz do Iguaçu - PR, 85853-110, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/iguassu/marco-das-tres-fronteiras-foto-marcos-labanca-1-1200x8010-c580a5d25056a36_c580a74b-5056-a36a-0901feb664938f96.jpg',
    name: 'Marco das 3 Fronteiras',
    latitude: -25.5897992,
    longitude: -54.5902003,
    id: 6,
    description: 'O Marco das Três Fronteiras é um obelisco e ponto turístico localizado nas cidades de Foz do Iguaçu, Puerto Iguazú e Presidente Franco referente ao local de divisa territorial respectivamente entre o Brasil, a Argentina e o Paraguai'
  },
  {
    adress: 'R. Meca, 599 - Região Central, Foz do Iguaçu - PR, 85864-410, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://www.radioculturafoz.com.br/wp-content/uploads/2019/10/Mesquita-638x365.jpg',
    name: 'Mesquita de Foz do Iguaçu Central',
    latitude: -25.5206032,
    longitude: -54.5787021,
    id: 7,
    description: 'A comunidade árabe de Foz do Iguaçu é uma das mais presentes na cultura da cidade, integrando-se com seus costumes, seu idioma, sua gastronomia, e seu pertencimento à cidade. A Mesquita Omar Ibn Al-Khattab é parte desta presença. Um templo da religião muçulmana, de beleza única na cidade, construído pela comunidade islâmica no início dos anos 1980.'
  },
  {
    adress: 'Av. Paraná, 5440 - Vila A, Foz do Iguaçu - PR, 85860-290, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://gdia.com.br/fl/normal/catedral_foz.jpg',
    name: 'Catedral Nossa Senhora de Guadalupe',
    latitude: -25.4974948,
    longitude: -54.5734166,
    id: 8,
    description: 'Catedral Nossa Senhora de Guadalupe'
  },
  {
    adress: 'R. Dr. Josivalter Vila Nova, 99 - Jardim California, Foz do Iguaçu - PR, 85867-504, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://lh3.googleusercontent.com/proxy/j-E5pBvr76k3rojojva2zs5Yi6PPLowv026N-vpPCOu7ze5g2gkDo46NrmyL0wExGfq_Z2S1BqWHfCFGTdw5dEgPEYSBDVH-lqhM9kb1fu5CTcoQGu2VILE',
    name: 'Templo Budista Chen Tien',
    latitude: -25.4745482,
    longitude: -54.5991128,
    id: 9,
    description: 'O Templo Budista Chen Tien, em Foz do Iguaçu foi construído em 1996 por comunidades chinesas da tríplice fronteira entre Brasil, Paraguai e Argentina e deixa muitos visitantes impressionados com sua beleza. '
  },  
  {
    adress: ' Av. Tancredo Neves, 6704 - Jardim Itaipu, Foz do Iguaçu - PR, 85856-979, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://www.itaipu.gov.br/sites/default/files/u27/20160113AM7276__________0.JPG',
    name: 'Itaipu Refugio Biológico',
    latitude: -25.4491383,
    longitude: -54.5555018,
    id: 10,
    description: 'O Refúgio Biológico Bela Vista é uma unidade de conservação criada em 27 de junho de 1984, com 1.920 hectares para receber milhares de plantas e animais desalojados quando da formação do reservatório de Itaipu'
  },  
  {
    adress: ' Av. Tancredo Neves, 6001 - Jardim Itaipu, Foz do Iguaçu - PR, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://i.pinimg.com/originals/ff/ae/4e/ffae4e2a528174b24933aad36d3c640b.jpg',
    name: 'Itaipu Ecomuseu',
    latitude: -25.45474,
    longitude: -54.585381,
    id: 11,
    description: 'O Ecomuseu de Itaipu é um museu localizado na cidade de Foz do Iguaçu, cidade do Estado do Paraná. O museu é administrado pela Itaipu Binacional e sua sede fica dentro da área administrativa da Usina Hidrelétrica de Itaipu. '
  },  
  {
    adress: ' Av. Tancredo Neves, 6702 - Jardim Itaipu, Foz do Iguaçu - PR, 85856-970, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://www.mineirosnaestrada.com.br/wp-content/uploads/2015/04/itaipu-binacional-5.jpg',
    name: 'Itaipu Binacional',
    latitude: -25.4471509,
    longitude: -54.5845343,
    id: 12,
    description: 'A Barragem de Itaipu é uma enorme barragem hidroelétrica no rio Paraná, entre o Brasil e o Paraguai. É conhecida pelos espetáculos de luzes noturnos e as vistas do miradouro central. O centro de comando do edifício de produção controla as turbinas da barragem. Nas proximidades, na parte paraguaia, o Museu da Terra Guarani exibe exposições sobre a cultura indígena. A norte, o refúgio Tatí Yupí é uma reserva de vida selvagem com trilhos e aves.'
  },  
  {
    adress: 'Av. Tancredo Neves, 6731 - Jardim Itaipu, Foz do Iguaçu - PR, 85867-900, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://www.h2foz.com.br/uploads/pti%20geral.jpg',
    name: 'Parque Tecnológico Itaipu',
    latitude: -25.4471705,
    longitude: -54.5847378,
    id: 13,
    description: 'A Itaipu levou desenvolvimento e progresso para a região da fronteira. Em 2003, esta contribuição ganhou nova força, com a criação do Parque Tecnológico Itaipu (PTI).'
  },
  {
    adress: 'R. Carlos Hugo Urnau, 3175 - Lot. Dona Amanda, Foz do Iguaçu - PR, 85853-000, Brasil',
    schedule: 'Aberto - Fecha ás 17h',
    pictureUrl: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/df/6e/9c/um-verdadeiro-cenario.jpg',
    name: 'Blue Park Foz',
    latitude: -25.5662356,
    longitude: -54.5538465,
    id: 14,
    description: 'O Blue Park fica sobre o Aquífero Guarani, a segunda maior reserva de água doce do mundo, o que garante seu abastecimento perene de águas termais cristalinas para a sua alegria.'
  }




]


export default datdosTeste;