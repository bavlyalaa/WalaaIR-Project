import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCramp = () => {
  return (
    <Breadcrumb className="custom-breadcrumb">
      <li className="breadcrumb-item not-active">Home</li>
      <li className="breadcrumb-item not-active">Investor Relations</li>
      <Breadcrumb.Item active className="text-white">Overview</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCramp;
