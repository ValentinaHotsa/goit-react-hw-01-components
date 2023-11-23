import data from '../data/data.json'
export default function Statistics() {
    const listItems = data.map(el =>
        <li key={el.id} className="item">
      <span className="label">{el.label} </span>
      <span className="percentage">{el.percentage}%</span>
    </li>)
    return (
        <section className="statistics">
  <h2 className="title">Upload stats</h2>
            <ul className="stat-list">{listItems}</ul>
            </section>
    )
}