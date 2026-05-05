export type VibeTag = 'food' | 'outdoors' | 'chill' | 'nightlife' | 'sports' | 'other'

export type Hangout = {
  id: string
  title: string
  location: string
  date_time: string
  vibe_tag: VibeTag
  image_url: string | null
  created_by: string
  joiner_ids: string[]
  created_at: string
}

export type User = {
  id: string
  display_name: string
  photo_url: string | null
  city: string
  created_at: string
}