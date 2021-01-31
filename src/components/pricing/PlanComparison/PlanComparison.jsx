import React from 'react'
import PropTypes from 'prop-types';
import TableRow from './TableRow/TableRow';
import './PlanComparison.scss';

function PlanComparison({
  comparison
}) {
  return (
    <section className="comparison">
      <div className="comparison__wrapper">
        <h3 className="comparison__title">Compare</h3>
        <table className="comparison__table">
          <thead className="comparison__head">
            <tr className="comparison__row">
              <th className="comparison__header comparison__header--head">
                The features
              </th>
              <th className="comparison__header comparison__header--head">
                Basic
              </th>
              <th className="comparison__header comparison__header--head">
                Pro
              </th>
              <th className="comparison__header comparison__header--head">
                Business
              </th>
            </tr>
          </thead>
          <tbody className="comparison__body">
            {
              comparison.map(c => (
                <TableRow
                  key={c.id}
                  {...c}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default PlanComparison

PlanComparison.propTypes = {
  comparison: PropTypes.array.isRequired
}
