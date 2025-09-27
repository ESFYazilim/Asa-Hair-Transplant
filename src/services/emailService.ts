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
    const response = await fetch('/.netlify/functions/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@asahairtransplant.com',
        subject: `Saç Ekimi Konsültasyon Talebi - ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
              🌟 Yeni Konsültasyon Talebi
            </h2>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #065f46; margin-top: 0;">👤 Hasta Bilgileri</h3>
              <p><strong>📝 Ad Soyad:</strong> ${formData.name}</p>
              <p><strong>📧 Email:</strong> ${formData.email}</p>
              <p><strong>📱 Telefon:</strong> ${formData.phone || 'Belirtilmemiş'}</p>
            </div>
            
            <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #065f46; margin-top: 0;">💬 Mesaj</h3>
              <p style="line-height: 1.6; color: #374151;">${formData.message}</p>
            </div>
            
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                📅 Gönderim Tarihi: ${new Date().toLocaleString('tr-TR')}
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px;">
                Bu mesaj ASA Saç Ekim web sitesi iletişim formundan gönderilmiştir.
              </p>
            </div>
          </div>
        `
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Backend email gönderimi hatası:', error);
    return false;
  }
};