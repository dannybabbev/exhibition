export interface Artist {
  id: string;
  name: string;
  bio: string;
  image_url: string;
  extended_bio?: string;
}

export interface Artwork {
  id: string;
  artist_id: string;
  title: string;
  image_url: string;
  created_date: string;
  description?: string;
}

// Mock data for artists
export const artists: Artist[] = [
  {
    id: "1",
    name: "Maya Johnson",
    bio: "Contemporary sculptor working with sustainable materials. Her work explores the relationship between human consumption and environmental impact.",
    image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&h=1288&auto=format&fit=crop",
    extended_bio: "Maya Johnson is a renowned contemporary sculptor whose work primarily focuses on the relationship between human consumption patterns and their environmental impact. Born in Portland, Oregon, she studied at the Rhode Island School of Design before establishing her studio in Seattle. Johnson's innovative approach involves repurposing discarded materials into thought-provoking sculptures that challenge viewers to reconsider their relationship with the natural world. Her installations have been featured in major galleries across North America and Europe, earning critical acclaim for their powerful environmental commentary and aesthetic brilliance."
  },
  {
    id: "2",
    name: "Alejandro Reyes",
    bio: "Specializing in large-scale murals that blend traditional techniques with modern street art aesthetics. His work often addresses cultural identity and social justice.",
    image_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&h=1288&auto=format&fit=crop",
    extended_bio: "Alejandro Reyes has established himself as a master of large-scale murals that seamlessly blend traditional techniques with contemporary street art aesthetics. Born and raised in Mexico City, Reyes's art is deeply influenced by his cultural heritage and early exposure to the iconic Mexican muralists. After relocating to Los Angeles, he began creating powerful public works that address themes of cultural identity, immigration, and social justice. His distinctive style, characterized by vibrant colors and symbolic imagery, has transformed urban spaces across the Americas. Beyond his public art, Reyes conducts workshops in underserved communities, using art as a tool for social empowerment."
  },
  {
    id: "3",
    name: "Sarah Chen",
    bio: "Digital artist and photographer creating immersive installations that blend physical and virtual reality. Her work examines technology's impact on human connection.",
    image_url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1290&h=1288&auto=format&fit=crop",
    extended_bio: "Sarah Chen is a pioneering digital artist and photographer whose immersive installations explore the intersection of physical and virtual reality. Based in San Francisco, Chen earned her MFA from Stanford University, where she developed her signature approach of combining traditional photography with cutting-edge AR/VR technologies. Her work critically examines how digital interfaces both facilitate and complicate human connection in the modern age. Chen's installations create interactive experiences that challenge viewers to reflect on their relationship with technology. Her exhibitions have been featured at the Museum of Modern Art, the Tate Modern, and numerous international digital art festivals."
  },
  {
    id: "4",
    name: "James Okonkwo",
    bio: "Abstract painter whose colorful compositions are influenced by his Nigerian heritage and jazz music. His work has been exhibited internationally.",
    image_url: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1289&h=1288&auto=format&fit=crop",
    extended_bio: "James Okonkwo is an acclaimed abstract painter whose vibrant compositions reflect the rich interplay between his Nigerian heritage and his passion for jazz music. Born in Lagos and educated in London, Okonkwo's work is characterized by bold color fields, dynamic rhythmic patterns, and layers of symbolic imagery drawn from West African traditions. His paintings have been exhibited in prestigious galleries across Africa, Europe, and North America, earning him recognition as one of the most distinctive voices in contemporary abstract art. Beyond his painting practice, Okonkwo is a dedicated educator who frequently collaborates with musicians to create multimedia performances that combine visual art with improvised jazz."
  },
  {
    id: "5",
    name: "Emma Blackwood",
    bio: "Textile artist combining traditional weaving techniques with experimental materials. Her installations explore themes of memory, time, and domestic spaces.",
    image_url: "https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?q=80&w=1286&h=1288&auto=format&fit=crop",
    extended_bio: "Emma Blackwood has revolutionized contemporary textile art by merging traditional weaving techniques with experimental materials and approaches. After training at the Glasgow School of Art, she established herself as an innovative fiber artist whose work transcends conventional boundaries of craft and fine art. Blackwood's large-scale installations transform ordinary spaces into immersive environments that explore themes of memory, temporality, and domesticity. Her distinctive process involves collecting and incorporating personal artifacts, often donated by community members, into her woven structures. This practice has led to deeply resonant works that function as collective memory vessels. Blackwood's installations have been commissioned by major museums and public spaces throughout Europe and North America."
  },
  {
    id: "6",
    name: "Hiroshi Tanaka",
    bio: "Conceptual artist working across mediums including sculpture, performance, and video. His minimalist approach questions materiality and perception.",
    image_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&h=1288&auto=format&fit=crop",
    extended_bio: "Hiroshi Tanaka is a conceptual artist whose interdisciplinary practice spans sculpture, performance, installation, and video art. Born in Kyoto and based in New York, Tanaka studied philosophy before turning to visual art, an academic background that continues to inform his conceptually rigorous approach. His work is characterized by a refined minimalist aesthetic that questions fundamental assumptions about materiality, perception, and the nature of art itself. Tanaka's installations often create subtle interventions in familiar spaces, challenging viewers to reconsider their habitual ways of seeing and interpreting their environments. His work has been featured in solo exhibitions at the Guggenheim Museum, the Pompidou Center, and the Tokyo Museum of Contemporary Art."
  }
];

// Mock data for artworks
export const artworks: Artwork[] = [
  // Maya Johnson's artworks
  {
    id: "101",
    artist_id: "1",
    title: "Plastic Ocean",
    image_url: "https://images.unsplash.com/photo-1621451547508-c31564825c66?q=80&w=1470&auto=format&fit=crop",
    created_date: "2022",
    description: "A striking sculpture made from recovered ocean plastic, depicting marine life entangled in human waste. This piece serves as a powerful reminder of our environmental impact."
  },
  {
    id: "102",
    artist_id: "1",
    title: "Consumption Cycle",
    image_url: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1470&auto=format&fit=crop",
    created_date: "2023",
    description: "An installation exploring the lifecycle of consumer products, from production to disposal, highlighting the environmental cost of modern consumption patterns."
  },
  {
    id: "103",
    artist_id: "1",
    title: "Carbon Footprint",
    image_url: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?q=80&w=1287&auto=format&fit=crop",
    created_date: "2021",
    description: "A series of cast footprints made from industrial carbon waste, arranged to visualize the impact of human activity on climate change."
  },
  {
    id: "104",
    artist_id: "1",
    title: "Biodegradable Future",
    image_url: "https://images.unsplash.com/photo-1597424216809-3ba9864aeb18?q=80&w=1331&auto=format&fit=crop",
    created_date: "2023",
    description: "A hopeful vision constructed entirely from biodegradable materials, showcasing sustainable alternatives to common plastics and synthetic materials."
  },
  
  // Alejandro Reyes's artworks
  {
    id: "201",
    artist_id: "2",
    title: "Heritage Wall",
    image_url: "https://images.unsplash.com/photo-1559102877-4a2cc0e37fce?q=80&w=1287&auto=format&fit=crop",
    created_date: "2021",
    description: "A vibrant mural celebrating cultural heritage and the immigrant experience, blending traditional Mexican iconography with contemporary urban imagery."
  },
  {
    id: "202",
    artist_id: "2",
    title: "Urban Identity",
    image_url: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=1470&auto=format&fit=crop",
    created_date: "2022",
    description: "An exploration of multicultural identity in urban spaces, depicting diverse faces emerging from and merging with city architecture."
  },
  {
    id: "203",
    artist_id: "2",
    title: "Borders Crossing",
    image_url: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1287&auto=format&fit=crop",
    created_date: "2020",
    description: "A powerful statement on immigration and border politics, featuring imagery that challenges notions of national boundaries and human movement."
  },
  {
    id: "204",
    artist_id: "2",
    title: "Social Justice",
    image_url: "https://images.unsplash.com/photo-1569510968950-87d17581ea69?q=80&w=1287&auto=format&fit=crop",
    created_date: "2023",
    description: "A mural dedicated to social justice movements, featuring portraits of activists and symbolic representations of equality and solidarity."
  },
  {
    id: "205",
    artist_id: "2",
    title: "Unity in Diversity",
    image_url: "https://images.unsplash.com/photo-1571511294462-5924629d4f96?q=80&w=1286&auto=format&fit=crop",
    created_date: "2022",
    description: "A celebration of cultural diversity, depicting interwoven patterns and symbols from various global traditions to create a harmonious whole."
  },
  
  // Sarah Chen's artworks
  {
    id: "301",
    artist_id: "3",
    title: "Digital Natives",
    image_url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1330&auto=format&fit=crop",
    created_date: "2022",
    description: "An interactive digital installation exploring how technology shapes the identity and experience of younger generations born into the digital age."
  },
  {
    id: "302",
    artist_id: "3",
    title: "Virtual Intimacy",
    image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1380&auto=format&fit=crop",
    created_date: "2021",
    description: "A multimedia piece examining how digital technologies both enable and complicate human connection and intimacy in the modern world."
  },
  {
    id: "303",
    artist_id: "3",
    title: "Augmented Reality",
    image_url: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1287&auto=format&fit=crop",
    created_date: "2023",
    description: "A groundbreaking work blending physical and digital realms, using AR technology to create layers of meaning visible only through digital interfaces."
  },
  {
    id: "304",
    artist_id: "3",
    title: "Disconnected Connection",
    image_url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1470&auto=format&fit=crop",
    created_date: "2020",
    description: "A critical examination of social media's paradoxical effects, creating both unprecedented connectivity and profound isolation."
  },
  
  // James Okonkwo's artworks
  {
    id: "401",
    artist_id: "4",
    title: "Lagos Rhythm",
    image_url: "https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1470&auto=format&fit=crop",
    created_date: "2022",
    description: "A vibrant abstract painting inspired by the dynamic energy and rhythm of Lagos, Nigeria, featuring bold patterns and colors reminiscent of traditional textiles."
  },
  {
    id: "402",
    artist_id: "4",
    title: "Jazz Composition No. 4",
    image_url: "https://images.unsplash.com/photo-1558865869-c93f6f8482af?q=80&w=1470&auto=format&fit=crop",
    created_date: "2023",
    description: "An abstract expression of jazz music's improvisational nature, with sweeping brushstrokes and rhythmic patterns echoing musical compositions."
  },
  {
    id: "403",
    artist_id: "4",
    title: "Ancestral Memories",
    image_url: "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?q=80&w=1470&auto=format&fit=crop",
    created_date: "2021",
    description: "A powerful work incorporating symbols and patterns from Nigerian heritage, exploring the connection between personal identity and ancestral history."
  },
  {
    id: "404",
    artist_id: "4",
    title: "Harmonic Abstraction",
    image_url: "https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=1338&auto=format&fit=crop",
    created_date: "2020",
    description: "A meditation on musical harmony translated into visual form, with balanced composition and color relationships creating a sense of visual music."
  },
  {
    id: "405",
    artist_id: "4",
    title: "Cultural Fusion",
    image_url: "https://images.unsplash.com/photo-1578926288207-32356ad13f27?q=80&w=1471&auto=format&fit=crop",
    created_date: "2023",
    description: "An exploration of cultural hybridity, merging visual elements from West African and Western modern art traditions into a unified aesthetic expression."
  },
  
  // Emma Blackwood's artworks
  {
    id: "501",
    artist_id: "5",
    title: "Woven Memories",
    image_url: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=1474&auto=format&fit=crop",
    created_date: "2021",
    description: "A large-scale textile installation incorporating personal mementos and photographs, exploring how memory is preserved and transformed over time."
  },
  {
    id: "502",
    artist_id: "5",
    title: "Domestic Threads",
    image_url: "https://images.unsplash.com/photo-1591643529995-cf8826d9f613?q=80&w=1287&auto=format&fit=crop",
    created_date: "2022",
    description: "A contemplation of domestic labor and craft traditions, weaving together household objects and textiles to examine gendered aspects of home and work."
  },
  {
    id: "503",
    artist_id: "5",
    title: "Tactile Time",
    image_url: "https://images.unsplash.com/photo-1530016910220-52d680d7d220?q=80&w=1287&auto=format&fit=crop",
    created_date: "2023",
    description: "An immersive textile environment that invites physical interaction, exploring the relationship between touch, material, and the passage of time."
  },
  {
    id: "504",
    artist_id: "5",
    title: "Fiber Chronicles",
    image_url: "https://images.unsplash.com/photo-1485736231968-0c77489646e5?q=80&w=1287&auto=format&fit=crop",
    created_date: "2020",
    description: "A narrative series told through textile techniques, with each panel representing a chapter in a personal or collective story, emphasizing materiality as memory."
  },
  
  // Hiroshi Tanaka's artworks
  {
    id: "601",
    artist_id: "6",
    title: "Material Void",
    image_url: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1287&auto=format&fit=crop",
    created_date: "2022",
    description: "A minimalist sculpture exploring the relationship between presence and absence, using negative space as an active element in the composition."
  },
  {
    id: "602",
    artist_id: "6",
    title: "Perception Study #7",
    image_url: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1335&auto=format&fit=crop",
    created_date: "2021",
    description: "Part of an ongoing series investigating how viewers perceive and interact with space, using subtle interventions to alter spatial awareness."
  },
  {
    id: "603",
    artist_id: "6",
    title: "Spatial Intervention",
    image_url: "https://images.unsplash.com/photo-1552327359-d86398116072?q=80&w=1064&auto=format&fit=crop",
    created_date: "2023",
    description: "A site-specific installation that reconfigures architectural space, challenging conventional relationships between the built environment and human movement."
  },
  {
    id: "604",
    artist_id: "6",
    title: "Minimalist Dialogue",
    image_url: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff60f?q=80&w=1287&auto=format&fit=crop",
    created_date: "2020",
    description: "A reductive work exploring essential forms and materials, stripping away excess to reveal fundamental qualities of physical presence."
  },
  {
    id: "605",
    artist_id: "6",
    title: "Conceptual Space",
    image_url: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=1287&auto=format&fit=crop",
    created_date: "2023",
    description: "An exploration of how conceptual frameworks shape physical experience, using minimal formal elements to create profound shifts in perception."
  }
]; 