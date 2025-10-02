# 🚀 HOSTİNGER KURULUM REHBERİ

## ⚠️ ÖNEMLİ NOTLAR
Bu rehberi adım adım takip edin. Hostinger'da siteniz sorunsuz çalışacaktır.

---

## 📦 1. ADIM: Build Alma (Tamamlandı ✅)
Build işlemi tamamlanmış durumda. `dist/` klasörü hazır.

---

## 📂 2. ADIM: Dosyaları Hostinger'a Yükleme

### 2.1. Hostinger File Manager veya FTP ile Giriş Yapın

### 2.2. public_html Klasörünü Temizleyin
- `public_html/` klasörüne gidin
- İçindeki TÜM eski dosyaları silin (yedeklediyseniz)

### 2.3. dist/ Klasöründeki Dosyaları Yükleyin
**ÇOK ÖNEMLİ:** `dist` klasörünün kendisini değil, **içindekileri** yükleyin!

Yüklemeniz gereken dosyalar:
```
public_html/
├── index.html                           ← dist/index.html
├── .htaccess                            ← dist/.htaccess
├── _redirects                           ← dist/_redirects
├── Asa Hair Transplant-renkli.png      ← dist/Asa Hair Transplant-renkli.png
├── api/                                 ← dist/api/
│   └── send-email.php
└── assets/                              ← dist/assets/
    ├── index-CC6SjOId.css
    └── index-DsfMJQm2.js
```

**DOĞRU ❌:**
```
public_html/dist/index.html  (YANLIŞ!)
```

**YANLIŞ ✅:**
```
public_html/index.html  (DOĞRU!)
```

---

## 🔐 3. ADIM: Dosya İzinlerini Ayarlama

Hostinger File Manager'da:

1. `api/send-email.php` dosyasına sağ tıklayın
   - Permissions → **755** olarak ayarlayın

2. `.htaccess` dosyasına sağ tıklayın
   - Permissions → **644** olarak ayarlayın

---

## 📧 4. ADIM: Email Ayarları

### 4.1. Email Hesabı Oluşturma
1. Hostinger cPanel'e girin
2. **Email Accounts** bölümüne gidin
3. Yeni email oluşturun: `info@yourdomain.com`
   - Güçlü bir şifre belirleyin
   - Quota: En az 250 MB

### 4.2. PHP mail() Fonksiyonunu Kontrol Edin
1. cPanel'de **Select PHP Version** bölümüne gidin
2. PHP 8.0 veya üzeri seçin
3. `mail` fonksiyonunun aktif olduğundan emin olun

---

## 🧪 5. ADIM: Test Etme

### 5.1. Site Açılıyor mu?
- Tarayıcıda `https://yourdomain.com` adresini açın
- Ana sayfa yüklenmeli

### 5.2. İletişim Formu Çalışıyor mu?
- Contact bölümüne gidin
- Formu doldurup test edin
- Email gelip gelmediğini kontrol edin
- **Not:** Spam klasörünü de kontrol edin!

### 5.3. WhatsApp Butonları Çalışıyor mu?
- WhatsApp butonlarına tıklayın
- WhatsApp Web/App açılmalı

### 5.4. Dil Değiştirme Çalışıyor mu?
- Sağ üstteki dil seçiciyi test edin
- TR/EN/RU arasında geçiş yapın

---

## 🔧 SORUN GİDERME

### Beyaz Sayfa (Blank Page)
**Çözüm:**
1. Tarayıcıda F12 basın → Console sekmesini açın
2. Kırmızı hataları kontrol edin
3. Genellikle dosya yolu hatası vardır
4. `dist/` klasörünün içeriğini doğru yere yüklediğinizden emin olun

### 404 Not Found Hatası
**Çözüm:**
1. `.htaccess` dosyasının `public_html/` içinde olduğunu kontrol edin
2. `.htaccess` izinlerinin 644 olduğunu kontrol edin

### Email Gönderilmiyor
**Çözüm 1: PHP mail() Problemi**
1. cPanel → Select PHP Version
2. PHP 8.0+ seçin
3. `mail` extension'ı aktif edin

**Çözüm 2: Email Hesabı Yok**
1. cPanel → Email Accounts
2. `info@yourdomain.com` hesabını oluşturun

**Çözüm 3: Spam Filtresi**
- Gelen kutusunda yoksa spam klasörünü kontrol edin

### CSS Yüklenmiyor (Stiller Yok)
**Çözüm:**
1. `assets/` klasörünün `public_html/assets/` konumunda olduğunu kontrol edin
2. Tarayıcı cache'ini temizleyin (Ctrl + F5)

### JavaScript Çalışmıyor
**Çözüm:**
1. Console'da JavaScript hatalarını kontrol edin
2. `assets/` klasörünün doğru konumda olduğunu kontrol edin
3. HTTPS kullanıyorsanız mixed content hatası olabilir

---

## 🌐 6. ADIM: Domain ve SSL Ayarları

### 6.1. Domain Yönlendirme
1. Hostinger → Domains
2. Domain'inizi seçin
3. `public_html` klasörüne yönlendirildiğinden emin olun

### 6.2. SSL Sertifikası
1. Hostinger → SSL
2. Free SSL (Let's Encrypt) aktif edin
3. Force HTTPS aktif edin

### 6.3. WWW Yönlendirmesi
`.htaccess` dosyasında zaten ayarlı:
```apache
RewriteCond %{HTTP_HOST} !^www\.
RewriteRule ^(.*)$ https://www.%{HTTP_HOST}/$1 [R=301,L]
```

---

## ✅ KONTROL LİSTESİ

- [ ] dist/ içeriği public_html/'e yüklendi
- [ ] index.html public_html/ içinde
- [ ] .htaccess public_html/ içinde (izin: 644)
- [ ] assets/ klasörü public_html/assets/ konumunda
- [ ] api/send-email.php dosyası var (izin: 755)
- [ ] Email hesabı oluşturuldu (info@domain.com)
- [ ] PHP 8.0+ seçili
- [ ] SSL sertifikası aktif
- [ ] Site açılıyor ve çalışıyor
- [ ] İletişim formu test edildi
- [ ] WhatsApp butonları test edildi
- [ ] Dil değiştirme test edildi

---

## 📞 DESTEK

Sorun devam ederse:
1. Hostinger cPanel → Error Logs
2. Hata loglarını kontrol edin
3. Hostinger support'a ticket açın

---

**🎉 Başarılar! Siteniz artık yayında!**
