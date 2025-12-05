import { useTranslation } from 'react-i18next';

import { BagButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';



const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BagButton />
      {t('Главная страница')}
      <Counter />
    </div>
  )
}

export default MainPage;