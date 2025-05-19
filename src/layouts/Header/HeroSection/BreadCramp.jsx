import { Breadcrumb } from 'antd';

const BreadCramp = () => {
  return (
<>
<Breadcrumb
    separator=">"
    items={[
        {
        title: 'Home',
    },
    {
        title: 'invistor relations',
        href: '',
    },
    {
        title: 'overview',
    },

]}
/> 
</>
 )
}

export default BreadCramp