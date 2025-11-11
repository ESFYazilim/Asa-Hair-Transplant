export interface Testimonial {
  id: string;
  patient_name: string;
  patient_role: string | null;
  content_tr: string;
  content_en: string | null;
  content_de: string | null;
  rating: number;
  treatment_type: string;
  google_review_url: string | null;
}

export const testimonials: Testimonial[] = [
  {
    id: '0',
    patient_name: 'Abuzer',
    patient_role: 'Örnek Hasta',
    content_tr: 'Bu bir örnek yorum. Gerçek hasta yorumlarını buraya ekleyebilirsiniz.',
    content_en: 'This is a sample review. You can add real patient reviews here.',
    content_de: 'Dies ist eine Beispielbewertung. Sie können hier echte Patientenbewertungen hinzufügen.',
    rating: 5,
    treatment_type: 'Örnek',
    google_review_url: null
  },
  {
    id: '1',
    patient_name: 'Ahmet Y.',
    patient_role: 'İstanbul',
    content_tr: 'Asa Hair Transplant\'te yaptırdığım saç ekimi operasyonu hayatımı değiştirdi. Ekip son derece profesyonel ve ilgiliydi. 12 ay sonra sonuçlar harika!',
    content_en: 'The hair transplant operation I had at Asa Hair Transplant changed my life. The team was extremely professional and caring. After 12 months, the results are amazing!',
    content_de: 'Die Haartransplantation, die ich bei Asa Hair Transplant durchführen ließ, hat mein Leben verändert. Das Team war äußerst professionell und fürsorglich. Nach 12 Monaten sind die Ergebnisse erstaunlich!',
    rating: 5,
    treatment_type: 'FUE Saç Ekimi',
    google_review_url: null
  },
  {
    id: '2',
    patient_name: 'Michael S.',
    patient_role: 'Germany',
    content_tr: 'Almanya\'dan geldim ve Asa Hair Transplant\'i seçtiğim için çok mutluyum. Transfer, konaklama ve tedavi süreci kusursuzdu. Sonuçlar beklentilerimin üzerinde.',
    content_en: 'I came from Germany and I am very happy that I chose Asa Hair Transplant. The transfer, accommodation and treatment process was flawless. The results exceeded my expectations.',
    content_de: 'Ich kam aus Deutschland und bin sehr glücklich, dass ich Asa Hair Transplant gewählt habe. Der Transfer, die Unterkunft und der Behandlungsprozess waren einwandfrei. Die Ergebnisse übertrafen meine Erwartungen.',
    rating: 5,
    treatment_type: 'Sapphire FUE',
    google_review_url: null
  },
  {
    id: '3',
    patient_name: 'John D.',
    patient_role: 'United Kingdom',
    content_tr: 'DHI yöntemi ile yaptırılan saç ekimim mükemmel sonuç verdi. Operasyon sırasında hiç ağrı hissetmedim. Doktor ve ekibi her aşamada benimle ilgilendi.',
    content_en: 'My hair transplant done with the DHI method gave excellent results. I felt no pain during the operation. The doctor and his team took care of me at every stage.',
    content_de: 'Meine Haartransplantation mit der DHI-Methode lieferte ausgezeichnete Ergebnisse. Ich hatte während der Operation keine Schmerzen. Der Arzt und sein Team kümmerten sich in jeder Phase um mich.',
    rating: 5,
    treatment_type: 'DHI Saç Ekimi',
    google_review_url: null
  },
  {
    id: '4',
    patient_name: 'Ali K.',
    patient_role: 'Ankara',
    content_tr: 'Saç ekimi yaptırmaktan çekiniyordum ama Asa Hair Transplant ekibi tüm korkularımı yendi. Çok doğal bir görünüm elde ettim. Herkese tavsiye ederim.',
    content_en: 'I was hesitant to get a hair transplant, but the Asa Hair Transplant team overcame all my fears. I achieved a very natural look. I recommend it to everyone.',
    content_de: 'Ich zögerte, eine Haartransplantation durchführen zu lassen, aber das Team von Asa Hair Transplant überwand alle meine Ängste. Ich erzielte ein sehr natürliches Aussehen. Ich empfehle es jedem.',
    rating: 5,
    treatment_type: 'FUE Saç Ekimi',
    google_review_url: null
  },
  {
    id: '5',
    patient_name: 'Thomas M.',
    patient_role: 'Austria',
    content_tr: 'Fiyat-kalite oranı mükemmel. Avrupa\'da aynı kalitede hizmeti almak çok daha pahalı olurdu. Operasyonun üzerinden 10 ay geçti ve sonuçtan çok memnunum.',
    content_en: 'The price-quality ratio is excellent. Getting the same quality service in Europe would be much more expensive. It has been 10 months since the operation and I am very satisfied with the results.',
    content_de: 'Das Preis-Leistungs-Verhältnis ist ausgezeichnet. In Europa wäre der gleiche Qualitätsservice viel teurer. Es ist 10 Monate seit der Operation her und ich bin sehr zufrieden mit den Ergebnissen.',
    rating: 5,
    treatment_type: 'Sapphire FUE',
    google_review_url: null
  },
  {
    id: '6',
    patient_name: 'Mehmet T.',
    patient_role: 'İzmir',
    content_tr: 'Operasyon öncesi ve sonrası takip mükemmeldi. WhatsApp üzerinden sürekli iletişim halinde kaldık. Saçlarım artık çok daha gür ve doğal görünüyor.',
    content_en: 'Pre and post-operative follow-up was excellent. We stayed in constant communication via WhatsApp. My hair now looks much fuller and more natural.',
    content_de: 'Die prä- und postoperative Nachsorge war ausgezeichnet. Wir blieben über WhatsApp in ständiger Kommunikation. Mein Haar sieht jetzt viel voller und natürlicher aus.',
    rating: 5,
    treatment_type: 'DHI Saç Ekimi',
    google_review_url: null
  }
];
