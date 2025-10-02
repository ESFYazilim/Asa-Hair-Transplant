interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// EmailJS ile direkt email gönderimi
export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // EmailJS public key ve service ID'leri
    const serviceId = 'service_gmail'; // EmailJS'de oluşturacağınız service ID
    const templateId = 'template_contact'; // EmailJS'de oluşturacağınız template ID
    const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // EmailJS public key

    const templateParams = {
      to_email: 'info@asahairtransplant.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      reply_to: formData.email,
      subject: `Saç Ekimi Konsültasyon Talebi - ${formData.name}`
    };

    // EmailJS send fonksiyonu
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: templateParams
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Email gönderimi hatası:', error);
    return false;
  }
};

// Basit fetch ile backend email gönderimi (alternatif)
export const sendEmailViaBackend = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // Hostinger için PHP backend endpoint'i
    const response = await fetch('/api/send-email.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Backend email gönderimi hatası:', error);
    // Hostinger'da email gönderimi başarısız olursa, mailto ile fallback
    const subject = encodeURIComponent(`Saç Ekimi Konsültasyon Talebi - ${formData.name}`);
    const body = encodeURIComponent(`
Ad Soyad: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || 'Belirtilmemiş'}

Mesaj:
${formData.message}

Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}
    `);
    
    window.location.href = `mailto:info@asahairtransplant.com?subject=${subject}&body=${body}`;
    return true;
  }
};