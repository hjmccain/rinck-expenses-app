import React from 'react';

const UploadOrEditReceipt = (props) => {
  return props.visible ? (
    <div>Edit modal</div>
  ) : <div className="display-none"></div>
}

export default UploadOrEditReceipt
