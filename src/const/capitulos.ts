import Fb from "../assets/Fb.astro";
import Insta from "../assets/Insta.astro";
import Sopify from "../assets/Sopify.astro";
import Tiktok from "../assets/Tiktok.astro";
import type { Artista } from "../model/artistas.model";
import type { Capitulo } from "../model/capitulo.model";

export const capitulos: Capitulo[] = [
    {
        cap: 1,
        sinopsis: "En este capítulo, exploraremos los colores que nos definen y cómo estos influyen en nuestra identidad. A través de imágenes y reflexiones, descubriremos la paleta única que cada uno de nosotros lleva dentro.",
        video: "SlZ8xeEBJms",
        image: "https://res.cloudinary.com/deghyfe80/image/upload/v1750093986/andr%C3%A9-2_itd1zq.webp",
        titulo: "colores del origen",
        slug: "colores-del-origen",
        color: "blue"
    },
    {
        cap: 2,
        sinopsis: "En este capítulo, nos adentraremos en el mundo de las imágenes que nos rodean. Veremos cómo estas imágenes no solo capturan momentos, sino que también cuentan historias y reflejan nuestra realidad.",
        video: "SlZ8xeEBJms",
        image: "https://res.cloudinary.com/deghyfe80/image/upload/v1750093987/Bianca-3_uyw1ra.webp",
        titulo: "sonidos de identidad",
        slug: "sonidos-de-identidad",
        color: "yellow"
    },
    {
        cap: 3,
        sinopsis: "En este capítulo, exploraremos el poder de las palabras y cómo estas pueden habitar en nosotros. Veremos cómo las palabras pueden ser herramientas de transformación y expresión personal.",
        video: "SlZ8xeEBJms",
        image: "https://res.cloudinary.com/deghyfe80/image/upload/v1749850403/kenji_1_pprlnj.webp",
        titulo: "cuerpos en escena",
        slug: "cuerpos-en-escena",
        color: "gray"
    },
    {
        cap: 4,
        sinopsis: "En este capítulo, nos enfocaremos en el ADN creativo que todos llevamos dentro. Veremos cómo nuestras experiencias y pasiones se entrelazan para formar nuestra esencia creativa.",
        video: "SlZ8xeEBJms",
        image: "https://res.cloudinary.com/deghyfe80/image/upload/v1750094517/David-1_dfkrrv.webp",
        titulo: "palabras que habitan",
        slug: "palabras-que-habitan",
        color: "red"
    },
    {
        cap: 5,
        sinopsis: "En este capítulo, reflexionaremos sobre el viaje de autodescubrimiento que hemos emprendido. Veremos cómo cada uno de nosotros es un lienzo en blanco, listo para ser pintado con nuestras experiencias y aprendizajes.",
        video: "SlZ8xeEBJms",
        image: "https://res.cloudinary.com/deghyfe80/image/upload/v1750093987/Anny-3_mymqni.webp",
        titulo: "adn creativo",
        slug: "adn-creativo",
        color: "green"
    }
    ]

export const artistas: Artista[] = [
    {
        id: 1,
        nombre: "André Sebastián",
        frase: "El arte como impulso, el error como lenguaje.",
        text: [
            "André Sebastián es un artista visual y tatuador trujillano que convierte el proceso creativo en una forma de vida. Su obra transita entre el papel, el mural y la piel, explorando emociones profundas con trazos espontáneos y colores cargados de sentido.",
            "Libre, honesto y autogestionado, André no busca la perfección, sino la verdad que habita en el error y en lo inacabado. Sus retratos no adornan: revelan. Reflejan soledad, cansancio, deseo de pertenecer. Pintar, para él, no es decorar, es resistir.",
            "Cree en el arte como vínculo directo con el otro. Por eso crea en la calle, en su taller, en la piel de quien se atreve a llevar su trazo. En cada obra hay una pregunta, una emoción sin nombre. Porque en su universo, el arte no se explica: se siente."
        ],
        imagen: "https://res.cloudinary.com/deghyfe80/image/upload/v1750093986/andr%C3%A9-2_itd1zq.webp",
        redes: [
            {
                icon: Insta,
                url: "https://www.instagram.com/drebastian?utm_source=ig_web_button_share_sheet",
                text: "@drebastian"
            },
            {
                icon: Fb,
                url: "https://www.facebook.com/ElocoArt/about",
                text: "ElocoArt"
            }
        ]
    },
    {
        id: 2,
        nombre: "Francisco",
        apellido: "Castillo Rojas",
        frase: "Figuras humanas que hablan sin palabras",
        text: [
            "Desde Trujillo, Castillo Rojas expone en sus lienzos rostros y cuerpos perturbadores: deformados, ambiguos, expuestos desde ángulos insólitos. Su práctica, tanto en murales como en galerías locales, busca remover la comodidad del espectador y evocar emociones intensas.",
            "Formado en la Escuela Superior de Bellas Artes “Gustavo Jiménez” de Trujillo, ha participado activamente en muestras colectivas y subastas solidarias, donde su presencia nunca pasa desapercibida . Entre sus exposiciones destaca la colectiva “Deliciosa Prohibición” en la galería Impromptu y encuentros organizados por la Dirección de Cultura.",
            "En su obra, la figura humana no es realismo decorativo, sino vehículo de tensión y reflexión. Las distorsiones —rostros fragmentados, cuerpos que se contorsionan— convierten a lo familiar en inquietante, y a lo cotidiano, en un espejo emocional."
        ],
        imagen:"https://res.cloudinary.com/deghyfe80/image/upload/v1750093407/2_t7xtbd.webp",
        redes: [
            {
                icon: Insta,
                url: "https://www.instagram.com/franciscoe9?utm_source=ig_web_button_share_sheet",
                text: "@franciscoe9"
            },
            {
                icon: Fb,
                url: "https://www.facebook.com/francisco.castillorojas",
                text: "Francisco Castillo Rojas"
            }
        ]
    },
    {
        id: 3,
        nombre: "Anny Lucía",
        apellido: "Novoa Llanos",
        frase: "Voz que sana, presencia que inspira",
        text: [
            "Anny Lucía Novoa Llanos es una mezzosoprano y psicoterapeuta Gestalt originaria de Trujillo, Perú. Estudió Psicología en la Universidad César Vallejo y se especializó en terapia Gestalt, shiatsu clínico e hipnosis con programación neurolingüística.",
            "Su pasión por el canto nació en la infancia: comenzó con coro coral a los 9 años y continuó perfeccionándose hasta la solidez lírica. Participó en coros universitarios, el prestigioso coro Schola Cantorum de Trujillo y, desde 2008, estudia canto lírico con la reconocida maestra Antonieta Cueva.",
            "Además, Anny integra lo artístico con lo emocional impartiendo cursos de “Puesta en Escena y Psicología Integrada”, donde combina técnica vocal con autoconocimiento, ayudando a otros artistas a expresarse con seguridad y autenticidad. "
        ],
        imagen: "https://res.cloudinary.com/deghyfe80/image/upload/v1750093987/Anny-3_mymqni.webp",
        redes:[
            {
                icon: Insta,
                url: "https://www.instagram.com/anny.novoa?utm_source=ig_web_button_share_sheet",
                text: "@anny.novoa"
            },
            {
                icon: Fb,
                url: "https://www.facebook.com/anny.llanos",
                text: "Anny Llanos"
            },
            {
                icon: Insta,
                url: "https://www.instagram.com/sonettoescuela?utm_source=ig_web_button_share_sheet",
                text: "@sonettoescuela"
            }
        ]
    },
    {
        id: 4,
        nombre: "Bianca",
        apellido: "Casanova",
        frase: "Pop-rock trujillano con actitud y mucho corazón",
        text: [
            "Bianca Casanova lidera su propia agrupación de pop-rock indie, en la que es voz y guitarrista rítmica. Junto a André Alfaro (bajo), Joaquín Aguilar (guitarra principal), Marcelo Méndez (batería) y Carlos Von (teclado), la banda acaba de estrenar su primer sencillo “Ceguera EMOcional”, adelanto de un EP próximo.",
            "En su debut en vivo, la agrupación presentó la canción en el Complejo Arqueológico El Brujo, comenzando a hacerse un nombre en la escena local."
        ],
        imagen: "https://res.cloudinary.com/deghyfe80/image/upload/v1750093987/Bianca-3_uyw1ra.webp",
        redes: [
            {
                icon: Insta,
                url: "https://www.instagram.com/biancacasanueva?utm_source=ig_web_button_share_sheet",
                text: "@biancacasanueva"
            },
            {
                icon: Tiktok,
                url: "https://www.tiktok.com/@biancacasanueva",
                text: "@biancacasanueva"
            },
            {
                icon: Insta,
                url: "https://www.instagram.com/biancaesunabanda?utm_source=ig_web_button_share_sheet",
                text: "@biancaesunabanda",
            },
            {
                icon: Sopify,
                url: "https://open.spotify.com/intl-es/album/5VLfB68rfhSBX6bTfJwcNZ?si=ygn98Rn2S9eHxg94Pl-GfQ",
                text: "Bianca es una banda"
            }
        ]
    }
]