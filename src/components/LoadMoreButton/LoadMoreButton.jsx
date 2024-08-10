import { useSelector } from 'react-redux';
import css from './LoadMoreButton.module.css';
import { selectHasNextPage } from '../../redux/campers/selectors';
import { Button } from 'shared';

const LoadMoreButton = ({ onClick }) => {
  const hasNextPage = useSelector(selectHasNextPage);

  return hasNextPage ? (
    <Button
      className={css.loadMoreButton}
      onClick={onClick}>
      Load More
    </Button>
  ) : (
    <p className={css.allResults}>Here are all the search results</p>
  );
};

export default LoadMoreButton;
