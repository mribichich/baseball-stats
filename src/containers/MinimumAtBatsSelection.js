import { connect } from 'react-redux'

import MinimumAtBatsSelection from '../components/MinimumAtBatsSelection';
import { setMinimunPlateAppearances } from '../actions';

const mapStateToProps = (state) => {
  return {
    min: state.selectedMinimumPlateAppearances || state.minimumPlateAppearances,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChanged: (min) => {
      dispatch(setMinimunPlateAppearances(min))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinimumAtBatsSelection);
