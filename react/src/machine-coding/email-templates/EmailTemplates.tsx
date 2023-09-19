import { FieldData, initialData } from './utils/initialData';
import { useReducer, useState } from 'react';

import Fields from './components/Fields';
import Resignation from './templates/Resignation';
import TemplateSelector from './components/TemplateSelector';

function EmailTemplates() {
  const [template, setTemplate] = useState('jobApplication');
  const [fields, dispatch] = useReducer(
    (state: FieldData, action: Partial<Record<keyof FieldData, string>>) => ({ ...state, ...action }),
    initialData
  );

  return (
    <>
      <TemplateSelector template={template} setTemplate={setTemplate} />
      <Fields fields={fields} dispatch={dispatch} />
      <hr />
      <Resignation {...fields} />
    </>
  );
}

export default EmailTemplates;
