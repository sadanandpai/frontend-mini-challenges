import { FieldData } from '../utils/initialData';

function Resignation({ name, companyName, effectiveDate, lastDate }: Partial<FieldData>) {
  console.log(effectiveDate);

  return (
    <div>
      <p>Hi,</p>
      <p>
        Please accept this email as my formal resignation from {companyName}. I have taken this decision as I have got a
        different/better work opportunity and would like to pursue my career in the same.
      </p>

      <p>
        Request you to consider my letter of resignation effective from {effectiveDate}. I understand that as per the
        policy I am required to serve a notice period of {60} days and my last working day accordingly shall be{' '}
        {lastDate}.
      </p>

      <p>
        I would request you to consider if an early release is possible. I am grateful to {companyName} and looking
        forward to your support.
      </p>
      <br />
      <p>
        Thanks and Regards,
        <br />
        {name}
      </p>
    </div>
  );
}

export default Resignation;
