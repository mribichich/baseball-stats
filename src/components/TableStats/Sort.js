import React from 'react';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

export default ({columnName, columnDesc, activeSortColumn, order}) => {
  if (columnName !== activeSortColumn){
    return <span>{columnDesc}</span>;
  }

  return (
    <strong>
      {columnDesc}
      &nbsp;
      <OrderIcon order={order} />
    </strong>
  );
};

const OrderIcon = ({order}) => (
  <span>
    {order === 'asc' ? <Glyphicon glyph="sort-by-attributes" /> : null}
    {order === 'desc' ? <Glyphicon glyph="sort-by-attributes-alt" /> : null}
  </span>
);