import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fab, fas, far);


var HelloMessage = React.createClass({
  render: function() {
    return (
      <h1>Hello {this.props.name}!</h1>
    )
  }
});