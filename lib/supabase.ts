import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../database.types';

class Supabase {
    private supabase: SupabaseClient<Database>;
    constructor(supabase: SupabaseClient<Database>) {
      this.supabase = supabase;
    }

    async getArtists() {
        const { data, error } = await this.supabase.from('artists').select('*');
        if (error) {
            throw error;
        }
        return data;
    }

    async getArtistBySlug(slug: string) {
        const { data, error } = await this.supabase.from('artists').select('*, artworks(*)').eq('slug', slug);
        if (error) {
            throw error;
        }
        return data;
    }

    async getArtworksByArtistSlug(slug: string) {
        const { data, error } = await this.supabase
            .from('artworks')
            .select('*, artists( slug, name, image_url )')
            .eq('artists.slug', slug);

        if (error) {
            throw error;
        }

        return data;
    };

    async getArtworkById(id: number) {
        const { data, error } = await this.supabase.from('artworks').select('*, artists( * )').eq('id', id);
        if (error) {
            throw error;
        }
        return data;
    }
}

export default Supabase;