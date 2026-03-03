INSERT INTO references.input_type(name) VALUES
  ('input'),
  ('radio'),
  ('checkbox'),
  ('aroma_selector'),
  ON CONFLICT (name) DO NOTHING
  ;

INSERT INTO references.category(default_name, default_description) VALUES
  ('sight','visual description of the wine'),
  ('nose','olfactory description of the wine'),
  ('palate', 'gustatory  description of the wine'),
  ('rating', 'overall appreciation of the wine'),
  ON CONFLICT (default_name) DO NOTHING
  ;

\set category_sight `SELECT id FROM references.category WHERE default_name = 'sight'`
\if :category_sight
\else
  \echo "category_sight not found"
  quit 1
\endif

\set category_nose `SELECT id FROM references.category WHERE default_name = 'nose'`
\if :category_nose 
\else
  \echo "category_nose not found"
  quit 1
\endif

\set category_palate `SELECT id FROM references.category WHERE default_name = 'palate'`
\if :category_palate
\else
  \echo "category_palate not found"
  quit 1
\endif

\set category_rating `SELECT id FROM references.category WHERE default_name = 'rating'`
\if :category_rating
\else
  \echo "category_rating not found"
  quit 1
\endif

\set input_input `SELECT id FROM references.input_type WHERE name = 'input'`
\if :input_input
\else
  \echo "input_input not found"
  quit 1
\endif

\set input_radio `SELECT id FROM references.input_type WHERE name = 'radio'`
\if :input_radio
\else
  \echo "input_radio not found"
  quit 1
\endif

\set input_checkbox `SELECT id FROM references.input_type WHERE name = 'checkbox'`
\if :input_checkbox
\else
  \echo "input_checkbox not found"
  quit 1
\endif

\set input_aroma_selector `SELECT id FROM references.input_type WHERE name = 'aroma_selector'`
\if :input_aroma_selector 
\else
  \echo "input_aroma_selector not found"
  quit 1
\endif

INSERT INTO references.criterion(category_id, input_type_id, default_name, default_description) VALUES
-- VISUAL CRITERIONS
  (:category_sight, :input_radio, 'clarity', 'clarity of the wine'),
  (:category_sight, :input_radio, 'concentration', 'concentration of color in the wine'),
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
  (:category_palate, :input_aroma_selector, 'aromas', 'noticeable aromas in the wine within the mouth'),
  (:category_palate, :input_radio, 'finish', 'how long the wine lasts in the mouth'),
  -- RATING CRITERIONS
  (:category_rating, :input_radio, 'score', 'how much do you appreciate the wine'),
  (:category_rating, :input_radio, 'heart stroke', 'whether you have a crush on the wine'),
  (:category_rating, :input_input, 'comment', 'your comment about the wine'),
  ON CONFLICT (default_name) DO NOTHING
;

\set :clarity `SELECT id FROM references.criterion WHERE default_name = 'clarity'`
\if :clarity
\else
  \echo "clarity not found"
  quit 1
\endif

\set :concentration `SELECT id FROM references.criterion WHERE default_name = 'concentration'`
\if :concentration
\else
  \echo "concentration not found"
  quit 1
\endif

\set :primary_color `SELECT id FROM references.criterion WHERE default_name = 'primary color'`
\if :primary_color
\else
  \echo "primary_color not found"
  quit 1
\endif

\set :secondary_color `SELECT id FROM references.criterion WHERE default_name = 'secondary color'`
\if :secondary_color
\else
  \echo "secondary_color not found"
  quit 1
\endif

\set :rim_variation `SELECT id FROM references.criterion WHERE default_name = 'rim variation'`
\if :rim_variation
\else
  \echo "rim_variation not found"
  quit 1
\endif

\set :tearing `SELECT id FROM references.criterion WHERE default_name = 'tearing'`
\if :tearing
\else
  \echo "tearing not found"
  quit 1
\endif

\set :staining `SELECT id FROM references.criterion WHERE default_name = 'staining'`
\if :staining
\else
  \echo "staining not found"
  quit 1
\endif

\set :sediments `SELECT id FROM references.criterion WHERE default_name = 'sediments'`
\if :sediments
\else
  \echo "sediments not found"
  quit 1
\endif

\set :gas `SELECT id FROM references.criterion WHERE default_name = 'gas'`
\if :gas
\else
  \echo "gas not found"
  quit 1
\endif

\set :faults `SELECT id FROM references.criterion WHERE default_name = 'faults'`
\if :faults
\else
  \echo "faults not found"
  quit 1
\endif

\set :intensity `SELECT id FROM references.criterion WHERE default_name = 'intensity'`
\if :intensity
\else
  \echo "intensity not found"
  quit 1
\endif

\set :sweetness `SELECT id FROM references.criterion WHERE default_name = 'sweetness'`
\if :sweetness
\else
  \echo "sweetness not found"
  quit 1
\endif

\set :acidity `SELECT id FROM references.criterion WHERE default_name = 'acidity'`
\if :acidity
\else
  \echo "acidity not found"
  quit 1
\endif

\set :alcohol `SELECT id FROM references.criterion WHERE default_name = 'alcohol'`
\if :alcohol
\else
  \echo "alcohol not found"
  quit 1
\endif

\set :tannins_volume `SELECT id FROM references.criterion WHERE default_name = 'tannins volume'`
\if :tannins_volume
\else
  \echo "tannins_volume not found"
  quit 1
\endif

\set :tannins_texture `SELECT id FROM references.criterion WHERE default_name = 'tannins_texture'`
\if :tannins_texture
\else
  \echo "tannins_texture not found"
  quit 1
\endif

\set :body `SELECT id FROM references.criterion WHERE default_name = 'body'`
\if :body
\else
  \echo "body not found"
  quit 1
\endif

\set :bitterness `SELECT id FROM references.criterion WHERE default_name = 'bitterness'`
\if :bitterness
\else
  \echo "bitterness not found"
  quit 1
\endif

\set :finish `SELECT id FROM references.criterion WHERE default_name = 'finish'`
\if :finish
\else
  \echo "finish not found"
  quit 1
\endif

\set :score `SELECT id FROM references.criterion WHERE default_name = 'score'`
\if :score
\else
  \echo "score not found"
  quit 1
\endif

\set :heart_stroke `SELECT id FROM references.criterion WHERE default_name = 'heart stroke'`
\if :heart_stroke
\else
  \echo "heart_stroke not found"
  quit 1
\endif

INSERT INTO references.criterion_value(criterion_id, value, default_label) VALUES
  (:clarity,1,'clear'),
  (:clarity,2,'hazy'),
  (:clarity,3,'cloudy'),
  (:concentration,1,'translucent'),
  (:concentration,2,'pale'),
  (:concentration,3,'medium minus'),
  (:concentration,4,'medium'),
  (:concentration,5,'medium plus'),
  (:concentration,6,'deep'),
  (:concentration,7,'opaque'),
  (:primary_color,1,'water'),
  (:primary_color,2,'straw'),
  (:primary_color,3,'yellow'),
  (:primary_color,4,'gold'),
  (:primary_color,5,'purple'),
  (:primary_color,6,'ruby'),
  (:primary_color,7,'garnet'),
  (:secondary_color,1,'silver'),
  (:secondary_color,2,'green'),
  (:secondary_color,3,'gold'),
  (:secondary_color,4,'copper'),
  (:secondary_color,5,'brown'),
  (:secondary_color,6,'garnet'),
  (:secondary_color,7,'orange'),
  (:secondary_color,8,'ruby'),
  (:secondary_color,9,'magenta'),
  (:secondary_color,10,'blue'),
  (:rim_variation,1,'yes'),
  (:rim_variation,2,'no'),
  (:tearing,1,'light'),
  (:tearing,2,'medium minus'),
  (:tearing,3,'medium'),
  (:tearing,4,'medium plus'),
  (:tearing,5,'heavy'),
  (:staining,1,'none'),
  (:staining,2,'light'),
  (:staining,3,'medium minus'),
  (:staining,4,'medium'),
  (:staining,5,'medium plus'),
  (:staining,6,'heavy'),
  (:gas,1,'yes'),
  (:gas,2,'no'),
  (:sediments,1,'yes'),
  (:sediments,2,'no'),
  (:faults,1,'cork taint'),
  (:faults,2,'reduction'),
  (:faults,3,'oxydation'),
  (:faults,4,'brettanomyces'),
  (:faults,5,'volatile acidity'),
  (:faults,6,'sulfur excess'),
  (:intensity,1,'delicate'),
  (:intensity,2,'medium minus'),
  (:intensity,3,'medium'),
  (:intensity,4,'medium plus'),
  (:intensity,5,'powerful'),
  (:sweetness,1,'bone dry'),
  (:sweetness,2,'dry'),
  (:sweetness,3,'off-dry'),
  (:sweetness,4,'medium-sweet'),
  (:sweetness,5,'sweet'),
  (:sweetness,6,'lusciously sweet'),
  (:acidity,1,'low'),
  (:acidity,2,'medium minus'),
  (:acidity,3,'medium'),
  (:acidity,4,'medium plus'),
  (:acidity,5,'high'),
  (:alcohol,1,'low'),
  (:alcohol,2,'medium minus'),
  (:alcohol,3,'medium'),
  (:alcohol,4,'medium plus'),
  (:alcohol,5,'high'),
  (:body,1,'light'),
  (:body,2,'medium minus'),
  (:body,3,'medium'),
  (:body,4,'medium plus'),
  (:body,5,'full'),
  (:bitterness,1,'yes'),
  (:bitterness,2,'no'),
  (:tannins_volume,1,'low'),
  (:tannins_volume,2,'medium minus'),
  (:tannins_volume,3,'medium'),
  (:tannins_volume,4,'medium plus'),
  (:tannins_volume,5,'high'),
  (:tannins_texture,1,'silky'),
  (:tannins_texture,2,'soft'),
  (:tannins_texture,3,'gritty'),
  (:tannins_texture,4,'coarse'),
  (:tannins_texture,5,'rough'),
  (:tannins_texture,6,'stalky'),
  (:tannins_texture,7,'hard'),
  (:finish,1,'short'),
  (:finish,2,'medium minus'),
  (:finish,3,'medium'),
  (:finish,4,'medium plus'),
  (:finish,5,'long'),
  (:score,1,'1'),
  (:score,2,'2'),
  (:score,3,'3'),
  (:score,4,'4'),
  (:score,5,'5'),
  (:heart_stroke,1,'yes'),
  (:heart_stroke,2,'no'),
  ON CONFLICT (default_label) DO NOTHING
  ;

