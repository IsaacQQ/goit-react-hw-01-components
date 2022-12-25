import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistic.style.css';
export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
    
        <ul className={css.stat_list}>
          {stats.map(stat => (
            <li className={css.item} key={stat.id}>
              <span className={css.label}>{stat.label}</span>
              <span className={css.percentage}>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    );
    
  }
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.object),
  };