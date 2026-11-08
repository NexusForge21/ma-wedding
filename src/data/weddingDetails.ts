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
  photoPlaceholder: string;
  about: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  imageUrl: string;
}

export interface WeddingData {
  bismillahArabic: string;
  bismillahTransliteration: string;
  bismillahMeaning: string;
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
  contactNumber?: string;
}

export const weddingDetails: WeddingData = {
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  bismillahTransliteration: "BISMILLAHIR RAHMANIR RAHEEM",
  bismillahMeaning: "In the name of Allah, the Most Gracious, the Most Merciful",
  coupleInitials: "M & A",
  targetNikahDateISO: "2026-11-26T16:30:00+05:30",

  bride: {
    role: "Bride",
    name: "Mizbha Tahereem Fatima",
    fullName: "Mizbha Tahereem Fatima",
    qualification: "B. Pharmacy",
    parentage: "D/o. Mohammed Ibrahim Mulla",
    father: "Mohammed Ibrahim Mulla",
    photoPlaceholder: "/assets/images/bride-placeholder.svg",
    about: "May Allah bless her with endless joy, barakah and love in this blessed union."
  },

  groom: {
    role: "Groom",
    name: "Altamash Ali",
    fullName: "Altamash Ali",
    qualification: "B.E., Mechanical Engineer",
    parentage: "S/o. Janab Liyaqat Ali Sahab",
    father: "Janab Liyaqat Ali Sahab",
    photoPlaceholder: "/assets/images/groom-placeholder.svg",
    about: "May Allah bestow wisdom, happiness and prosperity upon this new journey together."
  },

  invitationMessage: {
    opening: "In the name of Allah, the Most Merciful, the Most Compassionate.",
    body: "With the blessings of Almighty Allah and our beloved families, we cordially invite you to join us in celebrating the wedding ceremony of Mizbha Tahereem Fatima and Altamash Ali.",
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
      id: "gallery-1",
      title: "Floral Arabesque",
      category: "Invitation Motif",
      aspectRatio: "portrait",
      imageUrl: "/assets/images/gallery-1.svg"
    },
    {
      id: "gallery-2",
      title: "Golden Crescent & Arch",
      category: "Islamic Architecture",
      aspectRatio: "square",
      imageUrl: "/assets/images/gallery-2.svg"
    },
    {
      id: "gallery-3",
      title: "Lavender Blossom Wreath",
      category: "Floral Stationery",
      aspectRatio: "portrait",
      imageUrl: "/assets/images/gallery-3.svg"
    },
    {
      id: "gallery-4",
      title: "Traditional Lantern & Lights",
      category: "Celebration",
      aspectRatio: "landscape",
      imageUrl: "/assets/images/gallery-4.svg"
    },
    {
      id: "gallery-5",
      title: "Royal M & A Monogram",
      category: "Emblem",
      aspectRatio: "square",
      imageUrl: "/assets/images/gallery-5.svg"
    },
    {
      id: "gallery-6",
      title: "Serene Mosque Dome",
      category: "Sacred Venue",
      aspectRatio: "portrait",
      imageUrl: "/assets/images/gallery-6.svg"
    }
  ],

  dua: "May Allah bless the couple with love, happiness, barakah and a beautiful life together."
};
