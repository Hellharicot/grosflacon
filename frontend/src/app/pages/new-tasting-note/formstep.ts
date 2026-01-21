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
  step: 'identifier' | 'sight' | 'nose' | 'structure' | 'palate';
  type: 'input' | 'radio' | 'checkbox' | 'aroma-selector';
  name: string;
  placeholder: string;
  value: string | string[];
  opts?: string[] | AromaFamily[];
}

export const FORM_STEPS: FormStep[] = [
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
  // nose
  {
    step: 'nose',
    type: 'checkbox',
    value: '',
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
    type: 'checkbox',
    value: '',
    name: 'aromas',
    placeholder: 'Bouquet',
    opts: [
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
            aromas: [
              'orange confite',
              'citron confit',
              'fruits rouges confits',
            ],
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
        aromas: [
          'silex',
          'craie',
          'schiste',
          'pierre à fusil',
          'hydrocarbures',
        ],
      },
      { family: 'Animal', aromas: ['cuir', 'musc'] },
      { family: 'Lacté', aromas: ['beurre', 'yaourt'] },
      { family: 'Fermentation', aromas: ['levures', 'pain', 'brioche'] },
    ],
  },
];
