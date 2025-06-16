import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Artista {
    id: number;
    nombre: string;
    apellido?: string;
    frase: string;
    text: string[];
    imagen: string;
    redes: Rede[];
}

interface Rede {
    url: string;
    text: string;
    icon: AstroComponentFactory
}