export interface ContentData {
  navigation: {
    home: string;
    services: string;
    treatments: string;
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
    whatsapp: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  treatments: {
    title: string;
    subtitle: string;
    categories: Array<{
      title: string;
      items: Array<{
        title: string;
        description: string;
        benefits: string[];
        process: string;
        duration: string;
        recovery: string;
      }>;
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
    whatsapp: {
      title: string;
      subtitle: string;
      number: string;
    };
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
      treatments: 'Tedaviler',
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
      cta2: 'Hizmetlerimizi Keşfedin',
      whatsapp: 'WhatsApp İletişim'
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
    treatments: {
      title: 'Detaylı Tedavi Bilgileri',
      subtitle: 'Saç ekimi, sakal ekimi ve destekleyici tedaviler hakkında kapsamlı bilgiler.',
      categories: [
        {
          title: 'Saç Ekimi Teknikleri',
          items: [
            {
              title: 'DHI Saç Ekimi',
              description: 'Direct Hair Implantation (DHI) tekniği, saç foliküllerinin özel kalemler kullanılarak direkt olarak ekildiği en gelişmiş yöntemdir.',
              benefits: [
                'Kanal açma işlemi gerektirmez',
                'Daha hızlı iyileşme süreci',
                'Minimum travma ve kanama',
                'Doğal saç çıkış açısı',
                'Yoğun ekim imkanı'
              ],
              process: 'Foliküller tek tek alınır ve özel DHI kalemi ile direkt ekilir. İşlem lokal anestezi altında yapılır.',
              duration: '6-8 saat',
              recovery: '3-5 gün'
            },
            {
              title: 'FUE Saç Ekimi',
              description: 'Follicular Unit Extraction (FUE) yöntemi ile saç folikülleri tek tek alınarak hedef bölgeye nakledilir.',
              benefits: [
                'İz bırakmayan teknik',
                'Hızlı iyileşme',
                'Doğal görünüm',
                'Geniş alan ekimi',
                'Minimal ağrı'
              ],
              process: 'Foliküller mikromotor ile alınır, kanallar açılır ve foliküller yerleştirilir.',
              duration: '4-6 saat',
              recovery: '7-10 gün'
            }
          ]
        },
        {
          title: 'Sakal ve Bıyık Ekimi',
          items: [
            {
              title: 'Sakal Ekimi',
              description: 'Sakal bölgesindeki seyreklik veya tamamen sakal olmaması durumunda uygulanan ekim işlemidir.',
              benefits: [
                'Doğal sakal görünümü',
                'Kalıcı sonuçlar',
                'İstenilen yoğunluk',
                'Şekil verme imkanı',
                'Özgüven artışı'
              ],
              process: 'Ense bölgesinden alınan foliküller sakal bölgesine FUE veya DHI tekniği ile ekilir.',
              duration: '3-5 saat',
              recovery: '5-7 gün'
            },
            {
              title: 'Bıyık Ekimi',
              description: 'Bıyık bölgesindeki seyreklik için uygulanan hassas ekim işlemidir.',
              benefits: [
                'Doğal bıyık çizgisi',
                'Yoğun görünüm',
                'Kalıcı sonuç',
                'Estetik görünüm'
              ],
              process: 'Tek tek folikül alımı ve hassas ekim ile doğal bıyık çizgisi oluşturulur.',
              duration: '2-3 saat',
              recovery: '3-5 gün'
            }
          ]
        },
        {
          title: 'Destekleyici Tedaviler',
          items: [
            {
              title: 'PRP Tedavisi',
              description: 'Platelet Rich Plasma (PRP) tedavisi, kişinin kendi kanından elde edilen trombositlerle saç köklerinin güçlendirilmesidir.',
              benefits: [
                'Saç dökülmesini durdurur',
                'Saç kalitesini artırır',
                'Doğal tedavi yöntemi',
                'Yan etkisi yoktur',
                'Saç yoğunluğunu artırır'
              ],
              process: 'Kan alınır, santrifüj edilir ve elde edilen PRP saç derisine enjekte edilir.',
              duration: '30-45 dakika',
              recovery: 'Hemen normal yaşama dönüş'
            },
            {
              title: 'Mezoterapi',
              description: 'Saç derisine vitamin, mineral ve büyüme faktörlerinin enjekte edildiği tedavi yöntemidir.',
              benefits: [
                'Saç köklerini besler',
                'Kan dolaşımını artırır',
                'Saç büyümesini hızlandırır',
                'Saç kalitesini iyileştirir',
                'Saç dökülmesini azaltır'
              ],
              process: 'Özel vitamin kokteyli saç derisine ince iğnelerle enjekte edilir.',
              duration: '20-30 dakika',
              recovery: 'Hemen normal yaşama dönüş'
            },
            {
              title: 'Kök Hücre Tedavisi',
              description: 'Adipoz kaynaklı kök hücreler ile saç foliküllerinin rejenerasyonu ve yenilenmesi sağlanır.',
              benefits: [
                'Folikül rejenerasyonu',
                'Saç kalitesi artışı',
                'Uzun süreli etki',
                'Doğal yenilenme',
                'Anti-aging etkisi'
              ],
              process: 'Yağ dokusundan kök hücreler izole edilir ve saç derisine uygulanır.',
              duration: '2-3 saat',
              recovery: '1-2 gün'
            },
            {
              title: 'Eksozom Tedavisi',
              description: 'Kök hücre kaynaklı eksozomlar ile saç foliküllerinin aktivasyonu ve güçlendirilmesi.',
              benefits: [
                'Hızlı sonuç',
                'Güçlü rejenerasyon',
                'Minimal invaziv',
                'Yüksek etkinlik',
                'Güvenli uygulama'
              ],
              process: 'Eksozom solüsyonu saç derisine mikroenjeksiyon ile uygulanır.',
              duration: '45-60 dakika',
              recovery: 'Hemen normal yaşama dönüş'
            }
          ]
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
      whatsapp: {
        title: 'WhatsApp İletişim',
        subtitle: 'Hızlı destek için WhatsApp üzerinden ulaşın',
        number: '+905331443271'
      },
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
      treatments: 'Treatments',
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
      cta2: 'Discover Our Services',
      whatsapp: 'WhatsApp Contact'
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
    treatments: {
      title: 'Detailed Treatment Information',
      subtitle: 'Comprehensive information about hair transplant, beard transplant and supportive treatments.',
      categories: [
        {
          title: 'Hair Transplant Techniques',
          items: [
            {
              title: 'DHI Hair Transplant',
              description: 'Direct Hair Implantation (DHI) technique is the most advanced method where hair follicles are directly implanted using special pens.',
              benefits: [
                'No channel opening required',
                'Faster healing process',
                'Minimal trauma and bleeding',
                'Natural hair growth angle',
                'Dense implantation possibility'
              ],
              process: 'Follicles are extracted individually and directly implanted with special DHI pen. Procedure is performed under local anesthesia.',
              duration: '6-8 hours',
              recovery: '3-5 days'
            },
            {
              title: 'FUE Hair Transplant',
              description: 'Follicular Unit Extraction (FUE) method where hair follicles are individually extracted and transplanted to target area.',
              benefits: [
                'Scarless technique',
                'Fast healing',
                'Natural appearance',
                'Large area transplantation',
                'Minimal pain'
              ],
              process: 'Follicles are extracted with micromotor, channels are opened and follicles are placed.',
              duration: '4-6 hours',
              recovery: '7-10 days'
            }
          ]
        },
        {
          title: 'Beard and Mustache Transplant',
          items: [
            {
              title: 'Beard Transplant',
              description: 'Transplantation procedure applied in case of sparse beard area or complete absence of beard.',
              benefits: [
                'Natural beard appearance',
                'Permanent results',
                'Desired density',
                'Shaping possibility',
                'Confidence boost'
              ],
              process: 'Follicles taken from nape area are transplanted to beard area with FUE or DHI technique.',
              duration: '3-5 hours',
              recovery: '5-7 days'
            },
            {
              title: 'Mustache Transplant',
              description: 'Precise transplantation procedure applied for sparse mustache area.',
              benefits: [
                'Natural mustache line',
                'Dense appearance',
                'Permanent result',
                'Aesthetic appearance'
              ],
              process: 'Individual follicle extraction and precise transplantation creates natural mustache line.',
              duration: '2-3 hours',
              recovery: '3-5 days'
            }
          ]
        },
        {
          title: 'Supportive Treatments',
          items: [
            {
              title: 'PRP Treatment',
              description: 'Platelet Rich Plasma (PRP) treatment strengthens hair roots with platelets obtained from person\'s own blood.',
              benefits: [
                'Stops hair loss',
                'Improves hair quality',
                'Natural treatment method',
                'No side effects',
                'Increases hair density'
              ],
              process: 'Blood is drawn, centrifuged and obtained PRP is injected into scalp.',
              duration: '30-45 minutes',
              recovery: 'Immediate return to normal life'
            },
            {
              title: 'Mesotherapy',
              description: 'Treatment method where vitamins, minerals and growth factors are injected into scalp.',
              benefits: [
                'Nourishes hair roots',
                'Increases blood circulation',
                'Accelerates hair growth',
                'Improves hair quality',
                'Reduces hair loss'
              ],
              process: 'Special vitamin cocktail is injected into scalp with fine needles.',
              duration: '20-30 minutes',
              recovery: 'Immediate return to normal life'
            },
            {
              title: 'Stem Cell Treatment',
              description: 'Regeneration and renewal of hair follicles with adipose-derived stem cells.',
              benefits: [
                'Follicle regeneration',
                'Hair quality improvement',
                'Long-lasting effect',
                'Natural renewal',
                'Anti-aging effect'
              ],
              process: 'Stem cells are isolated from adipose tissue and applied to scalp.',
              duration: '2-3 hours',
              recovery: '1-2 days'
            },
            {
              title: 'Exosome Treatment',
              description: 'Activation and strengthening of hair follicles with stem cell-derived exosomes.',
              benefits: [
                'Fast results',
                'Strong regeneration',
                'Minimally invasive',
                'High effectiveness',
                'Safe application'
              ],
              process: 'Exosome solution is applied to scalp with microinjection.',
              duration: '45-60 minutes',
              recovery: 'Immediate return to normal life'
            }
          ]
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
      whatsapp: {
        title: 'WhatsApp Contact',
        subtitle: 'Reach us via WhatsApp for quick support',
        number: '+905331443271'
      },
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
      treatments: 'Behandlungen',
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
      cta2: 'Unsere Leistungen',
      whatsapp: 'WhatsApp Kontakt'
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
    treatments: {
      title: 'Detaillierte Behandlungsinformationen',
      subtitle: 'Umfassende Informationen über Haartransplantation, Barttransplantation und unterstützende Behandlungen.',
      categories: [
        {
          title: 'Haartransplantationstechniken',
          items: [
            {
              title: 'DHI Haartransplantation',
              description: 'Direct Hair Implantation (DHI) Technik ist die fortschrittlichste Methode, bei der Haarfollikel mit speziellen Stiften direkt implantiert werden.',
              benefits: [
                'Keine Kanalöffnung erforderlich',
                'Schnellerer Heilungsprozess',
                'Minimales Trauma und Blutung',
                'Natürlicher Haarwuchswinkel',
                'Dichte Implantationsmöglichkeit'
              ],
              process: 'Follikel werden einzeln entnommen und direkt mit speziellem DHI-Stift implantiert. Eingriff erfolgt unter örtlicher Betäubung.',
              duration: '6-8 Stunden',
              recovery: '3-5 Tage'
            },
            {
              title: 'FUE Haartransplantation',
              description: 'Follicular Unit Extraction (FUE) Methode, bei der Haarfollikel einzeln entnommen und in den Zielbereich transplantiert werden.',
              benefits: [
                'Narbenlose Technik',
                'Schnelle Heilung',
                'Natürliches Aussehen',
                'Großflächige Transplantation',
                'Minimale Schmerzen'
              ],
              process: 'Follikel werden mit Mikromotor entnommen, Kanäle geöffnet und Follikel platziert.',
              duration: '4-6 Stunden',
              recovery: '7-10 Tage'
            }
          ]
        },
        {
          title: 'Bart- und Schnurrbarttransplantation',
          items: [
            {
              title: 'Barttransplantation',
              description: 'Transplantationsverfahren bei spärlichem Bartwuchs oder völligem Fehlen des Bartes.',
              benefits: [
                'Natürliches Bartaussehen',
                'Dauerhafte Ergebnisse',
                'Gewünschte Dichte',
                'Formgebungsmöglichkeit',
                'Selbstvertrauen stärken'
              ],
              process: 'Follikel aus dem Nackenbereich werden mit FUE oder DHI-Technik in den Bartbereich transplantiert.',
              duration: '3-5 Stunden',
              recovery: '5-7 Tage'
            },
            {
              title: 'Schnurrbarttransplantation',
              description: 'Präzises Transplantationsverfahren für spärlichen Schnurrbartbereich.',
              benefits: [
                'Natürliche Schnurrbartlinie',
                'Dichtes Aussehen',
                'Dauerhaftes Ergebnis',
                'Ästhetisches Aussehen'
              ],
              process: 'Einzelne Follikelentnahme und präzise Transplantation schafft natürliche Schnurrbartlinie.',
              duration: '2-3 Stunden',
              recovery: '3-5 Tage'
            }
          ]
        },
        {
          title: 'Unterstützende Behandlungen',
          items: [
            {
              title: 'PRP Behandlung',
              description: 'Platelet Rich Plasma (PRP) Behandlung stärkt Haarwurzeln mit Thrombozyten aus eigenem Blut.',
              benefits: [
                'Stoppt Haarausfall',
                'Verbessert Haarqualität',
                'Natürliche Behandlungsmethode',
                'Keine Nebenwirkungen',
                'Erhöht Haardichte'
              ],
              process: 'Blut wird entnommen, zentrifugiert und gewonnenes PRP in die Kopfhaut injiziert.',
              duration: '30-45 Minuten',
              recovery: 'Sofortige Rückkehr zum normalen Leben'
            },
            {
              title: 'Mesotherapie',
              description: 'Behandlungsmethode, bei der Vitamine, Mineralien und Wachstumsfaktoren in die Kopfhaut injiziert werden.',
              benefits: [
                'Nährt Haarwurzeln',
                'Erhöht Durchblutung',
                'Beschleunigt Haarwachstum',
                'Verbessert Haarqualität',
                'Reduziert Haarausfall'
              ],
              process: 'Spezieller Vitamincocktail wird mit feinen Nadeln in die Kopfhaut injiziert.',
              duration: '20-30 Minuten',
              recovery: 'Sofortige Rückkehr zum normalen Leben'
            },
            {
              title: 'Stammzellbehandlung',
              description: 'Regeneration und Erneuerung der Haarfollikel mit aus Fettgewebe gewonnenen Stammzellen.',
              benefits: [
                'Follikelregeneration',
                'Haarqualitätsverbesserung',
                'Langanhaltende Wirkung',
                'Natürliche Erneuerung',
                'Anti-Aging-Effekt'
              ],
              process: 'Stammzellen werden aus Fettgewebe isoliert und auf die Kopfhaut aufgetragen.',
              duration: '2-3 Stunden',
              recovery: '1-2 Tage'
            },
            {
              title: 'Exosom-Behandlung',
              description: 'Aktivierung und Stärkung der Haarfollikel mit stammzellabgeleiteten Exosomen.',
              benefits: [
                'Schnelle Ergebnisse',
                'Starke Regeneration',
                'Minimal invasiv',
                'Hohe Wirksamkeit',
                'Sichere Anwendung'
              ],
              process: 'Exosom-Lösung wird mit Mikroinjektion auf die Kopfhaut aufgetragen.',
              duration: '45-60 Minuten',
              recovery: 'Sofortige Rückkehr zum normalen Leben'
            }
          ]
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
      whatsapp: {
        title: 'WhatsApp Kontakt',
        subtitle: 'Erreichen Sie uns über WhatsApp für schnelle Unterstützung',
        number: '+905331443271'
      },
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