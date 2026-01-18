export interface Situazione {
  slug: string;
  title: string;
}

export interface Area {
  slug: string;
  title: string;
  description: string;
  situazioni: Situazione[];
}

export const aree: Area[] = [
  {
    slug: "rischi-frodi",
    title: "Rischi e frodi",
    description: "Messaggi sospetti, truffe, richieste anomale",
    situazioni: [
      {
        slug: "messaggio-sospetto",
        title: "Ho ricevuto un messaggio o una chiamata sospetta",
      },
      {
        slug: "richiesta-dati-personali",
        title: "Mi hanno chiesto dati personali in modo strano",
      },
      {
        slug: "pagamento-sospetto",
        title: "Mi chiedono un pagamento che non riconosco",
      },
    ],
  },
  {
    slug: "documenti-identita",
    title: "Documenti e identità",
    description: "Carta d'identità, SPID, tessera sanitaria",
    situazioni: [
      {
        slug: "carta-identita-scaduta",
        title: "La mia carta d'identità sta per scadere",
      },
      {
        slug: "spid-attivazione",
        title: "Devo attivare lo SPID",
      },
      {
        slug: "tessera-sanitaria-smarrita",
        title: "Ho smarrito la tessera sanitaria",
      },
    ],
  },
  {
    slug: "lavoro-previdenza",
    title: "Lavoro e previdenza",
    description: "Contratti, contributi, disoccupazione",
    situazioni: [
      {
        slug: "naspi-richiesta",
        title: "Ho perso il lavoro e devo chiedere la NASpI",
      },
      {
        slug: "contributi-verifica",
        title: "Voglio verificare i miei contributi",
      },
    ],
  },
  {
    slug: "casa-residenza",
    title: "Casa e residenza",
    description: "Cambio residenza, utenze, affitto",
    situazioni: [
      {
        slug: "cambio-residenza",
        title: "Devo cambiare residenza",
      },
      {
        slug: "voltura-utenze",
        title: "Devo fare la voltura delle utenze",
      },
    ],
  },
];

export const getAreaBySlug = (slug: string): Area | undefined => {
  return aree.find((area) => area.slug === slug);
};

export const getSituazioneBySlug = (areaSlug: string, guidaSlug: string): Situazione | undefined => {
  const area = getAreaBySlug(areaSlug);
  return area?.situazioni.find((s) => s.slug === guidaSlug);
};
