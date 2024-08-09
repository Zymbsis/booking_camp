import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCamperList } from '../../redux/campers/operations';
import CamperList from '../CamperList/CamperList';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import css from './CatalogCampersSection.module.css';
import { selectCamperList } from '../../redux/campers/selectors';

const CatalogCampersSection = () => {
  const dispatch = useDispatch();
  const camperList = useSelector(selectCamperList);
  const [page, setPage] = useState(null);

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (page === null) {
      setPage(1);
      return;
    }
    dispatch(getCamperList({ page }));
  }, [dispatch, page]);

  return (
    <div className={css.wrapper}>
      <CamperList camperList={camperList} />
      <LoadMoreButton onClick={handleClick} />
    </div>
  );
};

export default CatalogCampersSection;
