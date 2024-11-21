const dogs = [
  {
    number: 1,
    name: 'Açúcena',
    url: 'https://azlfa.com/animais/para-adocao/azl/acucena/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2021/12/20211211_11_01-Copiar.jpg',
  },
  {
    number: 2,
    name: 'Alpha',
    url: 'https://azlfa.com/animais/para-adocao/azl/alpha/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/alpha.jpg',
  },
  {
    number: 3,
    name: 'Bart',
    url: 'https://azlfa.com/animais/para-adocao/azl/bart/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2023/02/bart2.jpg',
  },
  {
    number: 4,
    name: 'Beethoven',
    url: 'https://azlfa.com/animais/para-adocao/azl/beethoven/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/beethoven.jpg',
  },
  {
    number: 5,
    name: 'Bolota',
    url: 'https://azlfa.com/animais/para-adocao/azl/bolota/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/Bolota.jpg',
  },
  {
    number: 6,
    name: 'Boneca Minorca',
    url: 'https://azlfa.com/animais/para-adocao/azl/boneca-minorca/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2021/08/230218431_340298881082314_2458977177517717277_n.jpg',
  },
  {
    number: 7,
    name: 'Canela',
    url: 'https://azlfa.com/animais/para-adocao/azl/canela/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2023/08/canela.jpg',
  },
  {
    number: 8,
    name: 'Caramelo',
    url: 'https://azlfa.com/animais/para-adocao/azl/caramelo-2/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/caramelo.jpg',
  },
  {
    number: 9,
    name: 'Chumbo',
    url: 'https://azlfa.com/animais/para-adocao/azl/chumbo/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2021/07/chumbo.jpg',
  },
  {
    number: 10,
    name: 'Coffee',
    url: 'https://azlfa.com/animais/para-adocao/azl/coffee/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/coffee.jpg',
  },
  {
    number: 11,
    name: 'Dalila',
    url: 'https://azlfa.com/animais/para-adocao/azl/dalila/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2022/03/20211211_06_04-Copiar.jpg',
  },
  {
    number: 12,
    name: 'Faísca',
    url: 'https://azlfa.com/animais/para-adocao/azl/faisca/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-11-at-12.08.512.jpeg',
  },
  {
    number: 13,
    name: 'Fox',
    url: 'https://azlfa.com/animais/para-adocao/azl/fox/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/02/fox.jpg',
  },
  {
    number: 14,
    name: 'Hera',
    url: 'https://azlfa.com/animais/para-adocao/azl/hera/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/hera.jpg',
  },
  {
    number: 15,
    name: 'Hope',
    url: 'https://azlfa.com/animais/para-adocao/azl/hope/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/hope.jpg',
  },
  {
    number: 16,
    name: 'IPL',
    url: 'https://azlfa.com/animais/para-adocao/azl/ipl/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/IPL_2.jpg',
  },
  {
    number: 17,
    name: 'Jasper',
    url: 'https://azlfa.com/animais/para-adocao/azl/jasper/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2023/04/jasper.jpg',
  },
  {
    number: 18,
    name: 'Jordana',
    url: 'https://azlfa.com/animais/para-adocao/azl/jordana/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/jordana.jpg',
  },
  {
    number: 19,
    name: 'Kasu',
    url: 'https://azlfa.com/animais/para-adocao/azl/kasu/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/02/kasu.jpg',
  },
  {
    number: 20,
    name: 'Kika',
    url: 'https://azlfa.com/animais/para-adocao/azl/kika/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/05/20230513_152724-scaled.jpg',
  },
  {
    number: 21,
    name: 'Kinder',
    url: 'https://azlfa.com/animais/para-adocao/azl/kinder/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/Kinder.jpg',
  },
  {
    number: 22,
    name: 'Lello',
    url: 'https://azlfa.com/animais/para-adocao/azl/lello/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/lelo.jpg',
  },
  {
    number: 23,
    name: 'Leninha',
    url: 'https://azlfa.com/animais/para-adocao/azl/leninha/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2021/08/231792367_540714260682487_352928818254942641_n.jpg',
  },
  {
    number: 24,
    name: 'Lilla',
    url: 'https://azlfa.com/animais/para-adocao/azl/lilla/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/lilla.jpg',
  },
  {
    number: 25,
    name: 'Lito',
    url: 'https://azlfa.com/animais/para-adocao/azl/lito/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/05/horizontal.jpg',
  },
  {
    number: 26,
    name: 'Loki',
    url: 'https://azlfa.com/animais/para-adocao/azl/loki/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/loki.jpg',
  },
  {
    number: 27,
    name: 'Lollita',
    url: 'https://azlfa.com/animais/para-adocao/azl/lollita/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/06/436311519_457110617002924_637752991861670414_n.jpg',
  },
  {
    number: 28,
    name: 'Martim',
    url: 'https://azlfa.com/animais/para-adocao/azl/martim/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2021/12/marim.jpg',
  },
  {
    number: 29,
    name: 'Mateus',
    url: 'https://azlfa.com/animais/para-adocao/azl/mateus/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/Mateus.jpg',
  },
  {
    number: 30,
    name: 'Mikas',
    url: 'https://azlfa.com/animais/para-adocao/azl/mikas/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/mikas.jpg',
  },
  {
    number: 31,
    name: 'Morty',
    url: 'https://azlfa.com/animais/para-adocao/azl/morty/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2021/07/morty.jpg',
  },
  {
    number: 32,
    name: 'Nico',
    url: 'https://azlfa.com/animais/para-adocao/azl/nico/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2023/04/nico.jpg',
  },
  {
    number: 33,
    name: 'Pipoca',
    url: 'https://azlfa.com/animais/para-adocao/azl/pipoca/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/Pipoca_2.jpg',
  },
  {
    number: 34,
    name: 'Quinoa',
    url: 'https://azlfa.com/animais/para-adocao/azl/quinoa/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/quinoa.jpg',
  },
  {
    number: 35,
    name: 'Raposinha',
    url: 'https://azlfa.com/animais/para-adocao/azl/raposinha/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/raposinha.jpg',
  },
  {
    number: 36,
    name: 'Riva',
    url: 'https://azlfa.com/animais/para-adocao/azl/riba/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2021/12/Riba_8A_PM.jpg',
  },
  {
    number: 37,
    name: 'Ruby',
    url: 'https://azlfa.com/animais/para-adocao/azl/ruby/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2023/02/ruby.jpg',
  },
  {
    number: 38,
    name: 'Rufus',
    url: 'https://azlfa.com/animais/para-adocao/azl/rufus/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/05/eb535f26-361d-438e-8986-f931b9baa66a.jpg',
  },
  {
    number: 39,
    name: 'Sansão',
    url: 'https://azlfa.com/animais/para-adocao/azl/sansao/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2021/12/252461381_268461061858709_3462252624247746911_n.jpg',
  },
  {
    number: 40,
    name: 'Snickers',
    url: 'https://azlfa.com/animais/para-adocao/azl/snickers/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/snickers.jpg',
  },
  {
    number: 41,
    name: 'Susta',
    url: 'https://azlfa.com/animais/para-adocao/azl/susta/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2021/12/262614841_400694255021945_7593291853962288306_n.jpg',
  },
  {
    number: 42,
    name: 'Tigresa',
    url: 'https://azlfa.com/animais/para-adocao/azl/tigresa/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2022/04/Tigresa-1.jpg',
  },
  {
    number: 43,
    name: 'Tino',
    url: 'https://azlfa.com/animais/para-adocao/azl/tino/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2022/04/tino.jpg',
  },
  {
    number: 44,
    name: 'Tito',
    url: 'https://azlfa.com/animais/para-adocao/azl/tito/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/tito2.jpg',
  },
  {
    number: 45,
    name: 'Toyota',
    url: 'https://azlfa.com/animais/para-adocao/azl/toyota/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2021/03/received_1382276825456354.jpg',
  },
  {
    number: 46,
    name: 'Tropinha',
    url: 'https://azlfa.com/animais/para-adocao/azl/tropinha/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/tropinha_01.jpg',
  },
  {
    number: 47,
    name: 'Ubbi',
    url: 'https://azlfa.com/animais/para-adocao/azl/ubbi/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/ubbi.jpg',
  },
  {
    number: 48,
    name: 'Waffle',
    url: 'https://azlfa.com/animais/para-adocao/azl/waffle/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/waffle.jpg',
  },
  {
    number: 49,
    name: 'Xiclete',
    url: 'https://azlfa.com/animais/para-adocao/azl/xiclete/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/xiclete.jpg',
  },
  {
    number: 50,
    name: 'Yuki',
    url: 'https://azlfa.com/animais/para-adocao/azl/yuki/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/yuki.jpg',
  },
  {
    number: 51,
    name: 'Zélia',
    url: 'https://azlfa.com/animais/para-adocao/azl/zelia/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2023/08/zelia.jpg',
  },
  {
    number: 52,
    name: 'Zoe',
    url: 'https://azlfa.com/animais/para-adocao/azl/zoe/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/02/zoe.jpg',
  },
  {
    number: 53,
    name: 'Zuca',
    url: 'https://azlfa.com/animais/para-adocao/azl/zuca/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/12/zuca.jpg',
  },
  {
    number: 54,
    name: 'Areias',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/areias/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/Areias_2.jpg',
  },
  {
    number: 55,
    name: 'Brownie',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/brownie/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/brownie.jpg',
  },
  {
    number: 56,
    name: 'Chiquinha',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/chiquita/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2022/12/chiquita.jpg',
  },
  {
    number: 57,
    name: 'Foca',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/foca/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2021/12/246773470_569218674182446_3663212481716913559_n.jpg',
  },
  {
    number: 58,
    name: 'Lontra',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/lontra/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2023/02/lontra.jpg',
  },
  {
    number: 59,
    name: 'Misty',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/misty/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-04-05-at-9.16.18-AM-2.jpeg',
  },
  {
    number: 60,
    name: 'Ofélia',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/ofelia/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/ofelia.jpg',
  },
  {
    number: 61,
    name: 'Raiden',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/raiden/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/raiden.jpg',
  },
  {
    number: 62,
    name: 'Velhote',
    url: 'https://azlfa.com/animais/para-adocao/externos/caes-externos/velhote/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2020/08/velhote.jpg',
  },
  {
    number: 63,
    name: 'Alexia',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/alexia/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-03-at-15.29.09.jpeg',
  },
  {
    number: 64,
    name: 'Ariel',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/ariel/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/03/ariel.jpg',
  },
  {
    number: 65,
    name: 'Big',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/big-2/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/01/30df0324-4738-4ae4-acd5-cfa04a8664e0.jpg',
  },
  {
    number: 66,
    name: 'Misteriosa',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/misteriosa/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/03/misteriosa.png',
  },
  {
    number: 67,
    name: 'Fofinha',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/fofinha/',
    imageUrl:
      'https://azlfa.com/wp-content/uploads/2024/06/20230603_134335-1.jpg',
  },
  {
    number: 68,
    name: 'Gordão',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/gordao/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/02/gordao.jpg',
  },
  {
    number: 69,
    name: 'Kali',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/kali/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/kali.jpg',
  },
  {
    number: 70,
    name: 'Luisinho',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/luisinho/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/09/luisinho.jpg',
  },
  {
    number: 71,
    name: 'Mini',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/mimi/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/mimi.jpg',
  },
  {
    number: 72,
    name: 'Panqueca',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/panqueca/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/panqueca.jpg',
  },
  {
    number: 73,
    name: 'Pudim',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/pudim/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/05/Pudim2.jpeg',
  },
  {
    number: 74,
    name: 'Spark',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/spark/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/01/spark.jpg',
  },
  {
    number: 75,
    name: 'Xôtor',
    url: 'https://azlfa.com/animais/para-adocao/externos/gatos/xotor/',
    imageUrl: 'https://azlfa.com/wp-content/uploads/2024/05/Xo-Tor2-scaled.jpg',
  },
]