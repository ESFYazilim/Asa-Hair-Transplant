interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // EmailJS kullanarak direkt email gönderimi
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: 'service_asa_hair',
        template_id: 'template_contact',
        user_id: 'your_emailjs_user_id',
        template_params: {
          to_email: 'info@asahairtransplant.com',
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reply_to: formData.email
        }
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Email gönderimi hatası:', error);
    return false;
  }
};

// Alternatif olarak basit fetch ile backend'e gönderim
export const sendContactEmailSimple = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'info@asahairtransplant.com',
        subject: `Saç Ekimi Konsültasyon Talebi - ${formData.name}`,
        html: `
          <h2>Yeni Konsültasyon Talebi</h2>
          <p><strong>Ad Soyad:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telefon:</strong> ${formData.phone}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${formData.message}</p>
        `
      })
    });

    return response.ok;
  } catch (error) {
    console.error('Email gönderimi hatası:', error);
    return false;
  }
};