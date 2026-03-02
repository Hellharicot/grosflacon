INSERT INTO references.input_type(name) VALUES
  ('input'),
  ('radio'),
  ('checkbox'),
  ('aroma_selector')
;

INSERT INTO references.category(default_name, default_description) VALUES
  ('sight','visual description of the wine'),
  ('nose','olfactory description of the wine'),
  ('palate', 'gustatory  description of the wine'),
  ('rating', 'overall appreciation of the wine')
;

\set category_sight (SELECT id FROM references.category WHERE default_name = 'sight')
\if :category_sight
\else
  \echo "category_sight not found"
  \quit
\endif

\set category_nose (SELECT id FROM references.category WHERE default_name = 'nose')
\if :category_nose 
\else
  \echo "category_nose not found"
  \quit
\endif

\set category_palate (SELECT id FROM references.category WHERE default_name = 'palate')
\if :category_palate
\else
  \echo "category_palate not found"
  \quit
\endif

\set category_rating (SELECT id FROM references.category WHERE default_name = 'rating')
\if :category_rating
\else
  \echo "category_rating not found"
  \quit
\endif

\set input_input (SELECT id FROM references.input_type WHERE name = 'input')
\if :input_input
\else
  \echo "input_input not found"
  \quit
\endif

\set input_radio (SELECT id FROM references.input_type WHERE name = 'radio')
\if :input_radio
\else
  \echo "input_radio not found"
  \quit
\endif

\set input_checkbox (SELECT id FROM references.input_type WHERE name = 'checkbox')
\if :category_sight
\else
  \echo "input_checkbox not found"
  \quit
\endif

\set input_aroma_selector (SELECT id FROM references.input_type WHERE name = 'aroma_selector')
\if :input_aroma_selector 
\else
  \echo "input_aroma_selector not found"
  \quit
\endif

INSERT INTO references.criterion(category_id, input_type_id, default_name, default_description) VALUES
-- VISUAL CRITERIONS
(:category_sight, :input_radio, 'primary color', 'color that you perceive when looking at the heart of the wine'),
(:category_sight, :input_radio, 'secondary color', 'color that you perceive when looking at the edges of the wine'),
(:category_sight, :input_radio, 'rim variation', 'length of color gradient for center to edges of the wine'),
(:category_sight, :input_radio, 'tearing', 'thickness of the tears of the wine'),
(:category_sight, :input_radio, 'staining', 'color of the tears of the wine'),
(:category_sight, :input_radio, 'sediments', 'amount of sediments at the bottom of the wine'),
(:category_sight, :input_radio, 'gas', 'amount of gas bubbles in the wine'),
-- OLFACTORY CRITERIONS
(:category_nose, :input_checkbox, 'faults', 'noticeable faults in the wine if any'),
(:category_nose, :input_radio, 'intensity', 'intensity of the aromas'),
(:category_nose, :input_aroma_selector, 'aromas', 'noticeable aromas in the wine'),
-- GUSTATORY CRITERIONS
(:category_palate, :input_radio, 'sweetness', 'how sweet the wine tastes'),
(:category_palate, :input_radio, 'acidity', 'how acidic of the wine tastes'),
(:category_palate, :input_radio, 'alcohol', 'how rich in alcohol the wine tastes'),
(:category_palate, :input_radio, 'tannins volume', 'how present the tannins are in the wine'),
(:category_palate, :input_radio, 'tannins texture', 'how the tannins feel on the touch of the tongue and lips'),
(:category_palate, :input_radio, 'body', 'how rich the wine tastes'),
(:category_palate, :input_radio, 'bitterness', 'how bitter the wine tastes'),
(:category_nose, :input_aroma_selector, 'aromas', 'noticeable aromas in the wine within the mouth'),
(:category_palate, :input_radio, 'finish', 'how long the wine lasts in the mouth'),
-- RATING CRITERIONS
(:category_rating, :input_radio, 'score', 'how much do you appreciate the wine'),
(:category_rating, :input_radio, 'heart_stroke', 'whether you have a crush on the wine'),
(:category_rating, :input_input, 'comment', 'your comment about the wine')
;
