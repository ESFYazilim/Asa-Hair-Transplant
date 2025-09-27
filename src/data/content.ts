export interface ContentData {
  navigation: {
    home: string;
    services: string;
    about: string;
    achievements: string;
    testimonials: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta1: string;
    cta2: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    highlights: string[];
  };
  achievements: {
    title: string;
    subtitle: string;
    stats: Array<{
      number: string;
      label: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      role: string;
      content: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
    info: Array<{
      title: string;
      details: string;
      subtitle: string;
    }>;
  };
  meta: {
    title: string;
    description: string;
  };
}

export const content: Record<string, ContentData> = {
  tr: {
    navigation: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      about: 'Hakkımızda',
      achievements: 'Başarılar',
      testimonials: 'Hasta Yorumları',
      contact: 'İletişim'
    },
    hero: {
      title: 'Türkiye\'de Saç Ekimi',
      subtitle: 'DHI ve FUE Tekniği ile Profesyonel Hair Transplant',
      description: 'Kök hücre, PRP ve mezoterapi destekli saç ekimi ile doğal sonuçlar. Türkiye\'nin en deneyimli saç ekim uzmanları ile medikal estetik hizmetleri.',
      cta1: 'Ücretsiz Konsültasyon',
      cta2: 'Hizmetlerimizi Keşfedin'
    },
    services: {
      title: 'Saç Ekimi ve Medikal Estetik Hizmetlerimiz',
      subtitle: 'DHI, FUE tekniği ile saç ekimi, PRP, mezoterapi, kök hücre ve eksozom tedavileri ile kapsamlı çözümler sunuyoruz.',
      items: [
        {
          title: 'DHI Saç Ekimi',
          description: 'Direct Hair Implantation tekniği ile kanal açmadan direkt saç ekimi. Daha hızlı iyileşme ve doğal sonuçlar.'
        },
        {
          title: 'FUE Hair Transplant',
          description: 'Follicular Unit Extraction yöntemi ile tek tek folikül alımı. Iz bırakmayan modern saç ekim tekniği.'
        },
        {
          title: 'PRP Tedavisi',
          description: 'Platelet Rich Plasma ile saç köklerinin güçlendirilmesi. Saç dökülmesini durduran doğal tedavi yöntemi.'
        },
        {
          title: 'Kök Hücre ve Eksozom',
          description: 'Yenilikçi kök hücre ve eksozom tedavileri ile saç foliküllerinin rejenerasyonu ve yoğunlaştırılması.'
        }
      ]
    },
    about: {
      title: 'Türkiye\'de Saç Ekimi Lideri',
      description1: 'Medikal turizm alanında 15 yılı aşkın deneyimimizle, DHI ve FUE saç ekimi tekniklerinde uzmanlaşmış ekibimiz ile hizmet veriyoruz. PRP, mezoterapi, kök hücre ve eksozom tedavileri ile desteklenen saç ekim süreçlerimiz, uluslararası standartlarda sonuçlar sunmaktadır.',
      description2: 'Hair transplant Turkey\'de öncü konumumuzla, dünya çapında hastalarımıza güvenli ve etkili saç ekimi çözümleri sunuyoruz. Modern tesislerimizde, deneyimli doktor kadromuz ile her hastaya özel tedavi planları hazırlıyoruz.',
      highlights: [
        '15+ yıl saç ekimi deneyimi',
        'DHI ve FUE sertifikalı uzmanlar',
        'PRP ve kök hücre tedavi merkezi',
        'Uluslararası hasta memnuniyeti',
        'Medikal turizm akreditasyonu',
        'Eksozom tedavi teknolojisi'
      ]
    },
    achievements: {
      title: 'Saç Ekimi Başarılarımız',
      subtitle: 'Hair transplant Turkey alanında elde ettiğimiz başarılar ve hasta memnuniyetimizi gösteren rakamlar.',
      stats: [
        {
          number: '8,000+',
          label: 'Başarılı Saç Ekimi',
          description: 'DHI ve FUE ile'
        },
        {
          number: '15+',
          label: 'Yıl Deneyim',
          description: 'Medikal estetik alanında'
        },
        {
          number: '98%',
          label: 'Hasta Memnuniyeti',
          description: 'Saç ekimi sonuçları'
        },
        {
          number: '50+',
          label: 'Ülkeden Hasta',
          description: 'Medikal turizm'
        }
      ]
    },
    testimonials: {
      title: 'Saç Ekimi Hasta Yorumları',
      subtitle: 'DHI ve FUE saç ekimi, PRP tedavisi deneyimleyen hastalarımızın gerçek yorumları.',
      items: [
        {
          name: 'Mehmet Yılmaz',
          role: 'Mühendis',
          content: 'DHI saç ekimi sonrasında beklediğimden çok daha doğal sonuçlar aldım. PRP tedavisi ile desteklenen süreç mükemmeldi.'
        },
        {
          name: 'John Smith',
          role: 'Business Manager',
          content: 'Hair transplant Turkey experience was exceptional. FUE technique and aftercare service exceeded my expectations completely.'
        },
        {
          name: 'Hans Mueller',
          role: 'Architekt',
          content: 'Die Haartransplantation in der Türkei war perfekt organisiert. DHI-Technik und Nachsorge waren erstklassig.'
        }
      ]
    },
    contact: {
      title: 'Saç Ekimi Konsültasyonu',
      subtitle: 'DHI, FUE saç ekimi, PRP ve kök hücre tedavileri hakkında ücretsiz konsültasyon için bizimle iletişime geçin.',
      form: {
        title: 'Ücretsiz Konsültasyon Formu',
        name: 'Ad Soyad',
        email: 'E-posta',
        phone: 'Telefon',
        message: 'Mesajınız',
        submit: 'Konsültasyon Talep Et'
      },
      info: [
        {
          title: 'Telefon',
          details: '+90 212 XXX XX XX',
          subtitle: '7/24 Destek Hattı'
        },
        {
          title: 'E-posta',
          details: 'info@asasacekim.com',
          subtitle: 'Hızlı yanıt garantisi'
        },
        {
          title: 'Adres',
          details: 'Nişantaşı, Medikal Plaza, İstanbul',
          subtitle: 'Türkiye'
        },
        {
          title: 'Çalışma Saatleri',
          details: 'Pzt-Pzr: 09:00 - 19:00',
          subtitle: 'Randevu sistemi'
        }
      ]
    },
    meta: {
      title: 'Saç Ekimi Türkiye | DHI FUE Hair Transplant | PRP Kök Hücre',
      description: 'Türkiye\'de saç ekimi lideri! DHI ve FUE tekniği, PRP, mezoterapi, kök hücre tedavileri. Hair transplant Turkey\'de en iyi sonuçlar için hemen iletişime geçin.'
    }
  },
  en: {
    navigation: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      achievements: 'Achievements',
      testimonials: 'Patient Reviews',
      contact: 'Contact'
    },
    hero: {
      title: 'Hair Transplant Turkey',
      subtitle: 'Professional DHI and FUE Hair Transplant Techniques',
      description: 'Natural results with stem cell, PRP and mesotherapy supported hair transplant. Medical aesthetic services with Turkey\'s most experienced hair transplant specialists.',
      cta1: 'Free Consultation',
      cta2: 'Discover Our Services'
    },
    services: {
      title: 'Hair Transplant and Medical Aesthetic Services',
      subtitle: 'Comprehensive solutions with DHI, FUE hair transplant techniques, PRP, mesotherapy, stem cell and exosome treatments.',
      items: [
        {
          title: 'DHI Hair Transplant',
          description: 'Direct Hair Implantation technique with direct hair transplant without channel opening. Faster healing and natural results.'
        },
        {
          title: 'FUE Hair Transplant',
          description: 'Individual follicle extraction with Follicular Unit Extraction method. Modern hair transplant technique without scarring.'
        },
        {
          title: 'PRP Treatment',
          description: 'Strengthening hair roots with Platelet Rich Plasma. Natural treatment method that stops hair loss.'
        },
        {
          title: 'Stem Cell & Exosome',
          description: 'Regeneration and densification of hair follicles with innovative stem cell and exosome treatments.'
        }
      ]
    },
    about: {
      title: 'Hair Transplant Leader in Turkey',
      description1: 'With over 15 years of experience in medical tourism, we serve with our team specialized in DHI and FUE hair transplant techniques. Our hair transplant processes supported by PRP, mesotherapy, stem cell and exosome treatments offer international standard results.',
      description2: 'As a pioneer in hair transplant Turkey, we provide safe and effective hair transplant solutions to patients worldwide. In our modern facilities, we prepare personalized treatment plans for each patient with our experienced medical team.',
      highlights: [
        '15+ years hair transplant experience',
        'DHI and FUE certified specialists',
        'PRP and stem cell treatment center',
        'International patient satisfaction',
        'Medical tourism accreditation',
        'Exosome treatment technology'
      ]
    },
    achievements: {
      title: 'Our Hair Transplant Achievements',
      subtitle: 'Numbers showing our success in hair transplant Turkey field and patient satisfaction.',
      stats: [
        {
          number: '8,000+',
          label: 'Successful Hair Transplants',
          description: 'With DHI and FUE'
        },
        {
          number: '15+',
          label: 'Years Experience',
          description: 'In medical aesthetics'
        },
        {
          number: '98%',
          label: 'Patient Satisfaction',
          description: 'Hair transplant results'
        },
        {
          number: '50+',
          label: 'Countries Served',
          description: 'Medical tourism'
        }
      ]
    },
    testimonials: {
      title: 'Hair Transplant Patient Reviews',
      subtitle: 'Real reviews from our patients who experienced DHI and FUE hair transplant, PRP treatment.',
      items: [
        {
          name: 'Michael Johnson',
          role: 'Software Engineer',
          content: 'My hair transplant Turkey experience was outstanding. DHI technique results were incredibly natural, beyond my expectations.'
        },
        {
          name: 'David Wilson',
          role: 'Marketing Director',
          content: 'FUE hair transplant with PRP support gave amazing results. The medical team was professional and caring throughout the process.'
        },
        {
          name: 'Robert Brown',
          role: 'Consultant',
          content: 'Stem cell and exosome treatments enhanced my hair transplant results significantly. Highly recommend this clinic in Turkey.'
        }
      ]
    },
    contact: {
      title: 'Hair Transplant Consultation',
      subtitle: 'Contact us for free consultation about DHI, FUE hair transplant, PRP and stem cell treatments.',
      form: {
        title: 'Free Consultation Form',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Your Message',
        submit: 'Request Consultation'
      },
      info: [
        {
          title: 'Phone',
          details: '+90 212 XXX XX XX',
          subtitle: '24/7 Support Line'
        },
        {
          title: 'Email',
          details: 'info@asahairturkey.com',
          subtitle: 'Quick response guarantee'
        },
        {
          title: 'Address',
          details: 'Nişantaşı, Medical Plaza, Istanbul',
          subtitle: 'Turkey'
        },
        {
          title: 'Working Hours',
          details: 'Mon-Sun: 09:00 - 19:00',
          subtitle: 'Appointment system'
        }
      ]
    },
    meta: {
      title: 'Hair Transplant Turkey | DHI FUE Techniques | PRP Stem Cell',
      description: 'Leading hair transplant Turkey clinic! DHI and FUE techniques, PRP, mesotherapy, stem cell treatments. Contact now for best hair transplant results in Turkey.'
    }
  },
  de: {
    navigation: {
      home: 'Startseite',
      services: 'Leistungen',
      about: 'Über Uns',
      achievements: 'Erfolge',
      testimonials: 'Patientenbewertungen',
      contact: 'Kontakt'
    },
    hero: {
      title: 'Haartransplantation Türkei',
      subtitle: 'Professionelle DHI und FUE Haartransplantation',
      description: 'Natürliche Ergebnisse mit Stammzellen, PRP und Mesotherapie unterstützter Haartransplantation. Medizinisch-ästhetische Dienstleistungen mit den erfahrensten Haartransplantations-Spezialisten der Türkei.',
      cta1: 'Kostenlose Beratung',
      cta2: 'Unsere Leistungen'
    },
    services: {
      title: 'Haartransplantation und Medizinisch-Ästhetische Leistungen',
      subtitle: 'Umfassende Lösungen mit DHI, FUE Haartransplantationstechniken, PRP, Mesotherapie, Stammzell- und Exosom-Behandlungen.',
      items: [
        {
          title: 'DHI Haartransplantation',
          description: 'Direct Hair Implantation Technik mit direkter Haartransplantation ohne Kanalöffnung. Schnellere Heilung und natürliche Ergebnisse.'
        },
        {
          title: 'FUE Haartransplantation',
          description: 'Einzelne Follikelentnahme mit Follicular Unit Extraction Methode. Moderne Haartransplantationstechnik ohne Narbenbildung.'
        },
        {
          title: 'PRP Behandlung',
          description: 'Stärkung der Haarwurzeln mit Platelet Rich Plasma. Natürliche Behandlungsmethode gegen Haarausfall.'
        },
        {
          title: 'Stammzellen & Exosome',
          description: 'Regeneration und Verdichtung der Haarfollikel mit innovativen Stammzell- und Exosom-Behandlungen.'
        }
      ]
    },
    about: {
      title: 'Haartransplantations-Marktführer in der Türkei',
      description1: 'Mit über 15 Jahren Erfahrung im Medizintourismus bieten wir Dienstleistungen mit unserem auf DHI und FUE Haartransplantationstechniken spezialisierten Team an. Unsere durch PRP, Mesotherapie, Stammzell- und Exosom-Behandlungen unterstützten Haartransplantationsprozesse bieten internationale Standardergebnisse.',
      description2: 'Als Pionier der Haartransplantation Türkei bieten wir Patienten weltweit sichere und effektive Haartransplantationslösungen. In unseren modernen Einrichtungen erstellen wir mit unserem erfahrenen Ärzteteam individuelle Behandlungspläne für jeden Patienten.',
      highlights: [
        '15+ Jahre Haartransplantationserfahrung',
        'DHI und FUE zertifizierte Spezialisten',
        'PRP und Stammzell-Behandlungszentrum',
        'Internationale Patientenzufriedenheit',
        'Medizintourismus-Akkreditierung',
        'Exosom-Behandlungstechnologie'
      ]
    },
    achievements: {
      title: 'Unsere Haartransplantations-Erfolge',
      subtitle: 'Zahlen, die unseren Erfolg im Bereich Haartransplantation Türkei und unsere Patientenzufriedenheit zeigen.',
      stats: [
        {
          number: '8.000+',
          label: 'Erfolgreiche Haartransplantationen',
          description: 'Mit DHI und FUE'
        },
        {
          number: '15+',
          label: 'Jahre Erfahrung',
          description: 'In der medizinischen Ästhetik'
        },
        {
          number: '98%',
          label: 'Patientenzufriedenheit',
          description: 'Haartransplantationsergebnisse'
        },
        {
          number: '50+',
          label: 'Länder Betreut',
          description: 'Medizintourismus'
        }
      ]
    },
    testimonials: {
      title: 'Haartransplantations-Patientenbewertungen',
      subtitle: 'Echte Bewertungen unserer Patienten, die DHI und FUE Haartransplantation, PRP-Behandlung erlebt haben.',
      items: [
        {
          name: 'Thomas Schmidt',
          role: 'Ingenieur',
          content: 'Meine Haartransplantation Türkei Erfahrung war außergewöhnlich. DHI-Technik Ergebnisse waren unglaublich natürlich, über meine Erwartungen hinaus.'
        },
        {
          name: 'Andreas Weber',
          role: 'Geschäftsführer',
          content: 'FUE Haartransplantation mit PRP-Unterstützung gab erstaunliche Ergebnisse. Das medizinische Team war professionell und fürsorglich.'
        },
        {
          name: 'Klaus Müller',
          role: 'Berater',
          content: 'Stammzell- und Exosom-Behandlungen verbesserten meine Haartransplantationsergebnisse erheblich. Sehr empfehlenswerte Klinik in der Türkei.'
        }
      ]
    },
    contact: {
      title: 'Haartransplantations-Beratung',
      subtitle: 'Kontaktieren Sie uns für eine kostenlose Beratung über DHI, FUE Haartransplantation, PRP und Stammzellbehandlungen.',
      form: {
        title: 'Kostenlose Beratungsformular',
        name: 'Vollständiger Name',
        email: 'E-Mail',
        phone: 'Telefon',
        message: 'Ihre Nachricht',
        submit: 'Beratung Anfordern'
      },
      info: [
        {
          title: 'Telefon',
          details: '+90 212 XXX XX XX',
          subtitle: '24/7 Support-Hotline'
        },
        {
          title: 'E-Mail',
          details: 'info@asahaartransplantation.com',
          subtitle: 'Schnelle Antwortgarantie'
        },
        {
          title: 'Adresse',
          details: 'Nişantaşı, Medical Plaza, Istanbul',
          subtitle: 'Türkei'
        },
        {
          title: 'Arbeitszeiten',
          details: 'Mo-So: 09:00 - 19:00',
          subtitle: 'Terminvereinbarung'
        }
      ]
    },
    meta: {
      title: 'Haartransplantation Türkei | DHI FUE Techniken | PRP Stammzellen',
      description: 'Führende Haartransplantation Türkei Klinik! DHI und FUE Techniken, PRP, Mesotherapie, Stammzellbehandlungen. Kontaktieren Sie uns jetzt für beste Haartransplantationsergebnisse.'
    }
  }
};