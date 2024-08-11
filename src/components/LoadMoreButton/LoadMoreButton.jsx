import { useDispatch, useSelector } from 'react-redux';
import { getCamperList } from '@redux/campers/operations';
import { Button } from 'shared';
import css from './LoadMoreButton.module.css';
import { selectParams } from '../../redux/campers/selectors';

const LoadMoreButton = () => {
  const dispatch = useDispatch();
  const params = useSelector(selectParams);

  const handleLoadMore = () => {
    console.log(params);
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
