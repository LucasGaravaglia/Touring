-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: fdb30.atspace.me
-- Generation Time: 09-Ago-2020 às 23:51
-- Versão do servidor: 5.7.20-log
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `3537604_hackatour`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `agency`
--

CREATE TABLE `agency` (
  `agency_id` int(11) NOT NULL,
  `agency_user_id` int(11) NOT NULL,
  `agency_location` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `agency_address` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `agency_cnpj` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `agency_phone` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `agency_email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `agency_description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `agency_image` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `agency_creation_datetime` datetime NOT NULL,
  `agency_approved` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_requests`
--

CREATE TABLE `tour_requests` (
  `tour_request_id` int(11) NOT NULL,
  `tour_request_user_id` int(11) NOT NULL,
  `tour_request_tourist_place_list` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_request_restaurants_list` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_request_datetime` datetime NOT NULL,
  `tour_request_status` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_spots`
--

CREATE TABLE `tour_spots` (
  `tour_spot_id` int(11) NOT NULL,
  `tour_spot_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_phone` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_schedules` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_location` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_address` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_city` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_category` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_description` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_image` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `tour_spots`
--

INSERT INTO `tour_spots` (`tour_spot_id`, `tour_spot_name`, `tour_spot_phone`, `tour_spot_schedules`, `tour_spot_location`, `tour_spot_address`, `tour_spot_city`, `tour_spot_category`, `tour_spot_description`, `tour_spot_image`) VALUES
(1, 'Parque das Aves', '(45) 3529-8282', 'Terça a domingo, das 8h30 às 17h', '-25.6136332,-54.4867334', 'Av. das Cataratas, 12450 - Vila Yolanda', 'Foz do Iguaçu - PR', 'tourist_place', 'Visite o Parque das Aves para ver as raras espécies de aves', 'https://lh3.ggpht.com/p/AF1QipOTplHOHh3FKRywPIwIMJ9_5uGY-6QBrZZ10Fxp=s512'),
(2, 'Mabu Thermas Grand Resort', '(45) 3132-2000', 'Todos os dias 24h', '-25.5673659,-54.5572323', 'Av. das Cataratas, 3175 - Vila Yolanda', 'Foz do Iguaçu - PR', 'hotel', 'Visite o Hotel Mabu', 'https://q-cf.bstatic.com/images/hotel/max1024x768/253/253940176.jpg'),
(3, 'Rafain Churrascaria Show', '(45) 3523-1177', 'Segunda à Sábado, 19:00 às 23:00 e Domingo 11:30 às 16:00', '-25.5564687,-54.5660356', 'Av das Cataratas, 101', 'Foz do Iguaçu - PR', 'restaurant', 'Almoce ou jante na maior churrascaria de Foz do Iguaçu', 'https://cdipg.s3.amazonaws.com/foz_do_iguacu/events/photos/000/000/117/show/05_rafa.jpg'),
(4, 'Cataratas do Iguaçu', '(45) 3521-4400', 'Todos os dias, das 09:00 às 19:00', '-25.6175807,-54.4789895', 'Av das Cataratas, 755', 'Foz do Iguaçu - PR', 'tourist_place', 'Veja de perto a maior queda de água do país', 'https://s2.glbimg.com/T2Hf6r1Pyp1vuvjkkNIz3NTd0BM=/0x0:1280x848/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/0/p/20GTC7SBuuNbHXt6xRK'),
(5, 'Bourbon Cataratas do Iguaçu Resort', '(45) 3521-3900', 'Todos os dias 24h', '-25.559867,-54.5616859', 'Av. das Cataratas, 2345 - Vila Yolanda', 'Foz do Iguaçu - PR', 'hotel', 'Visite o Hotel Bourbon', 'https://media-cdn.tripadvisor.com/media/photo-s/0f/39/37/25/bourbon-cataratas-convention.jpg'),
(6, 'Usina Hidrelétrica de Itaipu', '(45) 3576-7000', 'Todos os dias, das 08:00 às 17:00', '-25.4468097,-54.5850724', 'Av. Tancredo Neves, 6702', 'Foz do Iguaçu - PR', 'tourist_place', 'A maior usina hidrelétrica do mundo', 'https://s2.glbimg.com/G07Ul6xcD9vVWYBnaBIpTFWrKjU=/620x430/e.glbimg.com/og/ed/f/original/2020/02/14/20151122am9060.jpg'),
(7, 'City Bier Petiscaria', '(45) 3025-3977', 'Segunda à Sábado, das 11:00 às 22:00', '-25.5431319,-54.5840887', 'Rua Quintino Bocaiúva, 1088 - Centro', 'Foz do Iguaçu - PR', 'restaurant', 'Carnes na chapa, feijoada, chopes, drinques e mais em espaço descontraído, com tijolo aparente e área externa', 'https://media-cdn.tripadvisor.com/media/photo-s/09/c1/3e/26/city-bier.jpg'),
(8, 'Marco das Três Fronteiras', '(45) 3132-4101', 'Terça à Domingo, das 15:00 às 21:00', '-25.5897992,-54.5902003', 'Av. Gen. Meira, s/n - Jardim Eldorado', 'Foz do Iguaçu - PR', 'tourist_place', 'Visualize as três fronteiras de Foz do Iguaçu em um lugar só', 'https://www.comboiguassu.com.br/wp-content/uploads/2020/03/Marco-das-Tr%C3%AAs-Fronteiras-750x410.jpg'),
(9, 'DreamLand - Museu de Cera', '(45) 3527-8100', 'Terça à Domingo, das 13:00 às 18:00', '-25.5806329,-54.5754501', 'Av. das Cataratas, 8100', 'Foz do Iguaçu - PR', 'tourist_place', 'Grande museu de cera com muitos personagens, dinossauros animatrônicos, exposições de carros e motocicletas', 'https://media-cdn.tripadvisor.com/media/photo-s/07/a0/f4/2a/museu-de-cera-dreamland.jpg'),
(10, 'Templo Budista Chen Tien', '(45) 3524-5566', 'Terça à Domingo, das 09:30 às 16:30', '-25.5059209,-54.6120762', 'Rua Dr. Josivalter Vila Nova, 99 - Jardim Californi', 'Foz do Iguaçu - PR', 'tourist_place', 'O Templo Budista Chen Tien, em Foz do Iguaçu foi construído em 1996 por comunidades chinesas da tríplice fronteira entre Brasil, Paraguai e Argentina e deixa muitos visitantes impressionados com sua beleza', 'https://www.hoteldelreyfoz.com.br/wp-content/uploads/2018/02/templo-budista-chen-tien-Foz-do_Iguacu.jpg'),
(11, 'Blue Park Foz', '(45) 3521-2060', 'Segunda, Quarta, Quinta e Sexta das 10:00 às 17:00, Sábado e Domingo das 10:00 às 18:00', '-25.5662356,-54.5538465', 'Rua Carlos Hugo Urnau, 3175 - Lot. Dona Amanda', 'Foz do Iguaçu - PR', 'tourist_place', 'O Blue Park fica sobre o Aquífero Guarani, a segunda maior reserva de água doce do mundo, o que garante seu abastecimento perene de águas termais cristalinas para a sua alegria', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/15/df/6e/9c/um-verdadeiro-cenario.jpg'),
(12, 'Parque Tecnológico Itaipu', '(45) 3576-7200', 'Segunda à Sábado, das 08:00 às 18:00', '-25.4471705,-54.5847378', 'Av. Tancredo Neves, 6731 - Jardim Itaipu', 'Foz do Iguaçu - PR', 'tourist_place', 'A Itaipu levou desenvolvimento e progresso para a região da fronteira. Em 2003, esta contribuição ganhou nova força, com a criação do Parque Tecnológico Itaipu (PTI)', 'https://www.h2foz.com.br/uploads/pti%20geral.jpg'),
(13, 'Itaipu Refugio Biológico', '(45) 3520-6676', 'Segunda à Sábado, das 08:00 às 18:00', '-25.4491383,-54.5555018', 'Av. Tancredo Neves, 6704 - Jardim Itaipu', 'Foz do Iguaçu - PR', 'tourist_place', 'O Refúgio Biológico Bela Vista é uma unidade de conservação criada em 27 de junho de 1984, com 1.920 hectares para receber milhares de plantas e animais desalojados quando da formação do reservatório de Itaipu', 'https://www.itaipu.gov.br/sites/default/files/u27/20160113AM7276__________0.JPG'),
(14, 'Itaipu Ecomuseu', '(45) 3576-7000', 'Segunda à Sábado, das 08:00 às 18:00', '-25.45474,-54.585381', 'Av. Tancredo Neves, 6001 - Jardim Itaipu', 'Foz do Iguaçu - PR', 'tourist_place', 'O Ecomuseu de Itaipu é um museu localizado na cidade de Foz do Iguaçu, cidade do Estado do Paraná. O museu é administrado pela Itaipu Binacional e sua sede fica dentro da área administrativa da Usina Hidrelétrica de Itaipu', 'https://i.pinimg.com/originals/ff/ae/4e/ffae4e2a528174b24933aad36d3c640b.jpg'),
(15, 'Aquamania Foz', '(45) 3529-8272', 'Terça à Domingo, das 10:00 às 18:00', '-25.5825626,-54.5276575', 'Av. das Cataratas, Km 12, 7120 - Vila Yolanda', 'Foz do Iguaçu - PR', 'tourist_place', 'Parque de diversão extenso com toboáguas, piscinas, atrações infantis e outras atividades', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/78/77/4d/veraoaquamania.jpg'),
(16, 'Mesquita de Foz do Iguaçu Central', '(45) 3573-1123', 'Segunda à Quinta nos horários 09:00–11:00~14:00–17:00 e Sexta e Sábado das 09:00 às 11:00', '-25.5206032,-54.5787021', 'Rua Meca, 599 - Região Central', 'Foz do Iguaçu - PR', 'tourist_place', 'A comunidade árabe de Foz do Iguaçu é uma das mais presentes na cultura da cidade, integrando-se com seus costumes, seu idioma, sua gastronomia, e seu pertencimento à cidade. A Mesquita Omar Ibn Al-Khattab é parte desta presença. Um templo da religião muçulmana, de beleza única na cidade, construído pela comunidade islâmica no início dos anos 1980', 'https://www.radioculturafoz.com.br/wp-content/uploads/2019/10/Mesquita-638x365.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_spots_attractives`
--

CREATE TABLE `tour_spots_attractives` (
  `attractive_id` int(11) NOT NULL,
  `attractive_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_schedule` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_price` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `attractive_images` varchar(1000) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_spots_content`
--

CREATE TABLE `tour_spots_content` (
  `tour_spot_content_id` int(11) NOT NULL,
  `tour_spot_content_spot_id` int(11) NOT NULL,
  `tour_spot_content_name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_content_type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_content_description` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `tour_spot_content_url` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `tour_spots_content`
--

INSERT INTO `tour_spots_content` (`tour_spot_content_id`, `tour_spot_content_spot_id`, `tour_spot_content_name`, `tour_spot_content_type`, `tour_spot_content_description`, `tour_spot_content_url`) VALUES
(1, 1, 'Papagaios', 'image', 'Veja passarinhos coloridos como a Arara Azul', 'https://www.h2foz.com.br/fl/normal/noticia_578422_img1_araras.jpg'),
(2, 1, 'O que é o Parque das Aves', 'youtube_video', 'Explicação do parque', 'https://www.youtube.com/watch?v=Fss3MDeQxHQ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tour_spots_rate`
--

CREATE TABLE `tour_spots_rate` (
  `rate_id` int(11) NOT NULL,
  `rate_user_id` int(11) NOT NULL,
  `rate_spot_id` int(11) NOT NULL,
  `rate_type` int(11) NOT NULL,
  `rate_comment` varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  `rate_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_firstname` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_lastname` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_cpf` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_phone` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_address` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `user_image` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_type` int(11) NOT NULL DEFAULT '0',
  `user_creation_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`user_id`, `user_firstname`, `user_lastname`, `user_cpf`, `user_phone`, `user_address`, `user_email`, `user_image`, `user_type`, `user_creation_datetime`) VALUES
(1, 'Levi Arcanjo', NULL, NULL, NULL, NULL, 'arcanjolevi@gmail.com', 'https://lh3.googleusercontent.com/a-/AOh14Gi5r3uW_s0j-DXG7jsJOiYuQjiFs_iFpllx9RdnYQ', 0, '2020-08-09 02:33:51'),
(2, 'Leví Cícero Arcanjo', NULL, NULL, NULL, NULL, 'arcanjolevi@hotmail.com', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3027022580728675&height=200&width=200&ext=1599543282&hash=AeQS-Z-Fc2Ah9rv6', 0, '2020-08-09 02:34:44'),
(3, 'Lucas Garavaglia', NULL, NULL, NULL, NULL, 'lucaaspvp@gmail.com', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=3851426001568432&height=200&width=200&ext=1599602149&hash=AeRrpdMyb49MDvGY', 0, '2020-08-09 18:55:51');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user_login_token`
--

CREATE TABLE `user_login_token` (
  `user_login_token_id` int(11) NOT NULL,
  `user_login_user_id` int(11) NOT NULL,
  `user_login_method` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `user_login_token` varchar(512) COLLATE utf8_unicode_ci NOT NULL,
  `user_login_expires` datetime NOT NULL,
  `user_login_token_ip` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `user_login_token`
--

INSERT INTO `user_login_token` (`user_login_token_id`, `user_login_user_id`, `user_login_method`, `user_login_token`, `user_login_expires`, `user_login_token_ip`) VALUES
(1, 1, 'Google', '4d11abde76797171b3c1c2ea56992eede4664fe39f8f7a3355503f18a61cd19d11001587e6853abc9dd29552a6b0c878d1098c56aaad1a56114ae7508495a8bc21a8fd64b12e9742f4cf0c8182cea36dbc0a19a78cd6a1220a70e7f9bd149815871f8a5ae6d48ccbfb50640eff40d0d99d24f6193c548c005d45c17bce80ff3d989b0e0318a19a6f88fc1c4d33066c3412097d9a615787313d8c679304bdffd8d469a04f4bdee7769d2adb594ebb9a4b8580f4e82e3a1c760556122a803717e6cdf1d640aa3cada53da06c83b78571a37ce298c6aa6e576bd7904c7b8a1c9f0b10bbda12ea66bfd215ddff106b039b6ddf95dd4ace3b03fa0dd00bbe0aa2acf6', '2020-08-12 02:33:51', '::1'),
(2, 2, 'Facebook', 'f4dd919a70b65d7648ad62646aa57dde08a746dc6c63f6666f8744a2e51c6c37609bf5d0f7a20a8ede37edf809579a7f39a887359d76228d98424e5e241833b42efb8b860e78a9b58a0677cb69e2441ca98cc432e178a77daeedcae0bc130d1ec7a897cf4b9a200a39ad4e3c8f0cbe0f4d6a67331b7dd56142dbc3800edc07444e476fbfe49b47f239f0874f93683adf12ea37c4bc9e47ec962b0c9990550264f8dfa0b315dbe5f7f65b8d3fd96fbe606a623716c0707a769c94125f0444046369d61fd0c69bc534a8b5c5d66f40d4b11e5a6ea11cc3d715d2f8521372a31380e2bc5b0110db51fa7642181c0476b86dabdb63fce9404273e8f33d23c468ca3f', '2020-08-12 02:34:44', '::1'),
(3, 2, 'Facebook', '5dd60967c55de4c700d6ce576fe79c128756a0591c888e82a41dd1b19d2351ab6f62a2fa45d1ac52073ccd39c23e78a32eb06695606889189bfad41bfaf8265b1acbcdaa531cbe0bf4a940ef9fc4d3500019f3442d1c76fbf739e22b73c329f884a16c3b0296ba90fcfca64f4102a2c7817a90329bce4f1f47d63c9a2202ce08dc760aa19c42d737d5ec6edcaed45d8a55bea8947231ebdc3c8a9e20e9984459bac4bdf41da9ccfa37c7f0be348a9ff8c4bcca2034fb3ed6af02aff6c88abb8f21453a8f6c50561e78d7e078186dbbb3aabdce31c6f16597170970ca9f2729f3da007a0340979df873a448d5cb9d15416a1469597de603989f26e5a65ebd2d34', '2020-08-12 02:35:32', '::1'),
(4, 2, 'Facebook', 'c7caa7e075f625ce874490f2f1549a2544d810af5f1e7da59b72dc709d3b422ec78ba890945c1b7c4eb7dde74448ac61a688f6f6603348e2281cacde9f1c1208fc43d6cef09a64011e104407d0ddbd9be8c3a16c5ac78b1eb29d5ffbe7b8d9fbc72ca492e7931e9fc7396cfb054b4acef7280756a5d336a95dad0e10e8fc7f6fd01ca34f88beb541ef92432a1e3019dcb25976dbaa9ead268ce205e358c43b4ee2a1c55092ea8c205e8cc3fedf65f52b3c407b7995ead363fa83efcda63a42886dae24d5d71c0b136bdb54c5dafb11e041f3007524b83277cb4baff9e372bb6eb4a11c0a9428a7d0e14b5220d0feda273c9c51093f222b0c279ec61af6d1a2eb', '2020-08-12 02:38:33', '::1'),
(5, 1, 'Google', '5a046ddf1d48a5430ce5e33e157f01cba2d659299beaf922392d40521bedd1b5a33e6e53e46d65c1631788480b34f2602844e1316f9d56231b202fb38cf7c941af8f42c0babb83dc7329b526d00a743d555eb7d26bfd86020d502bf5bf89802e0e15163077aaf465fa3b271532faccbd131b3a5e8b4e0140548a834a803237a2d5008f5e66e788844e99592482877c451b4b552f746cf8b25ee4e25acd55136bd543759b1a1b45b3a4b4802ac5eca3b786cd9a3cbb9e8e0003cae7070f825d958c6b92c617d2a8af305eeb6f9230f05d72978c8a6b96c52cf7f7877bc54e6fe0bd3d33322625b30e2cc9253c4703635f3f4a760ee42c8ef96bf3bea27dc0f314', '2020-08-12 02:40:02', '::1'),
(6, 2, 'Facebook', 'ece10f6cebf3e687b59695aa38a8296a6cbbf480727080ae2ec8cc716ad14a3635bea25d3890f814123d2b662c3a2f8b1bb094bb04b81f549f94d1d71bea5e78dafccebbfcb495bd0957cc3fd5f864e32860f6e230e3b457b4178381280be73efe431e1641605975b6f8c59f97111ee6060c0a4a60de10cc77f6c2cffd8fda043160b822386d5ca1e1b6a583e9c967e96251954615194c0e24d614a33c659656bd5ec3d6b38ea4a3a14919ab4a0a8ec89b2b7efbf663c60c5ba9c33e378cab7c4f392c3d22e4cacd967bf75a8380276f00e919c9997f9621cdb50bfd8e934f8a3712bf10aea4d3ce06891b570bddb05414e006a2b97cd19eb0933362b5832c64', '2020-08-12 02:43:59', '::1'),
(7, 1, 'Google', 'bc8a87a22e7f175f2b0631cc616d94646a1a4aa608a76c14192ddaaa1de5dd26544deace37a5ad2b2be8a57af57239877a876be107a540fdd5d54a924fb8d8f39af4ab37d62e9df6568aef689c03123c477b6dfc449163c73fec9d3edad515cf87880ac60755c1ded7efb305e57393d2e5700a2bca0e66d4988190851a390d0bba337219da994563aee1cfa5cb8790af43e7435a56c0fd3f0d5625e09233e52273a18c557dd8bbcf09132302ee9d354186b02cb8d166782a4a827202025fca474ab50409cab6e2e842ab772ff92d8805cb6bd96401c3588105e8546af57fa29f4db205c1868eb5075b22dad3ad0d71f59572732521461622c65f75dcb6c34efa', '2020-08-12 02:45:28', '::1'),
(8, 1, 'Google', 'c1471a06b746677f04d858defe36c018a5a6009966a4ad0180c9a95db3cc9ce88ceed11d5030c8e15b83f362418d1fe95032871a740f53f71dcbd8a5de426eaa9241b2785c847e5e53d312a31c836348a45337fe91152232201f8234ca4de0b11c9f574680e6c114f49dd369f25d4c13d3c1c1935299304953fd0a304b1e556f46557720f4b25323a0df058f832198939599ec9bede11e483343f651d71458d67a7cc2c200eaeefae43bf7dbabb2871d5df81e95eb2ec8f7208597010805abc1e941d953a3990889e6805e1ebc0f38c28c39d079650b3b165cb717243555e9aaf74bcd21484237d3d1a0505341e0f5e4c6f4c22cb5f47182c3d22182b76bab34', '2020-08-12 02:46:38', '::1'),
(9, 2, 'Facebook', 'd11ded58d4cf9d01a7c52bcc96457e202821f09a7618063fa9d139da5cd751344b98f790f608d222f75c61273f8cdf56775b78f5fad57772594f48fb22eca3c02df7e640812196fbfd751d3828c124c66b81b12c24385c01b1d6250450567c0dc4b6f0806af9d967097b51c1172250cec8e074ffd3e4262346414a4385b259cf153262b9a70c489c848722d6b15216aa0f37cdfd80cfbac09a081a8e74738aadb336301d84edd9d60c5de4ab1257c526cf5e5b40446f5e7389d23f39f3fab4a1bd7bfea845903518fb8091c7a8a6a943d1dec8a1e56508a12d0384026e32047f3ff1d9f95301b6a9020309b3e6734e294bf7ca45ba4006dcc5ba5d6ac451f05e', '2020-08-12 02:47:20', '::1'),
(10, 1, 'Google', '8051639a728eccabaee5798e2a08cb4be3e0cb6ced716cc32693b73828280d8d1f9c877dd22f1c1856d7eb0ca43b670d05ed44dd1cea106ee1a7bf951dab20c04f1feb436e20a2150548d1dd1d6af9e0cc09ecd0753fb75fb954078674ca3921ff81131bfe79ee50c1c16f12f277938751f83a74c5693b1a3ed7254c2d7fa553f3e205ff08e48ff4c72df4cfed3d4ff80538f41efb732e1f2dece939b9b36412024f29b7f4582959448bd962bfba6ebc9c5fe1bee09b9ef408b781398e5b4afafbe8cb5182fcbba8ddaf2d1a2c671ece1b85e19d4c6b96c8ffc19c682597b5528f1c5b48ec050fc77270a68859bc5b810a5db605ed5d04fa26862e9b60673b84', '2020-08-12 02:47:38', '::1'),
(11, 2, 'Facebook', '6aef1eb178e6682b5e8ee205a7ac7b38316f6e3910a8e7958d9a06af62c50ec15c571bc6b742a0a233137c5347e49e4e162cbff7019bf0b1d9cc3e55406442b5a14575e780559c9f3180b5126a482c71dea27069c6f47e6149847363040949aa40398abf3574778e5965e4065a221df197ba475e8f87665394a4fa726ad0c7056a6449a1aa4806530d24a2000ec582e33c2f4a4dad54806619e2209152f182750fbc965aed36cce35ba9e2542a1a32ed9278b64066bc6aad77548a06009a541344a71ba36a5ee35c185101750496e7936b588a2dc8fbf318db7c15a39f875ab4812d489048836d56710a300f6d88108b2426e5c3b6ff041046ce8456e53f939c', '2021-08-09 03:09:36', '::1'),
(12, 2, 'Facebook', '3ea097954cea34af1f33e242d0b327043743c3920ca1206d7fb1b7982812f802d730c483b237090f20e520bed1a2a8ce65743df4ba15555d6947c34485c9c7bd6d57850f5fd7d9c8f86dadb938f81c824b86e863f34a1524754b65314da6e97a73181edb05080923239a04ceb56c9f76a451b2b0df740a68ca63e9f9700a57e9e05348c74849f3d567199d1be497a9cdc0c07d0b699c258c491c2ed4a6b6c709359430343b1f2cf60627b6e45e128c27eec3c9eac3c7cbd5d3488c226c6c935c18e6fe615318f8580d84058f1fcc42933a443cafc9fb948240ecc78b819e3a43ee7db9f2e77efceb0ab59e8081490bf86a849b68a20bdbebd241eb33177942e7', '2021-08-09 03:24:15', '::1'),
(13, 2, 'Facebook', '83e9951bf4a841c994e36963e8b0c388b2dce15fe43ee82ae2f8ea001cc9f4e3025faa9152dd4cb8b4ca8a823cbbf9dc3931fcc502bbecd5a3a20a63482b506c1664768a9add576d33f7e5e08644ff8d4702a45fe25fbaeace3a0b43f7396a7a88eb92fd5aa6f0c103e0f1481021f400f855a17b6b0481429c2f215e3e5b93a957f88707d8f094b5ffa776a1c790aaa769ec8737f0260ae72898160a86350f63d5ca25ce220ca906b4634f81ada14b8d294c4e6898c75dbd8998deb49c8048dfa4e4e76ae9eaf1722afd7d8b757fda99f8e67bb8572a2342ef8e2d841799456975b5d0c0ad9f96e44a48a45987d1571f01e338a77bc87c3c86d6bb1963ee80c1', '2021-08-09 03:25:17', '::1'),
(14, 2, 'Facebook', '20a3409ad3baea22c2dbbb25c5b918640199210c63feae802593daae0d541dd5fec5a0772dd297a77186f67e66362d41c823a638867386b78754b71c79dd63a011798a7e58ee4f109e27631b28d15087a928c580826fa25e875674f2694d9393b582d160b4f2f1da2a921dd8fecaab06ddca832ce2ef696e6246d776b0c91b3ba71c100fa0b664e0ce56da64bca64afbf57e54e0e26469ebf30f7b04bdf4d1f88f5168b649aeb0cd60cd02425d95ba4039b3cb83d8521d4e3dda5a48e337a00a605eb396cd6c923b36426d85bed8bdf7014b76c493414eb4b40bbe9d40bac647668b50803511bb4a80876257a550e2c476c650de1737a6179be6a6b9893468c9', '2021-08-09 14:48:27', '::1'),
(15, 2, 'Facebook', '5b137299eff88b848ed4c5c048f1b3dbb877e3a5b7b47809aeef25d9e4954eaab78d316dbc53f0a4dcc8197334ea3d15ddee4df61818cf0bead3e373c75166a18639536eb7b213067345fdb5ebe43d778999718f9a13532aadab30d00214380eecb6b207ca0d40fb05b51bfdcc76cf69c1ea149b77d686b06f6b9324aa389632e23b8b8ebae2026ac7473271baf8995540f9825e790d712a7b8eb83c7faf7aa844ec4ae09cb69372d3ab48804e1ba84c9d5673a8305c3d7dc175e7cbf2106524a641c8ddde8afa2d928d20ec3a87383fc8071f4f17aabacee5bea1541630770593eeb93947cd8d6985d813f06d2bf12d7a93b96a1641592738d688e96a7973f7', '2021-08-09 17:07:51', '::1'),
(16, 2, 'Facebook', '95864752ad8554350a21a6ffeecabd39108e5c889780c4b48cae960decd198f638d95d25c035ac8d734ddd5219148fc317d08c2a55d5679f992220757ea562958ceaca83691f12333ab1d90a380abe23bdce1ede6323df906515e3839b7d79c119d3f5653dbdded042ebf156ee2757d0a4c728f785f636b8b5ed1667a80ab2a39534d0589b9edb6c14b5e33341012b9d378974497eab5ad14e198d2bc57204b77686471c0557537a49cbcf9dbf6f8e9af9f4e0c5773f84a2ed361b5ea38ac8c9c987836e512661b78033dc2351e6155bda4f9bcd3668caaf9b93f922c2424761eaee51c30acd1217e2349757ff053935f4e4ff1789debdca97dcb19f5820fcf4', '2021-08-09 17:20:56', '::1'),
(17, 1, 'Google', '480e972f34c92856c333979ab30b95297adac2c72ea60fa4b74015879727ca6b5afe840cb85ba1fa6bc1ec76459383779cde3f708654e2f82a343cfee6d5e6d1a76d6ca0af57c5890c4b64b1e8393b4f216d1f6c5c310dd5ea79150a5e2e317a74ae0b57b4e39500e9c5d9735a4bbf5a1cfd00130d0966752c0b278e9f676b0f2f4da7d5c948b5abfabb08f5c5733835afae9bbec7bdad0ffcda349024e3ba30b4c0716b6e8413c42554723af65aecce20003f5dc2be0ae42d50f3f47be967724b3369727bf9321d99d13bf8a5b0d0da1db45d9e2c1eb0b0cdd606235091c5f1371b14fc7b826ccde62e05af9f4335b395d286435c84c7eb1431b2f348d0ecce', '2021-08-09 17:37:21', '45.184.108.35'),
(18, 3, 'Facebook', 'e4cb9b626bf2019a2b55e71a0a79fb01150bb5a758a0de61f753467c7306b04a0c6692d112adfe03f4e49b21118ab7be03445c1eeb439a5e24ff676afc1c96fb26a7272652ce6883a36c35c1e9f8b59e763cf47794db5c1e45bbf5e38a90923cb890394dbb0d86dc7a6306f84d6351d964f0c4716ae4e5a8716a3ae2a808e95e4e471bb8de47471054ce7e868ede314a43ae9a56b746793e92fe41be00db1cfa9c538aacd37cd86ef39a148d911154d619e73dc8a3a12ebf8f47560baec26015ac4b43450d47f7d22130d813ce532d915721f54d9ccafe76d92cfa9bc729c13deaa7c1c8b963ea92415d767b95839bc5c7c0a4acc620e2b485cfaceda7ed59c6', '2021-08-09 18:55:51', '177.73.98.74'),
(19, 3, 'Facebook', 'cdbf0c481bdb75640dde00164292af1ef88ca2d3c18a92561a598259daeb0525fc3d5d9055c1f1c05b04f321515e5db2221f93e4d170c2d13760aa774f14a51b975d47623fe59ffee23aff0e158e760ad57350549727891ee41a6a50cb84712b2df210edd710af981c0e4c0887c680eb710e001233f895b218d7893e0047c5f0723b7f24470a6b207c1611d29a5d7dddac50e312b041164752679f92aa25934b2a64c67fef05b5bb268480ca06ef2d214bd1440034116105e774632e8d5e12009836fe728c9d3088771d3a783df5e5e7b85ecaad42cd1f52d8e9182f19331c7ed77cde831c91ab72aa7c7b506ed5546678014035319e21cea995ee74c3027b9b', '2021-08-09 19:09:34', '177.73.98.74'),
(20, 2, 'Facebook', 'a8f954724acedbacb51f189cb9de0dbef6f4f58383ce9612efa70f0209ad27a8f6391485e2c5669a6a87b0b148ee0dbd354075a127b7e186c0f6ce52778e608906302de0d2664b0aef6441b21dd6550d79c68dec589641a24cf84286adfe84b67dfd4c76eaa7f1f065fbeb4cf13b870f960b3c8d92287f3eb03719ae383ac5375d2fac158214ebcbf71bcf8e61c8d1ed82a6817891c65623be4e48016240d1c44bfdd1df593db8ff85169f65383ce50ab0a1002a151a8e08894029d9c171ff7f44e57e2cd94e7e79c11c8d8b099ac138e4f4329273e8daf1b92afaecee6b074a716b1cf2db3cd993cb9bbe6e0214ffe622fa031cb80e152fe8e0674cf1f5548c', '2021-08-09 19:27:19', '45.184.108.35'),
(21, 1, 'Google', 'b959fa8e7087ea715fd0b4a1b118727add6f6ea818326d4741c305281dc3605b2e1d461fd4a7486824323cc6a1ca5e5c685edad298b68cf096008872966a8d8d764b6c7ef5858f1baa4231f4058bdb655ca6b21185071ec418cea6fa8c442ef01be75cc26b030d2ca790de4e341a4108c047a23fde01bd073b543e308ed2cdf4fac4fa944bb8a65e14213702a638768ad2617912815c11bc0c11873a60ecf817c67158850a2101a9ee983569cbb231ccee5b39f964332628e584e6cfddcc7913531537eaaa446b1ed6e242ac580fa8f959640333d532065c930a21264a45d3e7b1abb0ef1132247e627713a0420073130b39ae11ddaccceb52b95c541b6ea914', '2021-08-09 20:41:22', '45.184.108.35'),
(22, 1, 'Google', 'c4bed52135f75408077ab0cb6696eadb00caf63e9514d610929170e6fec6770ed477fee111515bafad77adc7e27fd6fcfc3eeedd42d6e97a8d6193d6ba8b20d47fda6249a7b97ae73877b19ea9c44c4e1fb93c824a4c4a473e9d016f04e605884a61490c49e130b2165d649563bc8be35ea3b710046e89e5e71251f1fa001b0ca00499b18d25b97c2002f02c9ea1a831eac7bdbc6f6cfa8e3e66496f261f2c1922731ea9613c63f5d495af38e87b2454974e5504265565192d9f18cc7ead22cbe30e4dcc28cf67926f05efb3a4dc5280e33cee12fc8fcd1fb13ac2e613509cd654c4397ec5b68ba2c0abe1dcc9323c711ee9ab19b793e7692fe099257390542c', '2021-08-09 20:46:36', '45.184.108.35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agency`
--
ALTER TABLE `agency`
  ADD PRIMARY KEY (`agency_id`);

--
-- Indexes for table `tour_requests`
--
ALTER TABLE `tour_requests`
  ADD PRIMARY KEY (`tour_request_id`);

--
-- Indexes for table `tour_spots`
--
ALTER TABLE `tour_spots`
  ADD PRIMARY KEY (`tour_spot_id`);

--
-- Indexes for table `tour_spots_attractives`
--
ALTER TABLE `tour_spots_attractives`
  ADD PRIMARY KEY (`attractive_id`);

--
-- Indexes for table `tour_spots_content`
--
ALTER TABLE `tour_spots_content`
  ADD PRIMARY KEY (`tour_spot_content_id`);

--
-- Indexes for table `tour_spots_rate`
--
ALTER TABLE `tour_spots_rate`
  ADD PRIMARY KEY (`rate_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_login_token`
--
ALTER TABLE `user_login_token`
  ADD PRIMARY KEY (`user_login_token_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agency`
--
ALTER TABLE `agency`
  MODIFY `agency_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tour_requests`
--
ALTER TABLE `tour_requests`
  MODIFY `tour_request_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tour_spots`
--
ALTER TABLE `tour_spots`
  MODIFY `tour_spot_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `tour_spots_attractives`
--
ALTER TABLE `tour_spots_attractives`
  MODIFY `attractive_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tour_spots_content`
--
ALTER TABLE `tour_spots_content`
  MODIFY `tour_spot_content_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `tour_spots_rate`
--
ALTER TABLE `tour_spots_rate`
  MODIFY `rate_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `user_login_token`
--
ALTER TABLE `user_login_token`
  MODIFY `user_login_token_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
