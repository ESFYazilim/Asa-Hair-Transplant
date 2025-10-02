# Hostinger Deployment Guide

## 📁 Dosya Yapısı
Hostinger'a yüklerken aşağıdaki yapıyı kullanın:

```
public_html/
├── index.html
├── assets/
│   ├── css/
│   └── js/
├── api/
│   └── send-email.php
├── .htaccess
└── diğer dosyalar...
```

## 🚀 Deployment Adımları

### 1. Build Alma
```bash
npm run build
```

### 2. Dosyaları Yükleme
- `dist/` klasöründeki tüm dosyaları `public_html/` klasörüne yükleyin
- `public/api/send-email.php` dosyasını `public_html/api/` klasörüne yükleyin
- `public/.htaccess` dosyasını `public_html/` klasörüne yükleyin

### 3. Email Ayarları
Hostinger cPanel'de:
- Email hesabı oluşturun: `info@asahairtransplant.com`
- PHP mail() fonksiyonunun aktif olduğundan emin olun

### 4. Dosya İzinleri
- `api/send-email.php` dosyasına 755 izni verin
- `.htaccess` dosyasına 644 izni verin

## 🔧 Sorun Giderme

### Email Çalışmıyorsa:
1. Hostinger'da PHP mail() aktif mi kontrol edin
2. Email hesabı oluşturulmuş mu kontrol edin
3. Spam klasörünü kontrol edin

### Site Açılmıyorsa:
1. `.htaccess` dosyası yüklenmiş mi kontrol edin
2. `index.html` dosyası `public_html/` klasöründe mi kontrol edin
3. Dosya izinlerini kontrol edin

### JavaScript Hataları:
1. Console'da hata mesajlarını kontrol edin
2. Dosya yollarının doğru olduğundan emin olun
3. HTTPS kullanıyorsanız mixed content hatası olabilir

## 📞 Test Etme
1. Siteyi açın: `https://yourdomain.com`
2. İletişim formunu test edin
3. WhatsApp butonlarını test edin
4. Dil değiştirme özelliğini test edin

## 🌐 Domain Ayarları
- Domain'i Hostinger'da sitenize yönlendirin
- SSL sertifikası aktif edin
- WWW yönlendirmesi ayarlayın