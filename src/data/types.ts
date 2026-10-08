export type Wish = {
  id: string;
  text: string;
  hindi: string;
};

export type CategoryGroup = 'festival' | 'shayari';

export type Category = {
  slug: string;
  name: string;
  emoji: string;
  gradient: string;
  language: string;
  description: string;
  group: CategoryGroup;
  wishes: Wish[];
};
