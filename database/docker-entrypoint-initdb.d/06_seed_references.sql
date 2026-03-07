INSERT INTO refs.input_type(name) VALUES
  ('input'),
  ('radio'),
  ('checkbox'),
  ('aroma_selector')
  ON CONFLICT (name) DO NOTHING
  ;

INSERT INTO refs.category(default_name, default_description) VALUES
  ('sight','visual description of the wine'),
  ('nose','olfactory description of the wine'),
  ('palate', 'gustatory  description of the wine'),
  ('rating', 'overall appreciation of the wine')
  ON CONFLICT (default_name) DO NOTHING
  ;

\set :category_sight `SELECT id FROM refs.category WHERE default_name = 'sight'`
\if :category_sight
\else
  \echo "category_sight not found"
  quit 1
\endif

\set :category_nose `SELECT id FROM refs.category WHERE default_name = 'nose'`
\if :category_nose 
\else
  \echo "category_nose not found"
  quit 1
\endif

\set :category_palate `SELECT id FROM refs.category WHERE default_name = 'palate'`
\if :category_palate
\else
  \echo "category_palate not found"
  quit 1
\endif

\set :category_rating `SELECT id FROM refs.category WHERE default_name = 'rating'`
\if :category_rating
\else
  \echo "category_rating not found"
  quit 1
\endif

\set input_input `SELECT id FROM refs.input_type WHERE name = 'input'`
\if :input_input
\else
  \echo "input_input not found"
  quit 1
\endif

\set input_radio `SELECT id FROM refs.input_type WHERE name = 'radio'`
\if :input_radio
\else
  \echo "input_radio not found"
  quit 1
\endif

\set input_checkbox `SELECT id FROM refs.input_type WHERE name = 'checkbox'`
\if :input_checkbox
\else
  \echo "input_checkbox not found"
  quit 1
\endif

\set input_aroma_selector `SELECT id FROM refs.input_type WHERE name = 'aroma_selector'`
\if :input_aroma_selector 
\else
  \echo "input_aroma_selector not found"
  quit 1
\endif

INSERT INTO refs.criterion(category_id, input_type_id, default_name, default_description) VALUES
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
  (:category_rating, :input_input, 'comment', 'your comment about the wine')
  ON CONFLICT (default_name) DO NOTHING
;

\set :clarity `SELECT id FROM refs.criterion WHERE default_name = 'clarity'`
\if :clarity
\else
  \echo "clarity not found"
  quit 1
\endif

\set :concentration `SELECT id FROM refs.criterion WHERE default_name = 'concentration'`
\if :concentration
\else
  \echo "concentration not found"
  quit 1
\endif

\set :primary_color `SELECT id FROM refs.criterion WHERE default_name = 'primary color'`
\if :primary_color
\else
  \echo "primary_color not found"
  quit 1
\endif

\set :secondary_color `SELECT id FROM refs.criterion WHERE default_name = 'secondary color'`
\if :secondary_color
\else
  \echo "secondary_color not found"
  quit 1
\endif

\set :rim_variation `SELECT id FROM refs.criterion WHERE default_name = 'rim variation'`
\if :rim_variation
\else
  \echo "rim_variation not found"
  quit 1
\endif

\set :tearing `SELECT id FROM refs.criterion WHERE default_name = 'tearing'`
\if :tearing
\else
  \echo "tearing not found"
  quit 1
\endif

\set :staining `SELECT id FROM refs.criterion WHERE default_name = 'staining'`
\if :staining
\else
  \echo "staining not found"
  quit 1
\endif

\set :sediments `SELECT id FROM refs.criterion WHERE default_name = 'sediments'`
\if :sediments
\else
  \echo "sediments not found"
  quit 1
\endif

\set :gas `SELECT id FROM refs.criterion WHERE default_name = 'gas'`
\if :gas
\else
  \echo "gas not found"
  quit 1
\endif

\set :faults `SELECT id FROM refs.criterion WHERE default_name = 'faults'`
\if :faults
\else
  \echo "faults not found"
  quit 1
\endif

\set :intensity `SELECT id FROM refs.criterion WHERE default_name = 'intensity'`
\if :intensity
\else
  \echo "intensity not found"
  quit 1
\endif

\set :sweetness `SELECT id FROM refs.criterion WHERE default_name = 'sweetness'`
\if :sweetness
\else
  \echo "sweetness not found"
  quit 1
\endif

\set :acidity `SELECT id FROM refs.criterion WHERE default_name = 'acidity'`
\if :acidity
\else
  \echo "acidity not found"
  quit 1
\endif

\set :alcohol `SELECT id FROM refs.criterion WHERE default_name = 'alcohol'`
\if :alcohol
\else
  \echo "alcohol not found"
  quit 1
\endif

\set :tannins_volume `SELECT id FROM refs.criterion WHERE default_name = 'tannins volume'`
\if :tannins_volume
\else
  \echo "tannins_volume not found"
  quit 1
\endif

\set :tannins_texture `SELECT id FROM refs.criterion WHERE default_name = 'tannins_texture'`
\if :tannins_texture
\else
  \echo "tannins_texture not found"
  quit 1
\endif

\set :body `SELECT id FROM refs.criterion WHERE default_name = 'body'`
\if :body
\else
  \echo "body not found"
  quit 1
\endif

\set :bitterness `SELECT id FROM refs.criterion WHERE default_name = 'bitterness'`
\if :bitterness
\else
  \echo "bitterness not found"
  quit 1
\endif

\set :finish `SELECT id FROM refs.criterion WHERE default_name = 'finish'`
\if :finish
\else
  \echo "finish not found"
  quit 1
\endif

\set :score `SELECT id FROM refs.criterion WHERE default_name = 'score'`
\if :score
\else
  \echo "score not found"
  quit 1
\endif

\set :heart_stroke `SELECT id FROM refs.criterion WHERE default_name = 'heart stroke'`
\if :heart_stroke
\else
  \echo "heart_stroke not found"
  quit 1
\endif

INSERT INTO refs.criterion_value(criterion_id, value, default_label) VALUES
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
  (:heart_stroke,2,'no')
  ON CONFLICT (default_label) DO NOTHING
  ;

INSERT INTO refs.aroma_family(default_name) VALUES
  ('fruity aromas'),
  ('floral aromas'),
	('vegetal aromas'),
	('spicy aromas'),
	('candy aromas'),
	('toasty aromas'),
	('mineral aromas'),
	('animal aromas'),
	('milky aromas'),
	('yeasty aromas')
	ON CONFLICT (default_name) DO NOTHING
;

\set :fruity_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'fruity aromas'`
\if :fruity_aromas 
\else
	\echo "fruity_aromas not found"
	quit 1
\endif

\set :floral_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'floral aromas'`
\if :floral_aromas
\else
	\echo "floral_aromas not found" 
	quit 1
\endif

\set :vegetal_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'vegetal aromas'`
\if :vegetal_aromas
\else
	\echo "vegetal_aromas not found" 
	quit 1
\endif

\set :spicy_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'spicy aromas'`
\if :spicy_aromas
\else
	\echo "spicy_aromas not found" 
	quit 1
\endif

\set :candy_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'candy aromas'`
\if :candy_aromas
\else
	\echo "candy_aromas not found" 
	quit 1
\endif

\set :toasty_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'toasty aromas'`
\if :toasty_aromas
\else
	\echo "toasty_aromas not found" 
	quit 1
\endif

\set :mineral_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'mineral aromas'`
\if :mineral_aromas
\else
	\echo "mineral_aromas not found" 
	quit 1
\endif

\set :animal_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'animal aromas'`
\if :animal_aromas
\else
	\echo "animal_aromas not found" 
	quit 1
\endif

\set :milky_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'milky aromas'`
\if :milky_aromas
\else
	\echo "milky_aromas not found" 
	quit 1
\endif

\set :yeasty_aromas `SELECT id FROM refs.aroma_family WHERE default_name = 'yeasty aromas'`
\if :yeasty_aromas
\else
	\echo "yeasty_aromas not found" 
	quit 1
\endif

INSERT INTO refs.aroma_subfamily(aroma_family_id,default_name) VALUES
	(:fruity_aromas,'red fruits'),
	(:fruity_aromas,'pip fruits'),
	(:fruity_aromas,'stone fruits'),
	(:fruity_aromas,'citrus fruits'),
	(:fruity_aromas,'tropical fruits'),
	(:fruity_aromas,'dried fruits'),
	(:fruity_aromas,'jammy fruits'),
	(:vegetal_aromas,'herbs'),
	(:vegetal_aromas,'woods'),
	(:vegetal_aromas,'vegetables'),
	(:vegetal_aromas,'other plants'),
  (:fruity_aromas,'fruity aromas'),
  (:floral_aromas,'floral aromas'),
	(:vegetal_aromas,'vegetal aromas'),
	(:spicy_aromas,'spicy aromas'),
	(:candy_aromas,'candy aromas'),
	(:toasty_aromas,'toasty aromas'),
	(:mineral_aromas,'mineral aromas'),
	(:animal_aromas,'animal aromas'),
	(:milky_aromas,'milky aromas'),
	(:yeasty_aromas,'yeasty aromas')
	ON CONFLICT (default_name) DO NOTHING
;

\set :red_fruits `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'red fruits'`
\if :red_fruits 
\else
	\echo "red_fruits not found"
	quit 1
\endif

\set :pip_fruits `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'pip fruits'`
\if :pip_fruits
\else
	\echo "pip_fruits not found"
	quit 1
\endif

\set :stone_fruits `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'stone fruits'` 
\if :stone_fruits
\else
	\echo "stone_fruits not found"
	quit 1
\endif

\set :citrus_fruits `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'citrus fruits'`
\if :citrus_fruits
\else
	\echo "citrus_fruits not found"
	quit 1
\endif

\set :tropical_fruits `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'tropical fruit'`s
\if :tropical_fruits
\else
	\echo "tropical_fruits not found"
	quit 1
\endif

\set :dried_fruits `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'dried fruit'`s
\if :dried_fruits
\else
	\echo "dried_fruits not found"
	quit 1
\endif

\set :jammy_fruits `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'jammy fruits'`s
\if :jammy_fruits
\else
	\echo "jammy_fruits not found"
	quit 1
\endif

\set :herbs `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'herbs'`
\if :herbs
\else
	\echo "herbs not found"
	quit 1
\endif

\set :woods `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'woods'`
\if :woods
\else
	\echo "woods not found"
	quit 1
\endif

\set :vegetables `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'vegetables'`
\if :vegetables
\else
	\echo "vegetables not found"
	quit 1
\endif

\set :other_plants `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'other plants'`
\if :other_plants
\else
	\echo "other_plants not found"
	quit 1
\endif

\set :sub_fruity_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'fruity aromas'`
\if :fruity_aromas 
\else
	\echo "sub_fruity_aromas not found"
	quit 1
\endif

\set :sub_floral_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'floral aromas'`
\if :floral_aromas 
\else
	\echo "sub_floral_aromas not found"
	quit 1
\endif

\set :sub_vegetal_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'vegetal aromas'`
\if :vegetal_aromas 
\else
	\echo "sub_vegetal_aromas not found"
	quit 1
\endif

\set :sub_spicy_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'spicy aromas'`
\if :spicy_aromas 
\else
	\echo "sub_spicy_aromas not found"
	quit 1
\endif

\set :sub_candy_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'candy aromas'`
\if :candy_aromas 
\else
	\echo "sub_candy_aromas not found"
	quit 1
\endif

\set :sub_toasty_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'toasty aromas'`
\if :toasty_aromas 
\else
	\echo "sub_toasty_aromas not found"
	quit 1
\endif

\set :sub_mineral_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'mineral aromas'`
\if :mineral_aromas 
\else
	\echo "sub_mineral_aromas not found"
	quit 1
\endif

\set :sub_animal_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'animal aromas'`
\if :animal_aromas 
\else
	\echo "sub_animal_aromas not found"
	quit 1
\endif

\set :sub_milky_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'milky aromas'`
\if :milky_aromas 
\else
	\echo "sub_milky_aromas not found"
	quit 1
\endif

\set :sub_yeasty_aromas `SELECT id FROM refs.aroma_subfamily WHERE default_name = 'yeasty aromas'`
\if :yeasty_aromas 
\else
	\echo "sub_yeasty_aromas not found"
	quit 1
\endif

INSERT INTO refs.aroma(aroma_subfamily_id,default_name) VALUES
	(:red_fruits,'raspberries'),
	(:red_fruits,'blackcurrants'),
	(:red_fruits,'strawberries'),
	(:red_fruits,'blueberries'),
	(:pip_fruits,'apples'),
	(:pip_fruits,'pears'),
	(:pip_fruits,'quinces'),
	(:stone_fruits,'cherries'),
	(:stone_fruits,'plums'),
	(:stone_fruits,'apricots'),
	(:stone_fruits,'peaches'),
	(:citrus_fruits,'lemons'),
	(:citrus_fruits,'oranges'),
	(:citrus_fruits,'mandarines'),
	(:citrus_fruits,'grapefruits'),
	(:citrus_fruits,'lemon zests'),
	(:citrus_fruits,'orange zests'),
	(:tropical_fruits,'pineapples'),
	(:tropical_fruits,'mangos'),
	(:tropical_fruits,'bananas'),
	(:tropical_fruits,'guavas'),
	(:tropical_fruits,'passion fruits'),
	(:tropical_fruits,'lychees'),
	(:dried_fruits,'almonds'),
	(:dried_fruits,'hazelnuts'),
	(:dried_fruits,'walnuts'),
	(:dried_fruits,'figs'),
	(:dried_fruits,'dates'),
	(:dried_fruits,'prunes'),
	(:jammy_fruits,'marmelade'),
	(:jammy_fruits,'strawberry jam'),
	(:jammy_fruits,'cherry jam'),
	(:jammy_fruits,'red fruits jam'),
	(:sub_floral_aromas,'violets'),
	(:sub_floral_aromas,'roses'),
	(:sub_floral_aromas,'honeysuckle'),
	(:sub_floral_aromas,'jamsin'),
	(:sub_floral_aromas,'orange blossoms'),
	(:sub_floral_aromas,'lime'),
	(:sub_floral_aromas,'acacia blossoms'),
	(:sub_floral_aromas,'lavender'),
	(:herbs,'cut grass'),
	(:herbs,'ferns'),
	(:herbs,'mint'),
	(:herbs,'verbena'),
	(:herbs,'thyme'),
	(:herbs,'dill'),
	(:herbs,'eucalyptus'),
	(:woods,'oak'),
	(:woods,'pine'),
	(:woods,'cedar'),
	(:vegetables,'bell pepper'),
	(:vegetables,'asparagus'),
	(:vegetables,'tomatos'),
	(:vegetables,'fennel'),
	(:other_plants,'hay'),
	(:other_plants,'tobacco'),
	(:other_plants,'green tea'),
	(:other_plants,'black tea'),
	(:other_plants,'undergrowths'),
	(:other_plants,'mushrooms'),
	(:other_plants,'truffles'),
	(:other_plants,'humus'),
	(:sub_spicy_aromas,'vanilla'),
	(:sub_spicy_aromas,'black pepper'),
	(:sub_spicy_aromas,'white pepper'),
	(:sub_spicy_aromas,'cinnamon'),
	(:sub_spicy_aromas,'liquorice'),
	(:sub_spicy_aromas,'nutmeg'),
	(:sub_spicy_aromas,'cloves'),
	(:sub_spicy_aromas,'star anis'),
	(:sub_spicy_aromas,'curry'),
	(:sub_candy_aromas,'caramel'),
	(:sub_candy_aromas,'honey'),
	(:sub_candy_aromas,'almond paste'),
	(:sub_toasty_aromas,'tar'),
	(:sub_toasty_aromas,'smoked'),
	(:sub_toasty_aromas,'coffee'),
	(:sub_toasty_aromas,'fireplace'),
	(:sub_toasty_aromas,'chocolate'),
	(:sub_toasty_aromas,'grilled'),
	(:sub_toasty_aromas,'toasted'),
	(:sub_mineral_aromas,'flint'),
	(:sub_mineral_aromas,'chalk'),
	(:sub_mineral_aromas,'petrol'),
	(:sub_animal_aromas,'leather'),
	(:sub_animal_aromas,'musk'),
	(:sub_milky_aromas,'butter'),
	(:sub_milky_aromas,'yogurt'),
	(:sub_yeasty_aromas,'yeasts'),
	(:sub_yeasty_aromas,'bread'),
	(:sub_yeasty_aromas,'brioche')
	ON CONFLICT (default_name) DO NOTHING
	;
