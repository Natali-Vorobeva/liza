import { BaseApi, privateApi } from '../core';
import type { AchievementsModel } from './types';

const SERVICE_URL = '/profile/';

class AchievementApi extends BaseApi {
  getAchievements = () =>
    this.createRequest<AchievementsModel>({
      request: () => privateApi.get(SERVICE_URL),
      // mock: () => import('../../components/organisms/achievements/constants'),
      mock: () => import('./mock/achievements'),
    });
}

export const achievementApi = new AchievementApi();
