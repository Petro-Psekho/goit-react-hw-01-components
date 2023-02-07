import PropTypes from 'prop-types';
import { getRandomColor } from 'components/utils/getRandomColor';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
