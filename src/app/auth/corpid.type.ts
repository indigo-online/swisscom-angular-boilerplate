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
  roles: string[];
  sub: string;
};
