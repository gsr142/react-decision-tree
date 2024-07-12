import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';
import surveyJson from '../utils/data';
import 'survey-core/defaultV2.min.css';
import { DoubleBorderDark } from "survey-core/themes/doubleborder-dark"
import { LayeredDarkPanelless} from "survey-core/themes/layered-dark-panelless"
import { BorderlessLight } from "survey-core/themes/borderless-light"
const SURVEY_ID = 1;

function SurveyDemo() {
  const survey = new Model(surveyJson);
  //Below are different theme examples. Uncomment the one you want to use.
  //You can also create a custom theme and apply custom CSS classes to any element type
  //survey.applyTheme(DoubleBorderDark);
  //survey.applyTheme(LayeredDarkPanelless);
  survey.applyTheme(BorderlessLight);
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results); 
  }, []);

  survey.onComplete.add(alertResults);
  return (

    <Survey model={survey} />
  );
}

export default SurveyDemo;
