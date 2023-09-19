export const enum TemplateEnum {
  JobApplication = 'jobApplication',
  JobSelection = 'jobSelection',
  Resignation = 'resignation',
}

export const config: Record<TemplateEnum, string[]> = {
  jobApplication: ['Name', 'Company Name', 'Experience'],
  jobSelection: ['Name', 'Company Name', 'Experience'],
  resignation: ['Name', 'Company Name', 'Current Date', 'Last Date'],
};
