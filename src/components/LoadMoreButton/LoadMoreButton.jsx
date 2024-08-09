import { useSelector } from 'react-redux';
import css from './LoadMoreButton.module.css';
import { selectHasNextPage } from '../../redux/campers/selectors';

const LoadMoreButton = ({ onClick }) => {
  const hasNextPage = useSelector(selectHasNextPage);

  return hasNextPage ? (
    <button
      className={css.loadMoreButton}
      onClick={onClick}>
      Load More
    </button>
  ) : (
    <p>It`s all result</p>
  );
};

export default LoadMoreButton;
