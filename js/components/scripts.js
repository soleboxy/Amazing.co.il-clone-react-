//scripts.js
//this shit wont work
import React from 'react';

export default class Scripts extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.scripts = [
          // "vendor/jquery/jquery.min.js",
          // "vendor/bootstrap/js/bootstrap.min.js",
          // "https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js",
          // "js/freelancer.min.js",

    ];
  }

   componentWillMount() {
      this.import_loop(this.scripts, false);
    
    }

    import_loop(scripts, isAsync) {
       for (const key in scripts){
        let script_element = document.createElement("script");

        script_element.src = scripts[key];
        script_element.async = isAsync;

        document.body.appendChild(script_element);
      }
    }

  render() {
    return (
        <div class="scripts">      
        </div>
    );
  }
}
