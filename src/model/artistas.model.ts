import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export interface Artista {
    id: number;
    nombre: string;
    apellido?: string;
    frase: string;
    text: string[];
    imagen: string;
    redes: SocialMedia[];
}

export interface SocialMedia {
    url: string;
    text: string;
    icon: AstroComponentFactory
}