import 'bootstrap/dist/css/bootstrap.min.css';

import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const  Sidebar =() => {
  return (
    <div>
      <h1>
        Example heading
        <Badge bg="secondary" as={Button}>
          New
        </Badge>
      </h1>
    </div>
  );
}


export default Sidebar;