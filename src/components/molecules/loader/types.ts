export type LoaderProps = {
  /** Миксин для стилизации, присваивается элементу оверлея. Используйте css-класс, чтобы изменить css-свойства элемента. */
  className?: string;
  /** Проп ставит оверлею `position: fixed` и растягивает на высоту родительского контейнера. */
  isFixed?: boolean;
  /** Проп ставит оверлею `position: absolute` и растягивает на высоту родительского контейнера. */
  isAbsolute?: boolean;
};