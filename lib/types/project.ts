interface Session {
  title: string;
  description: string;
}

interface Participants {
  manager: string[];
  mc: string[];
  performer: string[];
  staff: string[];
  speaker: string[];
}

export interface EventItem {
  PK: string;
  SK: string;
  uid: string;
  description: string;
  duration_type: string;
  start_date: string;
  end_date: string;
  homepage: string;
  banner_image_url?: string;
  featured_order?: string;
  is_featured: boolean;
  image_urls: string[]; // ✅ 수정
  video_url: string;
  poster_url: string;
  place: string;
  project_category: string;
  project_time: string;
  sessions: Session[];
  participants: Participants;
  // manager: string;
  // speaker: string | string[];
  // staff: string;
  title: string;
  apply_url?: string;
  created_at: string;
  updated_at: string;
}

// export interface EventItem extends Omit<RawEvent, "speaker"> {
//   speaker: string[];
// }

export interface BannerItem {
  uid: string;
  title: string;
  banner_image_url: string;
  featured_order: number;
}
