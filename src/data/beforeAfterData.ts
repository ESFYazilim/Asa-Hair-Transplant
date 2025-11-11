export interface BeforeAfterPhoto {
  id: string;
  treatment_type: string;
  before_photo: string;
  after_photo: string;
  months_after: number;
  graft_count: number | null;
  description_tr: string | null;
  description_en: string | null;
  description_de: string | null;
  display_order: number;
}

export const beforeAfterPhotos: BeforeAfterPhoto[] = [
  {
    id: '0',
    treatment_type: 'FUE Hair Transplant',
    before_photo: '/images/before-after/abuzer.jpg',
    after_photo: '/images/before-after/abuzer.jpg',
    months_after: 12,
    graft_count: 4500,
    description_tr: 'Örnek fotoğraf - Abuzer',
    description_en: 'Sample photo - Abuzer',
    description_de: 'Beispielfoto - Abuzer',
    display_order: 0
  },
  {
    id: '1',
    treatment_type: 'FUE Hair Transplant',
    before_photo: '/images/before-after/fue-before-1.jpg',
    after_photo: '/images/before-after/fue-after-1.jpg',
    months_after: 12,
    graft_count: 4500,
    description_tr: 'FUE tekniği ile 4500 greft saç ekimi - 12 ay sonra',
    description_en: 'FUE technique with 4500 grafts - After 12 months',
    description_de: 'FUE-Technik mit 4500 Grafts - Nach 12 Monaten',
    display_order: 1
  },
  {
    id: '2',
    treatment_type: 'DHI Hair Transplant',
    before_photo: '/images/before-after/dhi-before-1.jpg',
    after_photo: '/images/before-after/dhi-after-1.jpg',
    months_after: 10,
    graft_count: 3800,
    description_tr: 'DHI yöntemi ile 3800 greft saç ekimi - 10 ay sonra',
    description_en: 'DHI method with 3800 grafts - After 10 months',
    description_de: 'DHI-Methode mit 3800 Grafts - Nach 10 Monaten',
    display_order: 2
  },
  {
    id: '3',
    treatment_type: 'Sapphire FUE',
    before_photo: '/images/before-after/sapphire-before-1.jpg',
    after_photo: '/images/before-after/sapphire-after-1.jpg',
    months_after: 14,
    graft_count: 5200,
    description_tr: 'Safir FUE ile 5200 greft saç ekimi - 14 ay sonra',
    description_en: 'Sapphire FUE with 5200 grafts - After 14 months',
    description_de: 'Saphir FUE mit 5200 Grafts - Nach 14 Monaten',
    display_order: 3
  },
  {
    id: '4',
    treatment_type: 'FUE Hair Transplant',
    before_photo: '/images/before-after/fue-before-2.jpg',
    after_photo: '/images/before-after/fue-after-2.jpg',
    months_after: 11,
    graft_count: 4000,
    description_tr: 'FUE tekniği ile 4000 greft saç ekimi - 11 ay sonra',
    description_en: 'FUE technique with 4000 grafts - After 11 months',
    description_de: 'FUE-Technik mit 4000 Grafts - Nach 11 Monaten',
    display_order: 4
  },
  {
    id: '5',
    treatment_type: 'DHI Hair Transplant',
    before_photo: '/images/before-after/dhi-before-2.jpg',
    after_photo: '/images/before-after/dhi-after-2.jpg',
    months_after: 9,
    graft_count: 3500,
    description_tr: 'DHI yöntemi ile 3500 greft saç ekimi - 9 ay sonra',
    description_en: 'DHI method with 3500 grafts - After 9 months',
    description_de: 'DHI-Methode mit 3500 Grafts - Nach 9 Monaten',
    display_order: 5
  },
  {
    id: '6',
    treatment_type: 'Sapphire FUE',
    before_photo: '/images/before-after/sapphire-before-2.jpg',
    after_photo: '/images/before-after/sapphire-after-2.jpg',
    months_after: 13,
    graft_count: 4800,
    description_tr: 'Safir FUE ile 4800 greft saç ekimi - 13 ay sonra',
    description_en: 'Sapphire FUE with 4800 grafts - After 13 months',
    description_de: 'Saphir FUE mit 4800 Grafts - Nach 13 Monaten',
    display_order: 6
  }
];
