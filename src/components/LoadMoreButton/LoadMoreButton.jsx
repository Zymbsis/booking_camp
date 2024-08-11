import { useDispatch, useSelector } from 'react-redux';
import { getCamperList } from '@redux/campers/operations';
import { Button } from 'shared';
import { selectParams } from '@redux/campers/selectors';
import css from './LoadMoreButton.module.css';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);

  const handleLoadMore = () => {
    dispatch(getCamperList(params));
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
