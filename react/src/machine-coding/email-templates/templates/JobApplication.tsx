import { FieldData } from '../utils/initialData';

function Resignation({ name, companyName, position, contactNumber }: Partial<FieldData>) {
  return (
    <div>
      <p>Hello,</p>
      <p>
        I wish to apply for the position of {position} that is listed on {companyName}. The role and the
        responsibilities listed in the job description match my interests and skills. I believe that I'm a good
        candidate for this position.
      </p>
      <p>
        I have attached my resume and cover letter for your perusal. I hope they can help you learn more about my
        background, my qualifications, and my experience.
      </p>
      <p>
        Thank you for your valuable time. I'm optimistic that you'll consider me for this role. I look forward to
        hearing from you about this job opportunity.
      </p>

      <br />
      <p>
        Sincerely,
        {name}
        {contactNumber}
      </p>
    </div>
  );
}

export default Resignation;
