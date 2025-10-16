# 🎉 Hasta Deneyimleri Sistemi - Kullanım Kılavuzu

## 🚀 YENİ ÖZELLİKLER

### ✅ Tamamlanan İşler

1. **Çok Sayfalı Yapı** - React Router ile sayfa geçişleri
2. **Hasta Deneyimleri Sayfası** - Tam fonksiyonel galeri ve yorumlar
3. **Ana Sayfada Before/After Carousel** - Otomatik kayar galeri
4. **Supabase Veritabanı** - Dinamik içerik yönetimi
5. **Mobil Responsive** - Tüm cihazlarda mükemmel görünüm

## 📊 VERİTABANI YAPISI

### Tablolar

**1. testimonials (Hasta Yorumları)**
- Hasta adı, rolü
- 3 dilde yorum (TR, EN, DE)
- Puan (1-5 yıldız)
- Tedavi türü
- Google Review linki
- Yayın durumu

**2. before_after_photos (Önce/Sonra Fotoğrafları)**
- Önce ve sonra fotoğraf URL'leri
- Tedavi türü
- Greft sayısı
- Kaç ay sonra
- 3 dilde açıklama
- Sıralama ve yayın durumu

## 🎯 SAYFA YAPıSı

### Ana Sayfa (/)
- Hero bölümü
- Hizmetler
- **YENİ: Before/After Carousel** (otomatik kayar)
- Tedaviler
- Hakkımızda
- Başarılar
- Yorumlar
- İletişim

### Hasta Deneyimleri (/patient-experiences)
- İstatistikler (hasta sayısı, puan, deneyim)
- Before/After galeri (filtrelenebilir)
- Hasta yorumları
- CTA bölümü

## 🔧 İÇERİK EKLEME

### Yeni Fotoğraf Eklemek

Supabase Dashboard'a git → before_after_photos tablosu → Insert row:

```sql
INSERT INTO before_after_photos (
  treatment_type,
  before_photo_url,
  after_photo_url,
  months_after,
  graft_count,
  description_tr,
  description_en,
  description_de,
  is_featured,
  display_order
) VALUES (
  'DHI',
  'https://example.com/before.jpg',
  'https://example.com/after.jpg',
  12,
  3500,
  'Türkçe açıklama...',
  'English description...',
  'Deutsche Beschreibung...',
  true,
  1
);
```

### Yeni Yorum Eklemek

```sql
INSERT INTO testimonials (
  patient_name,
  patient_role,
  content_tr,
  content_en,
  content_de,
  rating,
  treatment_type,
  google_review_url,
  is_featured
) VALUES (
  'Ahmet Yılmaz',
  'Doktor',
  'Harika bir deneyimdi...',
  'It was a great experience...',
  'Es war eine großartige Erfahrung...',
  5,
  'FUE',
  'https://g.page/review/...',
  true
);
```

## 🎨 ÖZELLİKLER

### Before/After Carousel (Ana Sayfa)
- ✅ Otomatik kayma (5 saniyede bir)
- ✅ Manuel kontroller (önceki/sonraki)
- ✅ Nokta göstergesi
- ✅ Tedavi bilgileri (tip, greft, süre)
- ✅ Sadece "is_featured=true" olanları gösterir
- ✅ 3 dil desteği

### Hasta Deneyimleri Sayfası
- ✅ Filtreleme (tüm tedaviler, DHI, FUE, vs)
- ✅ Grid layout (1-2-3 kolon)
- ✅ Hover efektleri
- ✅ Google Review linkleri
- ✅ İstatistik kartları
- ✅ Responsive tasarım

### Navigasyon
- ✅ Ana sayfa linkler (scroll)
- ✅ "Hasta Deneyimleri" sayfa linki
- ✅ Mobil menü desteği
- ✅ 3 dil geçişi

## 🌐 GOOGLE REVIEWS ENTEGRASYONU

### Manuel Yöntem
Her yorumda `google_review_url` alanına review linkini ekleyin:

1. Google'da yorumu bulun
2. "Paylaş" → "Link kopyala"
3. Supabase'de ilgili yoruma ekleyin
4. Otomatik olarak "Google'da Gör" butonu çıkar

### Örnek Google Review URL
```
https://g.page/r/CdJZ5xMJH9WFEAI/review
```

## 📱 MOBİL OPTİMİZASYON

✅ Responsive font boyutları
✅ Responsive padding/margin
✅ Mobilde tam genişlik butonlar
✅ Touch-friendly carousel kontroller
✅ Overflow-x önlendi
✅ Flexbox grid sistemi

## 🔐 GÜVENLİK (RLS)

✅ Herkes **sadece yayındaki** içerikleri görebilir
✅ Sadece authenticated kullanıcılar ekler/düzenler
✅ RLS policies aktif
✅ Public okuma, authenticated yazma

## 🚀 DEPLOY

### Hostinger'a Yükleme

1. **Build aldık** - dist/ klasörü hazır
2. **Tüm dosyaları yükle**:
   ```
   dist/index.html           → public_html/
   dist/assets/*             → public_html/assets/
   dist/api/*                → public_html/api/
   dist/_redirects           → public_html/
   dist/*.png                → public_html/
   ```
3. **İzinler**:
   - api/send-email.php → 755
   - .htaccess → 644

### .env Dosyası (Gerekli)
Supabase bağlantısı için .env.local oluşturun:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 📊 İSTATİSTİKLER

- **Ana Sayfa**: 8 bölüm + carousel
- **Hasta Deneyimleri**: 4 bölüm + galeri
- **Toplam Sayfa**: 2 (SPA)
- **Veritabanı Tablo**: 2
- **Örnek Veri**: 3 yorum + 3 fotoğraf
- **Build Boyutu**: 419KB
- **JavaScript**: 392KB (gzip: 116KB)
- **CSS**: 25KB (gzip: 5KB)

## 🎯 GELECEKTEKİ GELİŞTİRMELER

İsterseniz eklenebilir:
- Admin paneli (içerik yönetimi)
- Fotoğraf upload sistemi
- Video testimonial desteği
- Google Reviews API otomatik çekme
- Arama ve gelişmiş filtreleme
- Sayfalama (pagination)
- Lightbox galeri görüntüleme

## ❓ SORUN GİDERME

**Fotoğraflar görünmüyor:**
- URL'leri kontrol edin
- CORS ayarlarını kontrol edin
- is_published = true olmalı

**Carousel çalışmıyor:**
- En az 1 fotoğraf is_featured = true olmalı
- JavaScript hataları için console'u kontrol edin

**Supabase bağlanamıyor:**
- .env dosyasını kontrol edin
- VITE_ prefix eklenmiş mi kontrol edin
- Build sonrası .env değişikliği yapıldıysa yeniden build alın

## 🎉 HAZIR!

Site artık tam fonksiyonel, çok sayfalı ve Supabase ile yönetilebilir durumda!

Yeni içerik eklemek için sadece Supabase Dashboard'u kullanın.
