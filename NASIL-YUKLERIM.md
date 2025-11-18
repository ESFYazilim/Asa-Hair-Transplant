# 🚀 HOSTİNGER'A YÜKLEME - BASİT REHBER

## 📋 HIZLI ÖZET (3 DAKİKA)

```
1. npm run build          → dist/ klasörü oluşur
2. Hostinger'a giriş yap  → File Manager aç
3. dist/ içini kopyala    → public_html/'e yapıştır
4. Siteyi aç              → https://asahairtransplant.com
```

---

## 📦 ADIM 1: BUILD AL

Terminal/Komut satırında:

```bash
npm run build
```

**Sonuç:** `dist/` klasörü oluşacak (304KB)

---

## 🌐 ADIM 2: HOSTİNGER'A GİRİŞ

1. Giriş: https://hpanel.hostinger.com
2. Sol menü → **Files** → **File Manager**
3. **public_html** klasörüne gir

---

## 🗑️ ADIM 3: ESKİ DOSYALARI SİL

public_html içindeki **eski dosyaları sil** (varsa)

**SAKLA:**
- .htaccess (yeni versiyonu yüklenecek)

---

## 📤 ADIM 4: YENİ DOSYALARI YÜKLE

### Yöntem 1: ZIP ile (Önerilen)

```
1. dist/ içindeki herşeyi seç → zip yap
2. Hostinger File Manager → Upload zip
3. Zip'e sağ tık → Extract
4. Zip dosyasını sil
```

### Yöntem 2: Doğrudan

```
1. dist/ klasörünü aç
2. İçindeki HERŞEY'i seç
3. File Manager penceresine sürükle
```

---

## ✅ ADIM 5: DOSYA YAPISI KONTROLÜ

**public_html/** içinde şunlar olmalı:

```
public_html/
  ├── index.html                      ✓
  ├── .htaccess                       ✓
  ├── _redirects                      ✓
  ├── Asa Hair Transplant-renkli.png  ✓
  ├── assets/
  │   ├── index-Dd7AsZ7G.css         ✓
  │   └── index-esBq9hs-.js          ✓
  └── images/
      ├── before-after/
      │   └── abuzer.jpg              ✓
      └── testimonials/
          └── abuzer.jpg              ✓
```

**❌ OLMAMASI GEREKENLER:**
- dist/ (klasör adı)
- src/
- node_modules/
- package.json

---

## 🔒 ADIM 6: SSL AYARLARI

1. Sol menü → **SSL**
2. Domain'i bul: **asahairtransplant.com**
3. SSL aktif mi kontrol et
4. **Force HTTPS** toggle'ını aç

Aktif değilse:
- **Install SSL** → **Let's Encrypt (Free)**

---

## 🧪 ADIM 7: TEST ET

### Browser'da aç:

```
✓ https://asahairtransplant.com
✓ https://asahairtransplant.com/treatments
✓ https://asahairtransplant.com/about
✓ https://asahairtransplant.com/contact
```

### F12 → Console kontrol:
- ❌ Kırmızı hata yok
- ✅ Sayfa açılıyor

---

## 🔧 SORUN ÇÖZÜM

| Sorun | Çözüm |
|-------|-------|
| Beyaz ekran | F12 → Console → Hata kontrol |
| 404 | .htaccess dosyası var mı? |
| CSS yüklenmiyor | assets/ klasörü var mı? |
| Fotoğraf yok | images/ klasörü var mı? |

**Detaylı çözümler:** `BEYAZ-EKRAN-COZUMU.md`

---

## ✅ KONTROL LİSTESİ

- [ ] `npm run build` çalıştırıldı
- [ ] dist/ klasörü oluştu
- [ ] Hostinger'a giriş yapıldı
- [ ] public_html temizlendi
- [ ] Dosyalar yüklendi
- [ ] .htaccess var
- [ ] SSL aktif
- [ ] Site açılıyor

---

## 🎉 BAŞARILI!

Site live: **https://asahairtransplant.com**

### Sonraki adımlar:

1. **Fotoğrafları ekle** → `FOTOGRAFLAR-NASIL-EKLENIR.md`
2. **Email ayarla** → info@asahairtransplant.com
3. **WhatsApp güncelle** → Numara değiştir

---

## 📚 DÖKÜMANTASYON

- **HOSTINGER-ADIMLAR.txt** → Detaylı rehber (bu dosya)
- **BEYAZ-EKRAN-COZUMU.md** → Sorun giderme
- **FOTOGRAFLAR-NASIL-EKLENIR.md** → Fotoğraf ekleme
- **SITE-HAZIR.md** → Genel özet

---

## 📞 YARDIM

Sorun devam ediyorsa:

1. F12 → Console → Screenshot al
2. F12 → Network → Failed istekleri kontrol et
3. Hostinger error log'ları kontrol et

**Başarılar!** 🚀
