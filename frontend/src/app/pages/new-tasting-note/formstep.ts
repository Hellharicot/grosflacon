export interface AromaSubFamily {
  subfamily: string;
  aromas: string[];
}

export interface AromaFamily {
  family: string;
  subfamilies?: AromaSubFamily[];
  aromas?: string[];
}

export interface FormStep {
  step: 'identifier' | 'sight' | 'nose' | 'palate' | 'appreciation';
  type: 'input' | 'radio' | 'checkbox' | 'aroma-selector';
  name: string;
  placeholder: string;
  value: string | string[];
  opts?: string[] | AromaFamily[] | number[];
}

const AROMA_CATALOG: AromaFamily[] = [
  {
    family: 'Fruité',
    subfamilies: [
      {
        subfamily: 'fruits rouges',
        aromas: ['framboises', 'cassis', 'fraises', 'mûres'],
      },
      {
        subfamily: 'fruits à pépins',
        aromas: ['pomme', 'poire', 'coing'],
      },
      {
        subfamily: 'fruits à noyau',
        aromas: ['cerises', 'prunes', 'abricots', 'pêches'],
      },
      {
        subfamily: 'agrumes',
        aromas: ['citron', 'pamplemousse', 'orange', 'mandarine'],
      },
      {
        subfamily: 'fruits exotiques',
        aromas: ['ananas', 'mangue', 'fruit de la passion', 'litchi'],
      },
      {
        subfamily: 'fruits secs',
        aromas: [
          'amandes',
          'noisettes',
          'noix',
          'figues',
          'dattes',
          'pruneaux',
        ],
      },
      {
        subfamily: 'fruits confits',
        aromas: ['orange confite', 'citron confit', 'fruits rouges confits'],
      },
    ],
  },

  {
    family: 'Floral',
    aromas: [
      'violette',
      'rose',
      'chèvrefeuille',
      'jasmin',
      "fleur d'oranger",
      'tilleul',
      'acacia',
      'lavande',
    ],
  },
  {
    family: 'Végétal',
    subfamilies: [
      {
        subfamily: 'herbacé',
        aromas: [
          'herbe coupée',
          'menthe',
          'verveine',
          'thym',
          'aneth',
          'fougères',
          'eucalyptus',
        ],
      },
      {
        subfamily: 'végétal sec',
        aromas: [
          'foin',
          'tabac',
          'thé noir',
          'sous-bois',
          'champignon',
          'humus',
        ],
      },
      {
        subfamily: 'légumes',
        aromas: ['poivron vert', 'asperge', 'tomate', 'fenouil'],
      },
      { subfamily: 'bois', aromas: ['cèdre', 'santal', 'chêne', 'pin'] },
    ],
  },
  {
    family: 'Épicé',
    aromas: [
      'vanille',
      'poivre noir',
      'poivre blanc',
      'cannelle',
      'réglisse',
      'noix de muscade',
      'clou de girofle',
      'badiane',
      'curry',
    ],
  },
  { family: 'Confiserie', aromas: ['caramel', 'miel', "pâte d'amandes"] },
  {
    family: 'Toasté',
    aromas: ['goudron', 'fumée', 'café', 'chocolat', 'caramel', 'grillé'],
  },
  {
    family: 'Minéral',
    aromas: ['silex', 'craie', 'schiste', 'pierre à fusil', 'hydrocarbures'],
  },
  { family: 'Animal', aromas: ['cuir', 'musc'] },
  { family: 'Lacté', aromas: ['beurre', 'yaourt'] },
  { family: 'Fermentation', aromas: ['levures', 'pain', 'brioche'] },
];
const IDENTIFIER_STEP: FormStep[] = [
  {
    step: 'identifier',
    type: 'input',
    value: '',
    name: 'country',
    placeholder: 'Pays',
  },
  {
    step: 'identifier',
    type: 'input',
    value: '',
    name: 'region',
    placeholder: 'Région',
  },
  {
    step: 'identifier',
    type: 'input',
    value: '',
    name: 'appellation',
    placeholder: 'Appellation',
  },
  {
    step: 'identifier',
    type: 'input',
    value: '',
    name: 'property',
    placeholder: 'Domaine',
  },
  {
    step: 'identifier',
    type: 'radio',
    value: '',
    name: 'color',
    placeholder: 'Couleur',
    opts: ['blanc', 'rosé', 'rouge'],
  },
  {
    step: 'identifier',
    type: 'input',
    value: '',
    name: 'year',
    placeholder: 'Année',
  },
];
const SIGHT_STEP: FormStep[] = [
  {
    step: 'sight',
    type: 'radio',
    value: '',
    name: 'primary color',
    placeholder: 'Robe',
    opts: [
      'Blanc très pâle',
      'Jaune pâle',
      'Jaune doré',
      'Ambré',
      'Rosé pâle',
      'Saumoné',
      'Rose intense',
      'Rouge violacé',
      'Rouge rubis',
      'Rouge grenat',
      'Tuilé',
      'Brun',
    ],
  },
  {
    step: 'sight',
    type: 'radio',
    value: '',
    name: 'secondary color',
    placeholder: 'Teinte du disque',
    opts: [
      'Argenté',
      'Vert',
      'Cuivré',
      'Tuilé',
      'Brun',
      'Bleuté',
      'Magenta',
      'Ruby',
      'Orange',
      'Grenat',
      'Brun',
    ],
  },

  {
    step: 'sight',
    type: 'radio',
    value: '',
    name: 'rim variation',
    placeholder: 'Longueur du dégradé',
    opts: ['Court', 'Moyen', 'Long'],
  },

  {
    step: 'sight',
    type: 'radio',
    value: '',
    name: 'tearing',
    placeholder: 'Épaisseur des larmes',
    opts: ['Fines', 'Légères', 'Moyennes', 'Épaisses', 'Visqueuses'],
  },

  {
    step: 'sight',
    type: 'radio',
    value: '',
    name: 'staining',
    placeholder: 'Coloration des larmes',
    opts: ['Aucune', 'Légère', 'Moyenne', 'Intense'],
  },
  {
    step: 'sight',
    type: 'radio',
    value: '',
    name: 'sediments',
    placeholder: 'Dépôt',
    opts: ['Non', 'Oui'],
  },

  {
    step: 'sight',
    type: 'radio',
    value: '',
    name: 'gas',
    placeholder: 'Gaz',
    opts: ['Non', 'Oui'],
  },
];
const NOSE_STEP: FormStep[] = [
  {
    step: 'nose',
    type: 'checkbox',
    value: [],
    name: 'faults',
    placeholder: 'Défauts',
    opts: ['Bouchonné', 'Oxydé', 'Réduit', 'Piqué', 'Bretté', 'Autre'],
  },
  {
    step: 'nose',
    type: 'radio',
    value: '',
    name: 'aromatic intensity',
    placeholder: 'Intensité aromatique',
    opts: ['Délicat', 'Légère', 'Modérée', 'Soutenue', 'Prononcée'],
  },
  {
    step: 'nose',
    type: 'aroma-selector',
    value: [],
    name: 'aromas',
    placeholder: 'Bouquet',
    opts: AROMA_CATALOG,
  },
];
const PALATE_STEP: FormStep[] = [
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'sweetness',
    placeholder: 'Sucrosité',
    opts: [
      'Très sec',
      'Sec',
      'Semblant de sucrosité',
      'Demi-sec',
      'Moelleux',
      'Liquoreux',
    ],
  },
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'acidity',
    placeholder: 'Acidité',
    opts: ['Faible', 'Légère', 'Modérée', 'Soutenue', 'Intense'],
  },
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'alcohol',
    placeholder: 'Alcool',
    opts: ['Léger', 'Modéré', 'Généreux', 'Réchauffant', 'Capiteux'],
  },
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'tannin volume',
    placeholder: 'Tanins',
    opts: [
      'Imperceptibles',
      'Subtils',
      'Légers',
      'Présents',
      'Marqués',
      'Denses',
    ],
  },
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'tannin texture',
    placeholder: 'Texture des tanins',
    opts: [
      'Veloutés',
      'Soyeux',
      'Fondus',
      'Poudreux',
      'Accrocheurs',
      'Astringents',
    ],
  },
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'body',
    placeholder: 'Corps',
    opts: ['Fin', 'Rond', 'Crémeux'],
  },
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'bitterness',
    placeholder: 'Amertume',
    opts: ['Aucune', 'Légère', 'Moyenne', 'Prononcée'],
  },
  {
    step: 'palate',
    type: 'aroma-selector',
    value: [],
    name: 'aromas_palate',
    placeholder: 'Arômes en bouche',
    opts: AROMA_CATALOG,
  },
  {
    step: 'palate',
    type: 'radio',
    value: '',
    name: 'finish',
    placeholder: 'Longueur',
    opts: ['Courte', 'Moyenne', 'Longue', 'Persistante'],
  },
];
const APPRECIATION_STEP: FormStep[] = [
  {
    step: 'appreciation',
    type: 'radio',
    value: '',
    name: 'rating',
    placeholder: 'Note',
    opts: [1, 2, 3, 4, 5],
  },
  {
    step: 'appreciation',
    type: 'radio',
    value: '',
    name: 'heart_stroke',
    placeholder: 'Coup de cœur',
    opts: ['Non', 'Oui'],
  },
  {
    step: 'appreciation',
    type: 'input',
    value: '',
    name: 'comment',
    placeholder: 'Commentaires',
  },
];
export const FORM_STEPS: FormStep[] = [
  ...IDENTIFIER_STEP,
  ...SIGHT_STEP,
  ...NOSE_STEP,
  ...PALATE_STEP,
  ...APPRECIATION_STEP,
];
