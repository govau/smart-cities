import initialState from '../initialState';
import * as userBehaviour from '../../helpers/userBehaviour';

const ACTION_TYPES = {
  TOGGLE_CHART_PATTERNS: 'TOGGLE_CHART_PATTERNS',
};

export const uiReducer = (state = initialState.ui, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_CHART_PATTERNS: {
      return {
        showChartPatterns: action.showChartPatterns,
      };
    }

    default: {
      return state;
    }
  }
};

export const setShowChartPatterns = (showChartPatterns) => {
  userBehaviour.setShowChartPatterns(showChartPatterns);

  return {
    type: ACTION_TYPES.TOGGLE_CHART_PATTERNS,
    showChartPatterns,
  };
};
