export interface WeddingEvent {
  id: string;
  title: string;
  subTitle?: string;
  date: string;
  islamicDate?: string;
  time: string;
  venueName: string;
  venueAddress: string;
  city: string;
  googleMapsQuery: string;
  googleMapsUrl: string;
  iconType: 'mosque' | 'dinner' | 'valima';
  note?: string;
}

export interface CoupleProfile {
  name: string;
  fullName: string;
  qualification: string;
  parentage: string;
  father: string;
  role: 'Bride' | 'Groom';
  illustration: string;
  about: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface WeddingData {
  bismillahArabic: string;
  bismillahTransliteration: string;
  quranicVerseArabic: string;
  quranicVerseTranslation: string;
  quranicVerseReference: string;
  underBlessingsTitle: string;
  coupleInitials: string;
  targetNikahDateISO: string; // 2026-11-26T16:30:00+05:30 (After Asr)
  bride: CoupleProfile;
  groom: CoupleProfile;
  invitationMessage: {
    opening: string;
    body: string;
    closing: string;
  };
  events: WeddingEvent[];
  gallery: GalleryItem[];
  dua: string;
  closingNote: string;
  locationYear: string;
  instagram: {
    username: string;
    url: string;
  };
}

export const weddingDetails: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahTransliteration: "Bismillah ir-Rahman ir-Rahim",
  quranicVerseArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
  quranicVerseTranslation: "And We created you in pairs.",
  quranicVerseReference: "78:8",
  underBlessingsTitle: "UNDER THE BLESSINGS OF THEIR FAMILIES",
  coupleInitials: "M & A",
  targetNikahDateISO: "2026-11-26T16:30:00+05:30",

  bride: {
    role: "Bride",
    name: "Mizba Tehreem Fatima",
    fullName: "Mizba Tehreem Fatima",
    qualification: "B. Pharmacy",
    parentage: "D/o. Mohammed Ibrahim Mulla",
    father: "Mohammed Ibrahim Mulla",
    illustration: "/assets/images/bride-anime.png",
    about: "May Allah bless her with endless joy, barakah and love in this sacred union."
  },

  groom: {
    role: "Groom",
    name: "Altamash Ali",
    fullName: "Altamash Ali",
    qualification: "B.E., Mechanical Engineer",
    parentage: "S/o. Liyaqat Ali",
    father: "Liyaqat Ali",
    illustration: "/assets/images/groom-anime.png",
    about: "May Allah bestow wisdom, happiness and prosperity upon this new journey together."
  },

  invitationMessage: {
    opening: "In the name of Allah, the Most Merciful, the Most Compassionate.",
    body: "With the blessings of Almighty Allah and our beloved families, we cordially invite you to join us in celebrating the wedding ceremony of Mizba Tehreem Fatima and Altamash Ali.",
    closing: "Your gracious presence and duas will make this occasion even more special."
  },

  events: [
    {
      id: "nikah",
      title: "NIKAH",
      subTitle: "Solemnization of Marriage",
      date: "Thursday, 26 November 2026",
      islamicDate: "15 Jamadi us-Sani 1448 AH",
      time: "After Namaz-e-Asr",
      venueName: "Kalleyrawan Masjid",
      venueAddress: "Lohar Galli, Kirana Bazar, Gulbarga, Karnataka",
      city: "Gulbarga, Karnataka",
      googleMapsQuery: "Kalleyrawan Masjid, Lohar Galli, Kirana Bazar, Gulbarga, Karnataka",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Kalleyrawan Masjid, Lohar Galli, Kirana Bazar, Gulbarga, Karnataka"),
      iconType: "mosque",
      note: "Gentlemen are cordially requested to join for Asr prayers."
    },
    {
      id: "dinner",
      title: "WEDDING DINNER",
      subTitle: "Reception & Feast",
      date: "Thursday, 26 November 2026",
      islamicDate: "15 Jamadi us-Sani 1448 AH",
      time: "8:00 PM",
      venueName: "Al-Israr Function Hall",
      venueAddress: "Islamabad Colony, Gulbarga, Karnataka",
      city: "Gulbarga, Karnataka",
      googleMapsQuery: "Al-Israr Function Hall, Islamabad Colony, Gulbarga, Karnataka",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Al-Israr Function Hall, Islamabad Colony, Gulbarga, Karnataka"),
      iconType: "dinner",
      note: "Dinner will be served from 8:00 PM onwards."
    },
    {
      id: "valima",
      title: "VALIMA",
      subTitle: "Sunnah Celebration",
      date: "Friday, 27 November 2026",
      islamicDate: "16 Jamadi us-Sani 1448 AH",
      time: "8:00 PM",
      venueName: "Majestic Garden Function Hall",
      venueAddress: "Qamar Colony, Ring Road, Gulbarga, Karnataka",
      city: "Gulbarga, Karnataka",
      googleMapsQuery: "Majestic Garden Function Hall, Qamar Colony, Ring Road, Gulbarga, Karnataka",
      googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Majestic Garden Function Hall, Qamar Colony, Ring Road, Gulbarga, Karnataka"),
      iconType: "valima",
      note: "Join us with your families for a joyful evening."
    }
  ],

  gallery: [
    {
      id: "gallery-bride",
      title: "Bridal Elegance",
      category: "Anime Artistry",
      imageUrl: "/assets/images/bride-anime.png"
    },
    {
      id: "gallery-groom",
      title: "Royal Sherwani",
      category: "Anime Artistry",
      imageUrl: "/assets/images/groom-anime.png"
    },
    {
      id: "gallery-1",
      title: "Floral Arabesque",
      category: "Invitation Motif",
      imageUrl: "/assets/images/gallery-1.svg"
    },
    {
      id: "gallery-2",
      title: "Golden Crescent & Arch",
      category: "Islamic Architecture",
      imageUrl: "/assets/images/gallery-2.svg"
    },
    {
      id: "gallery-3",
      title: "Lavender Blossom Wreath",
      category: "Floral Stationery",
      imageUrl: "/assets/images/gallery-3.svg"
    },
    {
      id: "gallery-4",
      title: "Traditional Lantern & Lights",
      category: "Celebration",
      imageUrl: "/assets/images/gallery-4.svg"
    }
  ],

  dua: "May Allah bless the couple with love, happiness, barakah and a beautiful life together.",
  closingNote: "Made with love and duas",
  locationYear: "Gulbarga, Karnataka • 2026",
  instagram: {
    username: "theinvitationhub.co",
    url: "https://www.instagram.com/theinvitationhub.co/"
  }
};
