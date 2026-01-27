commit e1e9e3a10182fb5ec7720a4e1e31989310630105
Author: Hellharicot <vf.marchal@gmail.com>
Date:   Wed Jan 21 15:30:47 2026 +0100

    refactor: defines the whole tasting grid and isolates aroma catalog

diff --git a/frontend/src/app/pages/new-tasting-note/formstep.ts b/frontend/src/app/pages/new-tasting-note/formstep.ts
index b14840b..6f3e6b8 100644
--- a/frontend/src/app/pages/new-tasting-note/formstep.ts
+++ b/frontend/src/app/pages/new-tasting-note/formstep.ts
@@ -10,14 +10,130 @@ export interface AromaFamily {
 }
 
 export interface FormStep {
-  step: 'identifier' | 'sight' | 'nose' | 'structure' | 'palate';
+  step: 'identifier' | 'sight' | 'nose' | 'palate' | 'appreciation';
   type: 'input' | 'radio' | 'checkbox' | 'aroma-selector';
   name: string;
   placeholder: string;
   value: string | string[];
-  opts?: string[] | AromaFamily[];
+  opts?: string[] | AromaFamily[] | number[];
 }
 
+const AROMATIC_CATALOG: AromaFamily[] = [
+  {
+    family: 'Fruité',
+    subfamilies: [
+      {
+        subfamily: 'fruits rouges',
+        aromas: ['framboises', 'cassis', 'fraises', 'mûres'],
+      },
+      {
+        subfamily: 'fruits à pépins',
+        aromas: ['pomme', 'poire', 'coing'],
+      },
+      {
+        subfamily: 'fruits à noyau',
+        aromas: ['cerises', 'prunes', 'abricots', 'pêches'],
+      },
+      {
+        subfamily: 'agrumes',
+        aromas: ['citron', 'pamplemousse', 'orange', 'mandarine'],
+      },
+      {
+        subfamily: 'fruits exotiques',
+        aromas: ['ananas', 'mangue', 'fruit de la passion', 'litchi'],
+      },
+      {
+        subfamily: 'fruits secs',
+        aromas: [
+          'amandes',
+          'noisettes',
+          'noix',
+          'figues',
+          'dattes',
+          'pruneaux',
+        ],
+      },
+      {
+        subfamily: 'fruits confits',
+        aromas: ['orange confite', 'citron confit', 'fruits rouges confits'],
+      },
+    ],
+  },
+
+  {
+    family: 'Floral',
+    aromas: [
+      'violette',
+      'rose',
+      'chèvrefeuille',
+      'jasmin',
+      "fleur d'oranger",
+      'tilleul',
+      'acacia',
+      'lavande',
+    ],
+  },
+  {
+    family: 'Végétal',
+    subfamilies: [
+      {
+        subfamily: 'herbacé',
+        aromas: [
+          'herbe coupée',
+          'menthe',
+          'verveine',
+          'thym',
+          'aneth',
+          'fougères',
+          'eucalyptus',
+        ],
+      },
+      {
+        subfamily: 'végétal sec',
+        aromas: [
+          'foin',
+          'tabac',
+          'thé noir',
+          'sous-bois',
+          'champignon',
+          'humus',
+        ],
+      },
+      {
+        subfamily: 'légumes',
+        aromas: ['poivron vert', 'asperge', 'tomate', 'fenouil'],
+      },
+      { subfamily: 'bois', aromas: ['cèdre', 'santal', 'chêne', 'pin'] },
+    ],
+  },
+  {
+    family: 'Épicé',
+    aromas: [
+      'vanille',
+      'poivre noir',
+      'poivre blanc',
+      'cannelle',
+      'réglisse',
+      'noix de muscade',
+      'clou de girofle',
+      'badiane',
+      'curry',
+    ],
+  },
+  { family: 'Confiserie', aromas: ['caramel', 'miel', "pâte d'amandes"] },
+  {
+    family: 'Toasté',
+    aromas: ['goudron', 'fumée', 'café', 'chocolat', 'caramel', 'grillé'],
+  },
+  {
+    family: 'Minéral',
+    aromas: ['silex', 'craie', 'schiste', 'pierre à fusil', 'hydrocarbures'],
+  },
+  { family: 'Animal', aromas: ['cuir', 'musc'] },
+  { family: 'Lacté', aromas: ['beurre', 'yaourt'] },
+  { family: 'Fermentation', aromas: ['levures', 'pain', 'brioche'] },
+];
+
 export const FORM_STEPS: FormStep[] = [
   {
     step: 'identifier',
@@ -62,11 +178,125 @@ export const FORM_STEPS: FormStep[] = [
     name: 'year',
     placeholder: 'Année',
   },
-  // nose
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'clarity',
+    placeholder: 'Limpidité',
+    opts: ['Limpide', 'Voilé', 'Trouble'],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'color intensity',
+    placeholder: 'Intensité de la couleur',
+    opts: [
+      'Translucide',
+      'Pâle',
+      'Légère',
+      'Modérée',
+      'Soutenue',
+      'Profonde',
+      'Opaque',
+    ],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'primary color',
+    placeholder: 'Robe',
+    opts: [
+      'Blanc très pâle',
+      'Jaune pâle',
+      'Jaune doré',
+      'Ambré',
+      'Rosé pâle',
+      'Saumoné',
+      'Rose intense',
+      'Rouge violacé',
+      'Rouge rubis',
+      'Rouge grenat',
+      'Tuilé',
+      'Brun',
+    ],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'secondary color',
+    placeholder: 'Teinte du disque',
+    opts: [
+      'Argenté',
+      'Vert',
+      'Cuivré',
+      'Tuilé',
+      'Brun',
+      'Bleuté',
+      'Magenta',
+      'Ruby',
+      'Orange',
+      'Grenat',
+      'Brun',
+    ],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'rim variation',
+    placeholder: 'Longueur du dégradé',
+    opts: ['Court', 'Moyen', 'Long'],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'tearing',
+    placeholder: 'Épaisseur des larmes',
+    opts: ['Fines', 'Légères', 'Moyennes', 'Épaisses', 'Visqueuses'],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'staining',
+    placeholder: 'Coloration des larmes',
+    opts: ['Aucune', 'Légère', 'Moyenne', 'Intense'],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'sediments',
+    placeholder: 'Dépôt',
+    opts: ['Non', 'Oui'],
+  },
+
+  {
+    step: 'sight',
+    type: 'radio',
+    value: '',
+    name: 'gas',
+    placeholder: 'Gaz',
+    opts: ['Non', 'Oui'],
+  },
+
   {
     step: 'nose',
     type: 'checkbox',
-    value: '',
+    value: [],
     name: 'faults',
     placeholder: 'Défauts',
     opts: ['Bouchonné', 'Oxydé', 'Réduit', 'Piqué', 'Bretté', 'Autre'],
@@ -81,134 +311,126 @@ export const FORM_STEPS: FormStep[] = [
   },
   {
     step: 'nose',
-    type: 'checkbox',
-    value: '',
-    name: 'aromas',
+    type: 'aroma-selector',
+    value: [],
+    name: 'aromas_nose',
     placeholder: 'Bouquet',
+    opts: AROMATIC_CATALOG,
+  },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'sweetness',
+    placeholder: 'Sucrosité',
     opts: [
-      {
-        family: 'Fruité',
-        subfamilies: [
-          {
-            subfamily: 'fruits rouges',
-            aromas: ['framboises', 'cassis', 'fraises', 'mûres'],
-          },
-          {
-            subfamily: 'fruits à pépins',
-            aromas: ['pomme', 'poire', 'coing'],
-          },
-          {
-            subfamily: 'fruits à noyau',
-            aromas: ['cerises', 'prunes', 'abricots', 'pêches'],
-          },
-          {
-            subfamily: 'agrumes',
-            aromas: ['citron', 'pamplemousse', 'orange', 'mandarine'],
-          },
-          {
-            subfamily: 'fruits exotiques',
-            aromas: ['ananas', 'mangue', 'fruit de la passion', 'litchi'],
-          },
-          {
-            subfamily: 'fruits secs',
-            aromas: [
-              'amandes',
-              'noisettes',
-              'noix',
-              'figues',
-              'dattes',
-              'pruneaux',
-            ],
-          },
-          {
-            subfamily: 'fruits confits',
-            aromas: [
-              'orange confite',
-              'citron confit',
-              'fruits rouges confits',
-            ],
-          },
-        ],
-      },
-
-      {
-        family: 'Floral',
-        aromas: [
-          'violette',
-          'rose',
-          'chèvrefeuille',
-          'jasmin',
-          "fleur d'oranger",
-          'tilleul',
-          'acacia',
-          'lavande',
-        ],
-      },
-      {
-        family: 'Végétal',
-        subfamilies: [
-          {
-            subfamily: 'herbacé',
-            aromas: [
-              'herbe coupée',
-              'menthe',
-              'verveine',
-              'thym',
-              'aneth',
-              'fougères',
-              'eucalyptus',
-            ],
-          },
-          {
-            subfamily: 'végétal sec',
-            aromas: [
-              'foin',
-              'tabac',
-              'thé noir',
-              'sous-bois',
-              'champignon',
-              'humus',
-            ],
-          },
-          {
-            subfamily: 'légumes',
-            aromas: ['poivron vert', 'asperge', 'tomate', 'fenouil'],
-          },
-          { subfamily: 'bois', aromas: ['cèdre', 'santal', 'chêne', 'pin'] },
-        ],
-      },
-      {
-        family: 'Épicé',
-        aromas: [
-          'vanille',
-          'poivre noir',
-          'poivre blanc',
-          'cannelle',
-          'réglisse',
-          'noix de muscade',
-          'clou de girofle',
-          'badiane',
-          'curry',
-        ],
-      },
-      { family: 'Confiserie', aromas: ['caramel', 'miel', "pâte d'amandes"] },
-      {
-        family: 'Toasté',
-        aromas: ['goudron', 'fumée', 'café', 'chocolat', 'caramel', 'grillé'],
-      },
-      {
-        family: 'Minéral',
-        aromas: [
-          'silex',
-          'craie',
-          'schiste',
-          'pierre à fusil',
-          'hydrocarbures',
-        ],
-      },
-      { family: 'Animal', aromas: ['cuir', 'musc'] },
-      { family: 'Lacté', aromas: ['beurre', 'yaourt'] },
-      { family: 'Fermentation', aromas: ['levures', 'pain', 'brioche'] },
+      'Très sec',
+      'Sec',
+      'Semblant de sucrosité',
+      'Demi-sec',
+      'Moelleux',
+      'Liquoreux',
     ],
   },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'acidity',
+    placeholder: 'Acidité',
+    opts: ['Faible', 'Légère', 'Modérée', 'Soutenue', 'Intense'],
+  },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'alcohol',
+    placeholder: 'Alcool',
+    opts: ['Léger', 'Modéré', 'Généreux', 'Réchauffant', 'Capiteux'],
+  },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'tannin volume',
+    placeholder: 'Tanins',
+    opts: [
+      'Imperceptibles',
+      'Subtils',
+      'Légers',
+      'Présents',
+      'Marqués',
+      'Denses',
+    ],
+  },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'tannin texture',
+    placeholder: 'Texture des tanins',
+    opts: [
+      'Veloutés',
+      'Soyeux',
+      'Fondus',
+      'Poudreux',
+      'Accrocheurs',
+      'Astringents',
+    ],
+  },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'body',
+    placeholder: 'Corps',
+    opts: ['Fin', 'Rond', 'Crémeux'],
+  },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'bitterness',
+    placeholder: 'Amertume',
+    opts: ['Aucune', 'Légère', 'Moyenne', 'Prononcée'],
+  },
+  {
+    step: 'palate',
+    type: 'aroma-selector',
+    value: [],
+    name: 'aromas_palate',
+    placeholder: 'Arômes en bouche',
+    opts: AROMATIC_CATALOG,
+  },
+  {
+    step: 'palate',
+    type: 'radio',
+    value: '',
+    name: 'finish',
+    placeholder: 'Longueur',
+    opts: ['Courte', 'Moyenne', 'Longue', 'Persistante'],
+  },
+  {
+    step: 'appreciation',
+    type: 'radio',
+    value: '',
+    name: 'rating',
+    placeholder: 'Note',
+    opts: [1, 2, 3, 4, 5],
+  },
+  {
+    step: 'appreciation',
+    type: 'radio',
+    value: '',
+    name: 'heart_stroke',
+    placeholder: 'Coup de cœur',
+    opts: ['Non', 'Oui'],
+  },
+  {
+    step: 'appreciation',
+    type: 'input',
+    value: '',
+    name: 'comment',
+    placeholder: 'Commentaires',
+  },
 ];
