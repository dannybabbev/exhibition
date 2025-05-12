-- Seed data for artists
INSERT INTO public.artists (id, slug, name, bio, image_url, extended_bio) VALUES
(1, 'maya-johnson', 'Maya Johnson', 'Contemporary sculptor working with sustainable materials. Her work explores the relationship between human consumption and environmental impact.', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&h=1288&auto=format&fit=crop', 'Maya Johnson is a renowned contemporary sculptor whose work primarily focuses on the relationship between human consumption patterns and their environmental impact. Born in Portland, Oregon, she studied at the Rhode Island School of Design before establishing her studio in Seattle. Johnson''s innovative approach involves repurposing discarded materials into thought-provoking sculptures that challenge viewers to reconsider their relationship with the natural world. Her installations have been featured in major galleries across North America and Europe, earning critical acclaim for their powerful environmental commentary and aesthetic brilliance.'),

(2, 'alejandro-reyes', 'Alejandro Reyes', 'Specializing in large-scale murals that blend traditional techniques with modern street art aesthetics. His work often addresses cultural identity and social justice.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&h=1288&auto=format&fit=crop', 'Alejandro Reyes has established himself as a master of large-scale murals that seamlessly blend traditional techniques with contemporary street art aesthetics. Born and raised in Mexico City, Reyes''s art is deeply influenced by his cultural heritage and early exposure to the iconic Mexican muralists. After relocating to Los Angeles, he began creating powerful public works that address themes of cultural identity, immigration, and social justice. His distinctive style, characterized by vibrant colors and symbolic imagery, has transformed urban spaces across the Americas. Beyond his public art, Reyes conducts workshops in underserved communities, using art as a tool for social empowerment.'),

(3, 'sarah-chen', 'Sarah Chen', 'Digital artist and photographer creating immersive installations that blend physical and virtual reality. Her work examines technology''s impact on human connection.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1290&h=1288&auto=format&fit=crop', 'Sarah Chen is a pioneering digital artist and photographer whose immersive installations explore the intersection of physical and virtual reality. Based in San Francisco, Chen earned her MFA from Stanford University, where she developed her signature approach of combining traditional photography with cutting-edge AR/VR technologies. Her work critically examines how digital interfaces both facilitate and complicate human connection in the modern age. Chen''s installations create interactive experiences that challenge viewers to reflect on their relationship with technology. Her exhibitions have been featured at the Museum of Modern Art, the Tate Modern, and numerous international digital art festivals.'),

(4, 'james-okonkwo', 'James Okonkwo', 'Abstract painter whose colorful compositions are influenced by his Nigerian heritage and jazz music. His work has been exhibited internationally.', 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1289&h=1288&auto=format&fit=crop', 'James Okonkwo is an acclaimed abstract painter whose vibrant compositions reflect the rich interplay between his Nigerian heritage and his passion for jazz music. Born in Lagos and educated in London, Okonkwo''s work is characterized by bold color fields, dynamic rhythmic patterns, and layers of symbolic imagery drawn from West African traditions. His paintings have been exhibited in prestigious galleries across Africa, Europe, and North America, earning him recognition as one of the most distinctive voices in contemporary abstract art. Beyond his painting practice, Okonkwo is a dedicated educator who frequently collaborates with musicians to create multimedia performances that combine visual art with improvised jazz.'),

(5, 'emma-blackwood', 'Emma Blackwood', 'Textile artist combining traditional weaving techniques with experimental materials. Her installations explore themes of memory, time, and domestic spaces.', 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1286&h=1288&auto=format&fit=crop', 'Emma Blackwood has revolutionized contemporary textile art by merging traditional weaving techniques with experimental materials and approaches. After training at the Glasgow School of Art, she established herself as an innovative fiber artist whose work transcends conventional boundaries of craft and fine art. Blackwood''s large-scale installations transform ordinary spaces into immersive environments that explore themes of memory, temporality, and domesticity. Her distinctive process involves collecting and incorporating personal artifacts, often donated by community members, into her woven structures. This practice has led to deeply resonant works that function as collective memory vessels. Blackwood''s installations have been commissioned by major museums and public spaces throughout Europe and North America.'),

(6, 'hiroshi-tanaka', 'Hiroshi Tanaka', 'Conceptual artist working across mediums including sculpture, performance, and video. His minimalist approach questions materiality and perception.', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&h=1288&auto=format&fit=crop', 'Hiroshi Tanaka is a conceptual artist whose interdisciplinary practice spans sculpture, performance, installation, and video art. Born in Kyoto and based in New York, Tanaka studied philosophy before turning to visual art, an academic background that continues to inform his conceptually rigorous approach. His work is characterized by a refined minimalist aesthetic that questions fundamental assumptions about materiality, perception, and the nature of art itself. Tanaka''s installations often create subtle interventions in familiar spaces, challenging viewers to reconsider their habitual ways of seeing and interpreting their environments. His work has been featured in solo exhibitions at the Guggenheim Museum, the Pompidou Center, and the Tokyo Museum of Contemporary Art.');

-- Seed data for artworks
INSERT INTO public.artworks (id, artist_id, title, image_url, created_date, description, purchased) VALUES
-- Maya Johnson''s artworks
(1, 1, 'Plastic Ocean', 'https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?q=80&w=1287&auto=format&fit=crop', '2022', 'A striking sculpture made from recovered ocean plastic, depicting marine life entangled in human waste. This piece serves as a powerful reminder of our environmental impact.', true),

(2, 1, 'Consumption Cycle', 'https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1470&auto=format&fit=crop', '2023', 'An installation exploring the lifecycle of consumer products, from production to disposal, highlighting the environmental cost of modern consumption patterns.', false),

(3, 1, 'Carbon Footprint', 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1287&auto=format&fit=crop', '2021', 'A series of cast footprints made from industrial carbon waste, arranged to visualize the impact of human activity on climate change.', false),

(4, 1, 'Biodegradable Future', 'https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?q=80&w=1331&auto=format&fit=crop', '2023', 'A hopeful vision constructed entirely from biodegradable materials, showcasing sustainable alternatives to common plastics and synthetic materials.', false),

-- Alejandro Reyes''s artworks
(5, 2, 'Heritage Wall', 'https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?q=80&w=1287&auto=format&fit=crop', '2021', 'A vibrant mural celebrating cultural heritage and the immigrant experience, blending traditional Mexican iconography with contemporary urban imagery.', false),

(6, 2, 'Urban Identity', 'https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?q=80&w=1331&auto=format&fit=crop', '2022', 'An exploration of multicultural identity in urban spaces, depicting diverse faces emerging from and merging with city architecture.', false),

(7, 2, 'Borders Crossing', 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1287&auto=format&fit=crop', '2020', 'A powerful statement on immigration and border politics, featuring imagery that challenges notions of national boundaries and human movement.', true),

(8, 2, 'Social Justice', 'https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1287&auto=format&fit=crop', '2023', 'A mural dedicated to social justice movements, featuring portraits of activists and symbolic representations of equality and solidarity.', false),

(9, 2, 'Unity in Diversity', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1330&auto=format&fit=crop', '2022', 'A celebration of cultural diversity, depicting interwoven patterns and symbols from various global traditions to create a harmonious whole.', false),

-- Sarah Chen''s artworks
(10, 3, 'Digital Natives', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1330&auto=format&fit=crop', '2022', 'An interactive digital installation exploring how technology shapes the identity and experience of younger generations born into the digital age.', false),

(11, 3, 'Virtual Intimacy', 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1380&auto=format&fit=crop', '2021', 'A multimedia piece examining how digital technologies both enable and complicate human connection and intimacy in the modern world.', true),

(12, 3, 'Augmented Reality', 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1287&auto=format&fit=crop', '2023', 'A groundbreaking work blending physical and digital realms, using AR technology to create layers of meaning visible only through digital interfaces.', false),

(13, 3, 'Disconnected Connection', 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop', '2020', 'A critical examination of social media''s paradoxical effects, creating both unprecedented connectivity and profound isolation.', false),

-- James Okonkwo''s artworks
(14, 4, 'Lagos Rhythm', 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1470&auto=format&fit=crop', '2022', 'A vibrant abstract painting inspired by the dynamic energy and rhythm of Lagos, Nigeria, featuring bold patterns and colors reminiscent of traditional textiles.', false),

(15, 4, 'Jazz Composition No. 4', 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?q=80&w=1470&auto=format&fit=crop', '2023', 'An abstract expression of jazz music''s improvisational nature, with sweeping brushstrokes and rhythmic patterns echoing musical compositions.', false),

(16, 4, 'Ancestral Memories', 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1470&auto=format&fit=crop', '2021', 'A powerful work incorporating symbols and patterns from Nigerian heritage, exploring the connection between personal identity and ancestral history.', false),

(17, 4, 'Harmonic Abstraction', 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1338&auto=format&fit=crop', '2020', 'A meditation on musical harmony translated into visual form, with balanced composition and color relationships creating a sense of visual music.', false),

(18, 4, 'Cultural Fusion', 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1474&auto=format&fit=crop', '2023', 'An exploration of cultural hybridity, merging visual elements from West African and Western modern art traditions into a unified aesthetic expression.', true),

-- Emma Blackwood''s artworks
(19, 5, 'Woven Memories', 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1474&auto=format&fit=crop', '2021', 'A large-scale textile installation incorporating personal mementos and photographs, exploring how memory is preserved and transformed over time.', false),

(20, 5, 'Domestic Threads', 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1338&auto=format&fit=crop', '2022', 'A contemplation of domestic labor and craft traditions, weaving together household objects and textiles to examine gendered aspects of home and work.', false),

(21, 5, 'Tactile Time', 'https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1470&auto=format&fit=crop', '2023', 'An immersive textile environment that invites physical interaction, exploring the relationship between touch, material, and the passage of time.', true),

(22, 5, 'Fiber Chronicles', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1330&auto=format&fit=crop', '2020', 'A narrative series told through textile techniques, with each panel representing a chapter in a personal or collective story, emphasizing materiality as memory.', false),

-- Hiroshi Tanaka''s artworks
(23, 6, 'Material Void', 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1287&auto=format&fit=crop', '2022', 'A minimalist sculpture exploring the relationship between presence and absence, using negative space as an active element in the composition.', false),

(24, 6, 'Perception Study #7', 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1335&auto=format&fit=crop', '2021', 'Part of an ongoing series investigating how viewers perceive and interact with space, using subtle interventions to alter spatial awareness.', false),

(25, 6, 'Spatial Intervention', 'https://images.unsplash.com/photo-1552327359-d86398116072?q=80&w=1064&auto=format&fit=crop', '2023', 'A site-specific installation that reconfigures architectural space, challenging conventional relationships between the built environment and human movement.', false),

(26, 6, 'Minimalist Dialogue', 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1330&auto=format&fit=crop', '2020', 'A reductive work exploring essential forms and materials, stripping away excess to reveal fundamental qualities of physical presence.', false),

(27, 6, 'Conceptual Space', 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1287&auto=format&fit=crop', '2023', 'An exploration of how conceptual frameworks shape physical experience, using minimal formal elements to create profound shifts in perception.', false); 