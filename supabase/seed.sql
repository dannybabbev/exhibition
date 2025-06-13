-- Load Exhibition Data
-- This script loads artists and artworks from the Exhibition CSV data
-- Starting with artist ID 10 as requested

-- Clear any existing data with IDs >= 10 (in case of re-runs)
DELETE FROM public.artworks WHERE artist_id >= 10;
DELETE FROM public.artists WHERE id >= 10;

-- Reset sequence to ensure we start from ID 10 for artists
SELECT setval('artists_id_seq', 9);

-- Insert Artists (starting from ID 10)
INSERT INTO public.artists (id, slug, name, bio, image_url, extended_bio) VALUES
(10, 'rbl', 'Rostislav Borisovich Likhanov', 'About the Artist: Likhanov Rostislav Borisovich. Born on May 12, 1990. Artist/Monumentalist, who resides in St. Petersburg. Education: The St. Petersburg Art College (2008-2013). Saint Petersburg State Academy of Art and Design (2013-2019).', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Rostislav%20Borisovich%20Likhanov.jpg', NULL),

(11, 'hm', 'Hakob Muradyan', 'About the artist : Hakob Muradyan. Born in 1987 in Yerevan, Armenia. Raised in a family of architecs and engineers, Hakob was immersed in a creative environment from early age. Encouraged by the artistic influence of his grandfather and aunt, he developed a passion for daily drawing that laid the foundation for his visual pratice. Hakob began his professional journey in 2007. His first role as a character designer involved drawing 2D characters and developing them into fully realized 3D models for animation. This work sparked a lasting interest in human and animal anatomy, an ongoing theme that continues to inform his artistic exploration.
After more than a decade in video production and computer graphics, Hakob turned his focus toward traditional media. His passion for painting from life, particularly the human figure, has led to exhibitions in several figurative art shows across London.', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Hakob%20Muradyan/Hakob%20Muradyan.jpg', NULL),

(12, 'vesa', 'VESA', 'Vesa is a globally recognized contemporary artist blending ancient mytholigies, archetypes, and sacred geometry with cutting-edge technologies like AI, VR/AR, and blockchain. Hiw work redefines art as an immersive narrative-rich experience - spanning fire art, phygital installations, and luxury collaborations. His contemorary art project with Bollywood actress Veena Malik reached around 300M people in 2013. After a succesful film career VESA developed his own photography, bodypainting and digital collaging process for contemporary art. This led him to become one of the early 2016 crypto art pioneers, who has appeared in Forbes miltiple times. His last exhibits were in Art Dubai Expo as well as The Museum of the Future.', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/VESA.JPG', NULL),

(13, 'ar', 'Anastaisha Rozhanskaya', NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Anastaisha%20Rozhanskaya/Anastaisha%20Rozhanskaya.jpeg', NULL);

-- Update sequence to continue from the last inserted ID
SELECT setval('artists_id_seq', 13);

-- Insert Artworks
INSERT INTO public.artworks (artist_id, title, created_date, description, purchased, price, image_url) VALUES

-- Rostislav Borisovich Likhanov artworks (artist_id: 10)
(10, 'Ruthless People 1', '2025', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Ruthless%20People1.JPG'),
(10, 'Ruthless People 2', '2019', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Rutheless%20People2.JPG'),
(10, 'Ruthless People 3', '2024', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Ruthless%20People3.JPG'),
(10, 'Gotham City 1', '2020', 'all art is digital', false, '1000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Gotham%20City1.jpg'),
(10, 'Gotham City 2', '2020', 'all art is digital', false, '1000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Gotham%20City2.jpg'),
(10, 'Gotham City 3', '2020', 'all art is digital', false, '1000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Gotham%20City3.jpg'),
(10, 'Gotham City 4', '2020', 'all art is digital', false, '1000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Gotham%20City4.jpg'),
(10, 'Gotham City 5', '2020', 'all art is digital', false, '1000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Gotham%20City5.jpg'),
(10, 'Gotham City 6', '2020', 'all art is digital', false, '1000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/Gotham%20City6.jpg'),
-- (10, 'Gotham City 7', '2025', 'all art is digital', false, '1500-2000', NULL),
-- (10, 'Gotham City 8', '2025', 'all art is digital', false, '1500-2000', NULL),
-- (10, 'Gotham City 9', '2025', 'all art is digital', false, '1500-2000', NULL),
(10, 'The Big Bang Theory 1', '2022', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/The%20Big%20Bang%20Theory1.JPG'),
(10, 'The Big Bang Theory 2', '2022', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/The%20Big%20Bang%20Theory2.JPG'),
(10, 'The Big Bang Theory 3', '2022', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/The%20Big%20Bang%20Theory3.JPG'),
(10, 'The Big Bang Theory 4', '2022', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/The%20Big%20Bang%20Theory4.JPG'),
(10, 'The Big Bang Theory 5', '2022', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/The%20Big%20Bang%20Theory5.JPG'),
(10, 'The Big Bang Theory 6', '2022', 'all art is digital', false, '2000-2500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Rostislav%20Likhanov/The%20Big%20Bang%20Theory6.JPG'),

-- Hakob Muradyan artworks (artist_id: 11)
(11, 'V.', '2023', 'buyer will purchase physical and digital', false, '3000-3500', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Hakob%20Muradyan/V.jpg'),
(11, 'Amris', '2023', 'buyer will purchase physical and digital', false, '4000-5000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Hakob%20Muradyan/Amris.jpg'),

-- VESA artworks (artist_id: 12)
(12, 'Channel', NULL, 'Channel
She stands unarmored, yet unshaken,
woven from shadow and light.
Gold spills where the world has touched her,
but it does not break—
it only makes her shine.
He watches, not to shield,
but to learn how strength
can be soft,
how power can be open,
how a wound can turn to art.
https://www.trio.xyz/inscriptions/
2d565937584660c5bfdd7a901a4db4dfc57ea2474f1f5c8819b3ﬀ4a99c054cai0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Channel.jpeg'),

(12, 'Emergent', NULL, 'No flame is born of the ashes unless the spark consents.
Her skin was once a gallery of ghosts until the pigments rose with purpose.
Until she pressed her palms to her own pulse, the rhythm was borrowed, not hers.
Among the molten textures, she touched memory—each scar a glyph, each hue a
hymn.
There she stood, not adorned but declared, as if nature herself had appointed her
sentinel.
There is my voice, she said, and let the silence around her become sacred.
https://www.trio.xyz/inscriptions/
2b112bc1cc0a69a64140baf05d2a4a5e0c65f81d8727ef3c963c8d27f96f4545i0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Emergent.jpeg'),

(12, 'Gravity and Silk', NULL, 'She does not wield it—
she is it.
A storm held still,
lightning wrapped in silk.
Not the weight of force,
but the pull of presence.
She moves, and the world
remembers its place.
https://www.trio.xyz/inscriptions/
e336d7b6ec473a1570d124b02c728aa5fe92f5723761c892fea65af8622c075ai0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Gravity%20and%20Silk.jpeg'),

(12, 'Guardian of the Flame', NULL, 'A wild woman is ravishing and terrifying like David meeting Goliath, like the brave
sperm meeting the glowing ovum orb in the tunnel of life. The bonfire can be
restrained and restricted from the outside by denying the fuel to the fire, but the
true harmony in Mother Nature settles when she realises the value of holding her
own candle. The golden elixir she owns, the nectar of life that is found at the
beginning of every life. She must be the first guardian of it, the discerning
fellowship around it.
https://www.trio.xyz/inscriptions/
a9603e59f5fcea892c2b54b51c140ed4de3d7072f97996b4c3ab4202df9e0b0fi0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Guardian%20of%20the%20Flame.jpeg'),

(12, 'Phantom Heat', NULL, 'She lingers in the dark,
half-seen, fully felt.
A whisper of shadow,
a trace of fire—
pulling, but never pleading.
Step closer, and she fades.
Step back, and she owns you.
https://www.trio.xyz/inscriptions/
013e054229d20a0a38d59c81f16769c92563860db1b68ba93de31a12fe7770c0i0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Phantom%20Heat.jpeg'),

(12, 'Ritual of Radiance', NULL, 'She desires to attain the shimmer of a rose petal. The fascination of a peacock''s
feather. She desires the sun to dance on her skin, in the creases of her eyelids. She
wants her words to elope from a deliciously painted mouth. And yet, every
morning, her ritual is a sacred passage of petting herself to a new day, a caring
stroke of a brush like her mother''s comforting hand on the back of her head. It is
for you, it is for her, the world outside and the world within.
https://www.trio.xyz/inscriptions/
3ec83bda4ed7d058b1d291ea9555e34c1cbd2eeb1aea98e9b528e16dbb121009i0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Ritual%20of%20Radiance.jpeg'),

(12, 'The Body Remembers', NULL, 'After a long journey, she tells stories without saying a word. The body stores and
recites the beautiful narrations it has seen. The home she used to know, now feels
chilly in the face of so many changes. The travel is calling, the story is unfolding,
but on her neck there lies a reminder of a forever home she wishes to see true one
day. Her lodging has turned into a realistic photo album to grasp the moments that
flee in her superfluous memory.
https://www.trio.xyz/inscriptions/
28a392f6986ed5e90ae93e85506ﬀ42c00eaea6a27fb54272b515ad58e6d2055i0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/The%20Body%20Remembers.jpeg'),

(12, 'The Recliner', NULL, 'No fortress is reliant on wreckage in the bedrock. Her home in her body was a
hollow corridor until she found her true front door. Until she sat down in the lounge
of her own being, there was a wandering that was not to be quenched. Along the
corridor she found him, and his musk in the nook of his chest was the fanfare that
helped her find the recliner of her ancestral grandmothers. There is my spot, she
said and curled up next to him.
https://www.trio.xyz/inscriptions/
20bfbf4b7e852ecc2614a395fb2bd71fa4843369908ca2cd8d7196913e919635i0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/The%20Recliner.jpg'),

(12, 'Tine & Crown', NULL, 'Ancient yet rare, stirring but subtle walk of feminine magnificence doesn''t push but
it attracts. It''s relentless, unyielding and monolithic like the sea. One drip at a time
it carves a path through solid rock without firepower, without dynamite. There it
stands basking in discovery, at the feet of every woman that tilts her crown in
search of it. The plentifulness of the woman''s path spans generational like an
internet of mushrooms, harder to see when forces are at the front. Leading with
allowing, letting begets benefitting.
https://www.trio.xyz/inscriptions/
d3ae8aeea8fcb43fc3cc2ebc848ea4599c0ea3bfc9fe3fd38be3cb1a336494a8i0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Tide%20%26%20Crown.jpeg'),

(12, 'Velvet Orbit', NULL, 'She moves like a slow eclipse,
pulling all things into her glow.
Not rushed, not forced—
just the hush of silk on skin,
the knowing curve of gravity,
the lure of something infinite
just within reach.
https://www.trio.xyz/inscriptions/
8f5bce6146ca0436288bfa7892142da1e3c803c55c5ce523c982d30dfc033034i0', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Velvet%20Orbit.jpeg'),

(12, 'Million Dirham Hotel', NULL, 'Million Dirham Hotel is the first Mirrors-series artwork minted on Ordinals. Some of the earlier
versions have been implemented on physical art cars, for which we have a exclusive licence to
launch these cars on the streets of Dubai. This artwork, if it reaches a certain sum, will carry that
same IP right, which we can implement on selected surfaces or objects. The work is made via
painting, photography and digital collaging over multiple days.
The topic of the artwork itself? Can you imagine what a hotel that charges a million dirhams per
night looks like? During the last three years of living in Dubai, VESA has observed the attention,
luxury and experience economy grow. The class of people who made rather than lost money
during Covid or any other recent disaster live a completely diﬀerent lifestyle to the majority on the
planet. The new luxury is a unique experience, unavailable to most. The world is moving from an
ownership to access basis even further. A LV bag don''t impress people much. VESA''s new
Mirrors-series explores value, experiences and identity in an innovative way. The leveraged IP of
the artwork provides another layer to the work''s value argument. How does the art become
something that is our unique identity, rather than a common access commodity?', false, '6540', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/_million-dirhm-hotel-juha-4.jpg'),

(12, 'Bridge Over Reason', NULL, 'https://www.trio.xyz/inscriptions/
b39b74fd2ad481998bed0a3cc95cb3d75c6e1abdb666b64f6dd124137e59302fi0
Artevo Collection
VESA transitioned from a filmmaker to a contemporary artist with his own style, when he
discovered that through bodypainting, painting, photography and digital collaging he could
express something unique in 2008. The process resulted in digital originals, which prompted him
to enter the crypto art and NFT scene early. He needed the technology 10 years before it became
available. The work is made via painting, photography and digital collaging over multiple days.
Bridge Over Reason is a work from his early sessions with Sepi, the second ever model to work
with VESA. The work was made in 2008 but first was seen in public in the artist''s first ever gallery
show in June 2009. Very few of these works have been minted on any chains, as they hold a
certain legacy space for VESA. Now finally, through ordinals, they will become available.', false, '32720', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Bridge%20Over%20Reason.jpg'),

(12, 'It Used To Be Wired Flat', NULL, 'https://www.trio.xyz/inscriptions/
1f12c38a983f29b3bd6f2198e450408c2c27bd25a1646cd69ad7b607001bc507i0
Very few early VESA works from the 2017-2019 period on the Bitcoin movement are minted as
digital originals despite him being in this space full time since very early days. It Used To Be Wired
is a tribute to the likes of Nick Spanos, who pioneered the early NY crypto scene, and had to
eventually leave the land of the free not being so free after all. The work is made via painting,
photography and digital collaging over multiple days.
In this art piece the iconic NY island skyline is transformed by blockchain code, but this time
Philippe Petit is not walking in between the WTC buildings as the man on a wire. He is walking
from the Freedom Tower to the digital unknown. There are many blockchain ventures in the city,
but many are moving out of NY and the United States due to a lack of entrepreneurial support.
The question remains: ""Will New York keep its pioneering spirit or drive out the future of finance?""
When conceptualizing this piece in 2018 VESA first thought about the lasting frontier spirit of New
York, the artists who have lived there and pioneering moves in Bitcoin really starting from a
humble transatlantic pizza transaction. No matter what you think about 9/11 a part of its ghost is
inescapably linked to the 2008 financial meltdown and the birth of digital currency. Knowing what
we know now, most people in crypto try to avoid doing any business in the US, as it is among the
most restrictive countries in the world to be involved with', false, '110000', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/It%20Used%20To%20Be%20Wired%20flat.jpg'),

(12, 'Rune-dreams', NULL, 'Senses Artisan Collection
Rune Dreams by VESA, a crypto artist since 2017, introduces his work to Ordinals. The piece is a
tribute to the Runestones project and is an example of the kind of mutually beneficial cross overs
fine art and Web3 projects can have. The work is made via painting, photography and digital
collaging over multiple days.
The piece was produced via digitally collaging photography of a model shot in VESA''s studio, and
scanned images of his layer paintings for the Senses series, which has been previously minted on
Superrare and Crypto (dot) com. This series II, has now just shot 16 models and will start to drop
the evolution of the series on Ordinals.', false, '6540', 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/VESA/Rune-dreams.jpg'),

-- Anastaisha Rozhanskaya artworks (artist_id: 13)
(13, 'Anger', '2025', 'Here I will present a collection of artworks where I drew a single phase. When I concluded every single phase. Here what I got:

Anger - that art work has feeling of love. When you want something but scary to loose or lost... Let''s be optimistic and say just scary to loose. And you are on a close call to loose it. You have a lot of responsibility and still not sure if it will work out. But you have to be strong. And here appears anger. Just for a bit, but suddenly and highly.', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Anastaisha%20Rozhanskaya/Anger.jpg'),

(13, 'Depression', '2025', 'As known now depression is not only sad emotions. Depressed person can be happily dancing on a dance floor and after jump from the roof. On that art you can still see love, like a hope. But sad - represents the clouds and rain. 
In my opinion that''s a true long depression. Because you are trying to ignore it usually, you are trying to fight to live but you still in that cloud of fog and rain.', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Anastaisha%20Rozhanskaya/Depression.jpeg'),

(13, 'Real Inspiration', '2025', 'Meaning: Many times people ask where do you get the inspiration from, my answer hides in that artwork: I need to go throw 5 physiological phases: denial, anger, bargaining, depression, and acceptance. These phases I showed around the heart. But Heart itself means a new person, stronger, powerful and survivor. 
A bit about me, I get inspiration while being in that phases, after each phase concluded and the biggest inspiration when you are a new strong person.', false, NULL, 'https://ckrggpsnxcyuxlpawyno.supabase.co/storage/v1/object/public/images/Anastaisha%20Rozhanskaya/Real%20inspiration.jpeg');

-- Display summary of loaded data
SELECT 'Artists loaded:' as summary, count(*) as count FROM public.artists WHERE id >= 10
UNION ALL
SELECT 'Artworks loaded:', count(*) FROM public.artworks WHERE artist_id >= 10;