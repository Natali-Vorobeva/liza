import type { FC } from 'react';
import defaultImg from 'assets/images/profile.jpg';
import { Card } from 'components/atoms/card';
import { Heading } from 'components/atoms/typography';
import { Button } from 'components/molecules/button';
import { TextWithIcon } from 'components/molecules/text-with-icon';
import { useAppSelector } from 'store';
import { selectProfileOverview } from 'store/profile/selectors';
import { Achievements } from 'components/organisms/achievements/achievements';
import { selectAchievements } from 'store/achievements/selectors';
import styles from './account-overview.module.scss';
import type { AccountOverviewType } from './types';

/**
 * Компонент-карточка с информацией профиля пользователя.
 * */

export const AccountOverview: FC = () => {
  const accountOverview = useAppSelector<AccountOverviewType>(
    selectProfileOverview
  );

  const data = useAppSelector(selectAchievements);
  console.log(data);
  return (
    <Card className={styles.accountOverview}>
      <div className={styles.avatarContainer}>
        {/* Заменить значение атрибута src на accountOverview.avatar когда будет готов бэкенд, сейчас оставлено для наглядности */}
        <img className={styles.avatar} src={defaultImg} alt="Фото профиля" />
      </div>

      <Heading level={3} weight="bold" className={styles.personalData}>
        {accountOverview.userName}
      </Heading>
      <Achievements
        // eslint-disable-next-line react/jsx-no-bind
        onMouseEnter={function (): void {}}
        // eslint-disable-next-line react/jsx-no-bind
        onMouseLeave={function (): void {}}
        key=""
      />
      <ul className={styles.accountMeta}>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={accountOverview.userStatus}
            iconType="rank"
          />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={accountOverview.userOccupation}
            iconType="role"
          />
        </li>
        <li className={styles.accountMetaItem}>
          <TextWithIcon
            htmlTag="span"
            text={`Пройдено ${accountOverview.coursesFinished} курса`}
            iconType="course"
          />
        </li>
      </ul>

      <Button
        view="secondary"
        hover="border"
        iconName="logout"
        className={styles.logout}
        text="Выйти из аккаунта"
      />
    </Card>
  );
};
