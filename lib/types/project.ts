interface Session {
  number: number;
  day_of_week: string;
  start_time: string;
  end_time: string;
  description: string;
}

export interface Participants {
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
  homepage: string;
  title: string;
  start_date: string;
  end_date: string;
  project_time: string;
  project_category: string;
  duration_type: string;
  place: string;
  participants: Participants;
  video_url: string;
  description: string;
  summary: string;
  is_featured: boolean;
  featured_order?: number;
  image_urls: string[]; // ✅ 수정
  poster_url: string;
  banner_image_url?: string;
  apply_url?: string;
  sessions: Session[];
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
