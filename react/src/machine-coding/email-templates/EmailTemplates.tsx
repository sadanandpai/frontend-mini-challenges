import { FieldData, initialData } from './initialData';
import { useReducer, useState } from 'react';

import Fields from './Fields';
import Resignation from './templates/Resignation';
import TemplateSelector from './TemplateSelector';

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
