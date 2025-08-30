export interface ImageUrls {
  event_photos?: string[];
  poster_image?: string;
}

export interface RawEvent {
  PK: string;
  SK: string;
  created_at: string;
  description: string;
  duration_type: string;
  end_date: string;
  homepage: string;
  image_urls: ImageUrls | string; // ✅ 수정
  manager: string;
  place: string;
  project_category: string;
  project_time: string;
  sessions: unknown[];
  speaker: string | string[];
  staff: string;
  start_date: string;
  title: string;
  uid: string;
  updated_at: string;
}

export interface EventItem extends Omit<RawEvent, "image_urls" | "speaker"> {
  image_urls: ImageUrls; // ✅ 객체로 변환된 상태
  speaker: string[];
}

export interface BannerItem {
  uid: string;
  title: string;
  banner_image_url: string;
  featured_order: number;
}
