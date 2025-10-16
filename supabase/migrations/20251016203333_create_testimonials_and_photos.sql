/*
  # Hasta Deneyimleri ve Önce/Sonra Fotoğrafları Sistemi

  ## Yeni Tablolar
  
  ### 1. `testimonials` (Hasta Yorumları)
    - `id` (uuid, primary key) - Benzersiz kimlik
    - `patient_name` (text) - Hasta adı
    - `patient_role` (text) - Meslek/unvan
    - `content_tr` (text) - Türkçe yorum
    - `content_en` (text) - İngilizce yorum
    - `content_de` (text) - Almanca yorum
    - `rating` (integer) - 1-5 arası puan
    - `treatment_type` (text) - Tedavi türü (DHI, FUE, PRP, vs)
    - `google_review_url` (text) - Google review linki
    - `is_featured` (boolean) - Ana sayfada göster
    - `is_published` (boolean) - Yayında mı
    - `created_at` (timestamptz) - Oluşturma tarihi
    - `updated_at` (timestamptz) - Güncellenme tarihi

  ### 2. `before_after_photos` (Önce/Sonra Fotoğrafları)
    - `id` (uuid, primary key) - Benzersiz kimlik
    - `testimonial_id` (uuid, foreign key) - Bağlı yorum (opsiyonel)
    - `treatment_type` (text) - Tedavi türü
    - `before_photo_url` (text) - Önce fotoğraf URL
    - `after_photo_url` (text) - Sonra fotoğraf URL
    - `months_after` (integer) - Kaç ay sonra
    - `graft_count` (integer) - Greft sayısı
    - `description_tr` (text) - Türkçe açıklama
    - `description_en` (text) - İngilizce açıklama
    - `description_de` (text) - Almanca açıklama
    - `is_featured` (boolean) - Ana sayfada göster
    - `is_published` (boolean) - Yayında mı
    - `display_order` (integer) - Sıralama
    - `created_at` (timestamptz) - Oluşturma tarihi
    - `updated_at` (timestamptz) - Güncellenme tarihi

  ## Güvenlik (RLS)
    - Her iki tablo için RLS aktif
    - Herkes okuyabilir (is_published=true olanlar)
    - Sadece authenticated kullanıcılar ekleyebilir/düzenleyebilir
*/

-- Testimonials tablosu
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  patient_role text,
  content_tr text NOT NULL,
  content_en text,
  content_de text,
  rating integer CHECK (rating >= 1 AND rating <= 5) DEFAULT 5,
  treatment_type text NOT NULL,
  google_review_url text,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Before/After Photos tablosu
CREATE TABLE IF NOT EXISTS before_after_photos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  testimonial_id uuid REFERENCES testimonials(id) ON DELETE SET NULL,
  treatment_type text NOT NULL,
  before_photo_url text NOT NULL,
  after_photo_url text NOT NULL,
  months_after integer DEFAULT 12,
  graft_count integer,
  description_tr text,
  description_en text,
  description_de text,
  is_featured boolean DEFAULT false,
  is_published boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_testimonials_published ON testimonials(is_published, is_featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_treatment ON testimonials(treatment_type);
CREATE INDEX IF NOT EXISTS idx_photos_published ON before_after_photos(is_published, is_featured);
CREATE INDEX IF NOT EXISTS idx_photos_display_order ON before_after_photos(display_order);

-- RLS Aktif
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE before_after_photos ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Herkes okuyabilir (published olanlar)
CREATE POLICY "Anyone can view published testimonials"
  ON testimonials FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Anyone can view published photos"
  ON before_after_photos FOR SELECT
  TO public
  USING (is_published = true);

-- RLS Policies: Authenticated kullanıcılar ekleyebilir
CREATE POLICY "Authenticated users can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can insert photos"
  ON before_after_photos FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- RLS Policies: Authenticated kullanıcılar güncelleyebilir
CREATE POLICY "Authenticated users can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update photos"
  ON before_after_photos FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Örnek veriler ekle
INSERT INTO testimonials (patient_name, patient_role, content_tr, content_en, content_de, rating, treatment_type, is_featured) VALUES
('Mehmet Yılmaz', 'Mühendis', 'DHI saç ekimi sonrasında beklediğimden çok daha doğal sonuçlar aldım. 3500 greft ile harika bir yoğunluk elde ettik. PRP tedavisi ile desteklenen süreç mükemmeldi. 8. ayda sonuçlar tam olarak ortaya çıktı ve çok mutluyum.', 'After DHI hair transplant, I got much more natural results than I expected. We achieved great density with 3500 grafts. The process supported by PRP treatment was perfect. Results fully appeared at month 8 and I am very happy.', 'Nach der DHI-Haartransplantation erhielt ich viel natürlichere Ergebnisse als erwartet. Mit 3500 Grafts erzielten wir eine großartige Dichte. Der von PRP unterstützte Prozess war perfekt.', 5, 'DHI', true),
('John Smith', 'Business Manager', 'Hair transplant Turkey experience was exceptional. 4200 grafts with FUE technique gave me incredible results. The medical team was professional and caring throughout the process. After 10 months, my hair looks completely natural.', 'Hair transplant Turkey experience was exceptional. 4200 grafts with FUE technique gave me incredible results. The medical team was professional and caring throughout the process. After 10 months, my hair looks completely natural.', 'Die Erfahrung mit der Haartransplantation in der Türkei war außergewöhnlich. 4200 Grafts mit FUE-Technik gaben mir unglaubliche Ergebnisse. Das medizinische Team war professionell und fürsorglich.', 5, 'FUE', true),
('Ahmed Al-Rashid', 'Entrepreneur', 'Sakal ekimi için geldim ve sonuçlar harika. 2800 greft ile tam ve doğal bir sakal görünümü elde ettim. DHI tekniği ile her tel doğru açıda yerleştirildi. 6 ay sonra istediğim tam sonucu aldım.', 'I came for beard transplant and the results are amazing. I achieved a full and natural beard appearance with 2800 grafts. Each hair was placed at the right angle with DHI technique. After 6 months I got the exact result I wanted.', 'Ich kam für eine Barttransplantation und die Ergebnisse sind erstaunlich. Mit 2800 Grafts erreichte ich ein vollständiges und natürliches Bartaussehen.', 5, 'Beard Transplant', true);

INSERT INTO before_after_photos (treatment_type, before_photo_url, after_photo_url, months_after, graft_count, description_tr, description_en, description_de, is_featured, display_order) VALUES
('DHI', 'https://images.pexels.com/photos/1319800/pexels-photo-1319800.jpeg', 'https://images.pexels.com/photos/1624693/pexels-photo-1624693.jpeg', 10, 3500, '35 yaşında erkek hasta, DHI tekniği ile 3500 greft saç ekimi. Ön saç çizgisi ve tepe bölgesi tamamen yenilendi.', '35-year-old male patient, 3500 grafts hair transplant with DHI technique. Front hairline and crown area completely renewed.', '35-jähriger männlicher Patient, 3500 Grafts Haartransplantation mit DHI-Technik. Fronthaarlinie und Scheitelbereich komplett erneuert.', true, 1),
('FUE', 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg', 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg', 12, 4200, '42 yaşında erkek hasta, FUE yöntemi ile 4200 greft. Diffüz seyrelme problemi tamamen çözüldü.', '42-year-old male patient, 4200 grafts with FUE method. Diffuse thinning problem completely resolved.', '42-jähriger männlicher Patient, 4200 Grafts mit FUE-Methode. Diffuses Ausdünnungsproblem vollständig gelöst.', true, 2),
('Beard Transplant', 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg', 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', 8, 2800, '28 yaşında erkek hasta, sakal ekimi 2800 greft. Seyrek sakal bölgeleri dolduruldu, homojen görünüm sağlandı.', '28-year-old male patient, beard transplant 2800 grafts. Sparse beard areas filled, homogeneous appearance achieved.', '28-jähriger männlicher Patient, Barttransplantation 2800 Grafts. Spärliche Bartbereiche gefüllt, homogenes Aussehen erreicht.', true, 3);
