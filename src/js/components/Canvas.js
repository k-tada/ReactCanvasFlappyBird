import Counter from './parts/Counter';
import Character from './parts/Character';
import Pipe from './parts/Pipe';

let { Component } = React;
let {
  Surface,
  Group,
  Image
} = ReactCanvas;

export default class Canvas extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      pipes: [],
      count: 0
    };

    document.body.addEventListener('keydown', ( e ) => {
      var key = ( window.Event ) ? e.which : e.keyCode;
      if ( key == 32 ) {
        this.onClickCanvas( e );
      }
    });
  }

  watchPos() {
    var res = this.detectCollision();

    if ( ! res || this.props.setting.noHit ) {
      return true;
    }

    if ( res.state == 'HIT' ) {
      this._fail();
    } else if ( res.state == 'SUCCESS' ) {
      this._incrementCount();
    }

    return true;
  }

  detectCollision() {
    var canvasHeight = this.props.canvasHeight;
    var pos = this.refs.character.getPos();
    var hitBuf = 10;

    if ( pos.t < hitBuf || (pos.t + pos.h) > canvasHeight - hitBuf ) {
      // Out of screen
      return { state: 'HIT' };
    }

    var pipeId = this.state.count + 1;
    var pipe = this.refs[pipeId];

    if ( pipe ) {
      var gapPos = pipe.getGapPos();

      // detect left to right range
      if ( ( pos.l + pos.w ) >= gapPos.l && ( gapPos.l + gapPos.w ) <= pos.l ) {
        // detect top to bottom range
        if ( pos.t < gapPos.t || ( pos.t + pos.h ) > ( gapPos.t + gapPos.h ) ) {
          return { state: 'HIT' };
        }
      } else if ( pos.l >= ( gapPos.l + gapPos.w ) ) {
        return { state: 'SUCCESS' };
      }
    }
  }

  onClickCanvas( e ) {
    e.stopPropagation();
    e.preventDefault();
    this.refs.character.jump();
  }

  render() {
  }
}

