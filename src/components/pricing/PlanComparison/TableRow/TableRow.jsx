import React from 'react'
import PropTypes from 'prop-types';

const TableRow = ({
  title,
  availability
}) => {
  return (
    <tr className="comparison__row comparison__row--inner">
      <th className="comparison__header comparison__header--inner">
        {title}
      </th>
      {
        Object.keys(availability).map((key, index) => (
          <td
            className="comparison__cell"
            key={index}
          >
            <div className="comparison__column">
              <span className="comparison__plan">{key}</span>
              {/* Check if is set to true to render check mark */}
              <span className={`comparison__check ${availability[key] ? 'comparison__check--checked' : ''}`} />
            </div>
          </td>
        ))
      }
    </tr>
  )
}

export default TableRow

TableRow.propTypes = {
  title: PropTypes.string.isRequired,
  availability: PropTypes.shape({
    basic: PropTypes.bool.isRequired,
    pro: PropTypes.bool.isRequired,
    business: PropTypes.bool.isRequired,
  }).isRequired,
}
