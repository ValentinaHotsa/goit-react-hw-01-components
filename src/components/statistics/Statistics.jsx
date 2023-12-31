import css from './statistics.module.css'

export default function Statistics({title, data}) {
    const listItems = data.map(el =>
      <li key={el.id} className={css.item}>
      <span className={css.label}>{el.label} </span>
        <span className={css.percentage}>{el.percentage}%</span>
    </li>)
    return (
      <section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css.statList}>{listItems}</ul>
            </section>
    )
}