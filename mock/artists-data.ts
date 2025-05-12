export interface Artist {
  id: string;
  name: string;
  bio: string;
  image_url: string;
  extended_bio?: string;
}

export interface Artwork {
  id: number;
  artist_slug: string;
  title: string;
  image_url: string;
  created_date: string | null;
  description: string | null;
  purchased: boolean;
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