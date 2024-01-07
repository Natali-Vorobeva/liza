import type { AchievementsModel } from '../types';

export const achievements: AchievementsModel = [
  {
    name: 'Ачивка 1',
    description: 'Ачивка за знания',
    image: '../../assets/images/achievement.svg',
    badge_type: 'manual',
    badge_category: 'one_time',
    issued_for: 'За страсть к знаниям',
    threshold_courses: null,
    threshold_course: null,
  },
];

// export default Promise.resolve(() => achievements);
