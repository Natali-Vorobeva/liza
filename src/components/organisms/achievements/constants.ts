// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface IBadges {
  id: number;
  name: string;
  description: string;
  image: string;
  badge_type: string;
  badge_category: string;
  issued_for: string;
  threshold_courses: null | number;
  threshold_course: null;
  index?: number;
}

export const BADGES: IBadges[] = [
  {
    id: 1,
    name: 'Значок 1',
    description: 'два',
    image:
      'https://img2.freepng.ru/20180206/xfe/kisspng-cross-pattern-add-sign-cliparts-5a7962ad005ba0.0809306315179045570015.jpg',
    badge_type: 'manual',
    badge_category: 'one_time',
    issued_for: 'за то',
    threshold_courses: null,
    threshold_course: null,
  },
  {
    id: 2,
    name: 'Значок 2',
    description: 'два',
    image:
      'https://cdn.create.vista.com/api/media/small/80562638/stock-vector-vector-fire-and-water-logo-or-icon',
    badge_type: 'manual',
    badge_category: 'one_time',
    issued_for: 'за сё',
    threshold_courses: null,
    threshold_course: null,
  },
  {
    id: 3,
    name: 'Значок 3',
    description: 'два',
    image:
      'https://cdn0.iconfinder.com/data/icons/business-concepts-3/470/Person_On_A_Mountaintop_Holding_A_Flag-1024.png',
    badge_type: 'manual',
    badge_category: 'one_time',
    issued_for: 'за всё',
    threshold_courses: null,
    threshold_course: null,
  },
];
