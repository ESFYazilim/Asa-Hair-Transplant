# 🚀 HOSTİNGER'E 2 DAKİKADA YÜKLEME

## YÖNTEM 1: FileZilla ile (EN KOLAY)

### Adım 1: FileZilla İndir
- https://filezilla-project.org/ adresinden ücretsiz indir

### Adım 2: Hostinger FTP Bilgilerini Al
1. Hostinger'a giriş yap
2. **FTP Accounts** bölümüne git
3. Bilgileri kopyala:
   - Host: ftp.yourdomain.com
   - Username: ...
   - Password: ...
   - Port: 21

### Adım 3: FileZilla'ya Bağlan
1. FileZilla'yı aç
2. Host, Username, Password, Port bilgilerini gir
3. **Quickconnect** tıkla

### Adım 4: Dosyaları Sürükle-Bırak
1. Sol tarafta (Local): `dist/` klasörüne git
2. Sağ tarafta (Remote): `public_html/` klasörüne git
3. Sağ taraftaki eski dosyaları sil
4. Sol taraftaki `dist/` içindeki BÜTÜN dosyaları seç
5. Sağ tarafa sürükle-bırak

BITTI! ✅

---

## YÖNTEM 2: Hostinger File Manager (YAVAŞ AMA İŞE YARAR)

### Adım 1: File Manager'ı Aç
1. Hostinger'a giriş yap
2. **File Manager** tıkla
3. `public_html/` klasörüne git

### Adım 2: Eski Dosyaları Sil
- İçindeki tüm dosyaları seç → Delete

### Adım 3: Yeni Dosyaları Yükle
1. **Upload** butonuna tıkla
2. `dist/` klasöründeki dosyaları seç:
   - index.html
   - .htaccess
   - _redirects
   - Asa Hair Transplant-renkli.png
   
3. Klasörleri yükle:
   - api/ klasörünü yükle (içinde send-email.php var)
   - assets/ klasörünü yükle (içinde CSS ve JS var)

### Adım 4: İzinleri Ayarla
1. `api/send-email.php` → sağ tık → Permissions → 755
2. `.htaccess` → sağ tık → Permissions → 644

BITTI! ✅

---

## TEST ET

Tarayıcıda aç: `https://yourdomain.com`

Çalışmıyorsa:
1. Cache temizle (Ctrl + F5)
2. `.htaccess` dosyasının yüklendiğini kontrol et
3. `index.html` dosyasının `public_html/` içinde olduğunu kontrol et

---

## SORUN MU VAR?

**Beyaz sayfa görüyorum:**
- F12 bas → Console → Hataları oku
- Genellikle: dosyalar yanlış yere yüklenmiş
- Düzelt: `public_html/dist/index.html` değil, `public_html/index.html` olmalı

**404 hatası:**
- `.htaccess` yüklenmemiş
- Yükle ve 644 izni ver

**Email çalışmıyor:**
- Hostinger cPanel → Email Accounts
- `info@yourdomain.com` oluştur
- PHP mail() aktif mi kontrol et

