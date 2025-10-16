import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Testimonial {
  id: string;
  patient_name: string;
  patient_role: string | null;
  content_tr: string;
  content_en: string | null;
  content_de: string | null;
  rating: number;
  treatment_type: string;
  google_review_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface BeforeAfterPhoto {
  id: string;
  testimonial_id: string | null;
  treatment_type: string;
  before_photo_url: string;
  after_photo_url: string;
  months_after: number;
  graft_count: number | null;
  description_tr: string | null;
  description_en: string | null;
  description_de: string | null;
  is_featured: boolean;
  is_published: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}
