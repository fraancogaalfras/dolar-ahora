import Header from '@/components/header/Header';
import MainWrapper from '@/components/main/MainWrapper';
import DetailPage from '@/views/DetailPage';

export default function DetailRoute() {
  return (
    <MainWrapper>
      <Header />
      <DetailPage />
    </MainWrapper>
  );
}
