export type CorpIdUserData = {
  user_id: string;
  user_name: string; // TAA...
  name: string;
  given_name: string;
  family_name: string;
  phone_number: string;
  email: string;
  email_verified: boolean;
  previous_logon_time: number;
  user_attributes: {
    // mostly based on intranet profile
    employee_type: string; // mostly ['intern'], even for indigo
    office: string[];
    department: string[];
    mobile_number: string[];
    employee_id: string[];
  };
  roles: string[];
  sub: string;
};
