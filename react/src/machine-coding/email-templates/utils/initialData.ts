export interface FieldData {
  name: string;
  companyName: string;
  effectiveDate: string;
  lastDate: string;
  position: string;
  contactNumber: string;
}

export const initialData: FieldData = {
  name: 'John Doe',
  companyName: 'TwitX',
  effectiveDate: '',
  lastDate: '',
  position: '',
  contactNumber: '',
};
