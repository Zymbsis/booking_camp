import { useDispatch, useSelector } from 'react-redux';
import { selectPage } from '@redux/campers/selectors';
import { getCamperList } from '@redux/campers/operations';
import { Button } from 'shared';
import css from './LoadMoreButton.module.css';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const handleLoadMore = () => {
    dispatch(getCamperList({ page }));
  };

  return (
    <Button
      className={css.loadMoreButton}
      onClick={handleLoadMore}>
      Load More
    </Button>
  );
};

export default LoadMoreButton;
