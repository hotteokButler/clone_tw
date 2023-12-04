// style

export type Font = {
  $color?: string;
  $font_size?: string;
  $font_weight?: number | string;
  $line_height?: string | number;
};


export type ButtonType = {
  $bg_color?: string;
  $color?: string;
  $font_size?: string | number;
  $padding?: string | number;
  $margin?: string;
  $line_height?: string | number;
};



// tweet
export interface ITweet {
  id: string;
  createdAt: number;
  photo?: string;
  tweet: string;
  user_id: string;
  user_name: string;
}