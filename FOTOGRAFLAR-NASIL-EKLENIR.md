# 📸 FOTOĞRAF EKLEME REHBERİ

## 📂 KLASÖR YAPISI

```
public/
  └── images/
      ├── before-after/      ← Önce/Sonra fotoğrafları buraya
      └── testimonials/      ← Hasta yorum fotoğrafları buraya
```

---

## 1️⃣ BEFORE/AFTER FOTOĞRAFLARI

### 📍 Konum
```
public/images/before-after/
```

### 📋 Gerekli Fotoğraflar (12 adet)

#### FUE Tedavisi
- `fue-before-1.jpg` ← FUE öncesi 1
- `fue-after-1.jpg` ← FUE sonrası 1
- `fue-before-2.jpg` ← FUE öncesi 2
- `fue-after-2.jpg` ← FUE sonrası 2

#### DHI Tedavisi
- `dhi-before-1.jpg` ← DHI öncesi 1
- `dhi-after-1.jpg` ← DHI sonrası 1
- `dhi-before-2.jpg` ← DHI öncesi 2
- `dhi-after-2.jpg` ← DHI sonrası 2

#### Sapphire FUE Tedavisi
- `sapphire-before-1.jpg` ← Sapphire öncesi 1
- `sapphire-after-1.jpg` ← Sapphire sonrası 1
- `sapphire-before-2.jpg` ← Sapphire öncesi 2
- `sapphire-after-2.jpg` ← Sapphire sonrası 2

### 📝 Fotoğraf Bilgileri

Fotoğrafların açıklamaları `/src/data/beforeAfterData.ts` dosyasında:

**FUE 1:**
- Greft: 4500
- Süre: 12 ay sonra
- Açıklama: "FUE tekniği ile 4500 greft saç ekimi - 12 ay sonra"

**DHI 1:**
- Greft: 3800
- Süre: 10 ay sonra
- Açıklama: "DHI yöntemi ile 3800 greft saç ekimi - 10 ay sonra"

**Sapphire 1:**
- Greft: 5200
- Süre: 14 ay sonra
- Açıklama: "Safir FUE ile 5200 greft saç ekimi - 14 ay sonra"

**FUE 2:**
- Greft: 4000
- Süre: 11 ay sonra
- Açıklama: "FUE tekniği ile 4000 greft saç ekimi - 11 ay sonra"

**DHI 2:**
- Greft: 3500
- Süre: 9 ay sonra
- Açıklama: "DHI yöntemi ile 3500 greft saç ekimi - 9 ay sonra"

**Sapphire 2:**
- Greft: 4800
- Süre: 13 ay sonra
- Açıklama: "Safir FUE ile 4800 greft saç ekimi - 13 ay sonra"

---

## 2️⃣ TESTİMONIAL FOTOĞRAFLARI

### 📍 Konum
```
public/images/testimonials/
```

### 📋 Gerekli Fotoğraflar (3 adet)

- `patient-1.jpg` ← 1. Hasta fotoğrafı (Ahmet Y.)
- `patient-2.jpg` ← 2. Hasta fotoğrafı (Michael S.)
- `patient-3.jpg` ← 3. Hasta fotoğrafı (John D.)

### 📝 Hasta Bilgileri

Hasta yorumları `/src/data/testimonialsData.ts` dosyasında:

**Hasta 1 - Ahmet Y.** (İstanbul)
- Tedavi: FUE Saç Ekimi
- Puan: ⭐⭐⭐⭐⭐

**Hasta 2 - Michael S.** (Germany)
- Tedavi: Sapphire FUE
- Puan: ⭐⭐⭐⭐⭐

**Hasta 3 - John D.** (United Kingdom)
- Tedavi: DHI Saç Ekimi
- Puan: ⭐⭐⭐⭐⭐

---

## 🎯 FOTOĞRAF ÖNERİLERİ

### Before/After Fotoğraflar İçin:
- ✅ Yüksek çözünürlük (min 1200x800px)
- ✅ Aynı açıdan çekilmiş
- ✅ İyi ışık altında
- ✅ Net ve keskin
- ✅ JPG formatı (optimize edilmiş)

### Testimonial Fotoğraflar İçin:
- ✅ Yuvarlak kesilebilir (200x200px yeterli)
- ✅ Profesyonel görünüm
- ✅ Yüz net görünür
- ✅ JPG formatı

---

## 📦 FOTOĞRAF EKLEDİKTEN SONRA

1. **Build alın:**
   ```bash
   npm run build
   ```

2. **Kontrol edin:**
   - dist/images/before-after/ klasöründe 12 fotoğraf olmalı
   - dist/images/testimonials/ klasöründe 3 fotoğraf olmalı

3. **Hostinger'a yükleyin:**
   - Tüm `dist/` klasörünü yükleyin
   - Fotoğraflar otomatik olarak dahil olur

---

## 🔧 FOTOĞRAF İSİMLERİNİ DEĞİŞTİRMEK

Eğer farklı isimler kullanmak isterseniz:

**1. Fotoğrafları public/images/ klasörüne ekleyin**

**2. Data dosyalarını düzenleyin:**

`/src/data/beforeAfterData.ts`:
```typescript
before_photo: '/images/before-after/SIZIN-FOTOGRAF-ISMINIZ.jpg'
```

`/src/components/Testimonials.tsx`:
```typescript
const testimonialImages = [
  '/images/testimonials/SIZIN-FOTOGRAF-ISMINIZ.jpg',
  ...
];
```

**3. Build alın:**
```bash
npm run build
```

---

## ❓ SORU & CEVAP

**S: Fotoğraflar görünmüyor?**
C: Build aldıktan sonra dist/ klasörünün tamamını yüklediğinizden emin olun.

**S: Daha fazla fotoğraf ekleyebilir miyim?**
C: Evet! `/src/data/beforeAfterData.ts` dosyasına yeni fotoğraf verisi ekleyin.

**S: Fotoğraf boyutu önemli mi?**
C: Evet, optimize edilmiş JPG kullanın. Önerilen: Before/After max 500KB, Testimonials max 100KB.

**S: PNG kullanabilir miyim?**
C: Evet ama JPG daha küçük dosya boyutu sağlar.

---

## ✅ ÖZETİ

1. Fotoğrafları `public/images/` klasörüne ekle
2. İsimleri yukarıdaki listeyle eşleştir
3. `npm run build` çalıştır
4. `dist/` klasörünü hostinger'a yükle
5. ✨ Tamam!
